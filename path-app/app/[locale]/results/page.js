"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { politicians, findClosestPolitician } from "@/data/politicians";
import { questions } from "@/data/questions";
import html2canvas from "html2canvas";

export default function ResultsPage() {
  const t = useTranslations("results");
  const locale = useLocale();
  const router = useRouter();

  const contentRef = useRef(null);
  const personaRef = useRef(null);

  const [results, setResults] = useState(null);
  const [closestMatch, setClosestMatch] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isDownloading, setIsDownloading] = useState(false);

  const [selectedPolitician, setSelectedPolitician] = useState(null);
  const [showPersona, setShowPersona] = useState(false);

  useEffect(() => {
    try {
      const storedResults = sessionStorage.getItem("quizResults");
      if (!storedResults) {
        if (typeof window !== "undefined") {
          console.warn("No results in session.");
          router.push("/");
        }
        return;
      }

      const parsedResults = JSON.parse(storedResults);
      if (parsedResults) {
        setResults(parsedResults);
        setAnswers(parsedResults.answers || {});

        const match = findClosestPolitician(
          parsedResults.economic || 0,
          parsedResults.social || 0
        );
        setClosestMatch(match);
      }
    } catch (e) {
      console.error("Error parsing results:", e);
    }
  }, [locale, router]);

  const handleDownload = async (ref, filename) => {
    if (!ref.current) return;
    try {
      setIsDownloading(true);
      const canvas = await html2canvas(ref.current, {
        useCORS: true,
        allowTaint: true,
        logging: true,
        backgroundColor: null,
        scale: 2,
        // Crucial: reset global styles in the clone to avoid oklab
        onclone: (clonedDoc) => {
          const el = clonedDoc.getElementById("persona-card-capture");
          if (el) {
            // Force override any tailwind defaults that might leak in
            el.style.fontFamily = "sans-serif";
          }
        },
      });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${filename}-${new Date()
        .toISOString()
        .slice(0, 10)}.png`;
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed: " + error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  const getPersonaTitle = (x, y) => {
    const safeX = Number(x) || 0;
    const safeY = Number(y) || 0;

    if (safeY > 2 && safeX > 2)
      return locale === "si"
        ? "දක්ෂිනාංශික පාලකයා"
        : locale === "ta"
        ? "கண்டிப்பான ஆளுமை"
        : "The Disciplinarian (Auth-Right)";
    if (safeY > 2 && safeX < -2)
      return locale === "si"
        ? "දේශප්‍රේමී සමාජවාදියා"
        : locale === "ta"
        ? "தேசபக்த சோசலிஸ்ட்"
        : "The Patriot (Auth-Left)";
    if (safeY < -2 && safeX > 2)
      return locale === "si"
        ? "නිදහස් වෙළඳපොල ප්‍රතිසංස්කාරක"
        : locale === "ta"
        ? "சந்தை சீர்திருத்தவாதி"
        : "The Market Reformist (Lib-Right)";
    if (safeY < -2 && safeX < -2)
      return locale === "si"
        ? "ප්‍රජාතන්ත්‍රවාදී විප්ලවවාදියා"
        : locale === "ta"
        ? "ஜனநாயகப் புரட்சியாளர்"
        : "The Revolutionary (Lib-Left)";
    return locale === "si"
      ? "මධ්‍යස්ථ චින්තකයා"
      : locale === "ta"
      ? "நடுநிலையாளர்"
      : "The Centrist";
  };

  const getControversialOpinion = () => {
    if (!answers || Object.keys(answers).length === 0) return null;
    const strongOpinions = Object.entries(answers).filter(
      ([id, val]) => Math.abs(val) === 2
    );
    if (strongOpinions.length === 0) return null;
    const randomOp =
      strongOpinions[Math.floor(Math.random() * strongOpinions.length)];
    const q = questions.find((q) => String(q.id) === String(randomOp[0]));
    if (!q || !q.text) return null;
    return { text: q.text[locale] || q.text["en"], val: randomOp[1] };
  };

  if (!results || !closestMatch) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-lg font-medium text-foreground">
          Calculating results...
        </div>
      </div>
    );
  }

  const leftPercent = ((results.economic + 10) / 20) * 100;
  const topPercent = ((10 - results.social) / 20) * 100;
  const personaTitle = getPersonaTitle(results.economic, results.social);
  const controversial = getControversialOpinion();
  const getPoliticianName = (p) => p.name[locale] || p.name["en"];
  const getReasoning = (p, type) =>
    (p.reasoning &&
      (p.reasoning[locale]?.[type] || p.reasoning["en"]?.[type])) ||
    "Info unavailable";

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6">
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-6xl p-4 md:p-8 bg-transparent"
      >
        {/* Header */}
        <div className="mb-8 text-center" data-html2canvas-ignore>
          <span className="mb-2 block text-sm font-bold uppercase tracking-[2px] text-gold-text">
            The Verdict
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {personaTitle}
          </h1>
          <p className="mt-4 text-xl text-foreground/70">{t("title")}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column */}
          <div className="bg-transparent space-y-6 lg:col-span-5">
            <div className="theme-card overflow-hidden rounded-[24px] p-8 shadow-lg">
              <div className="text-center">
                <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-gold-text">
                  {t("closestMatch")}
                </h2>
                <div className="mb-2 text-4xl font-extrabold text-foreground">
                  {getPoliticianName(closestMatch.politician)}
                </div>
                <div className="mb-6 font-medium text-foreground/60">
                  {closestMatch.politician.party}
                </div>
                <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-text">
                  {t("distance")}: {closestMatch.distance.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="theme-card rounded-[20px] p-6 text-center shadow-sm">
                <div className="text-sm font-medium text-foreground/60">
                  {t("economicAxis")}
                </div>
                <div className="mt-2 text-3xl font-bold text-foreground">
                  {Number(results.economic).toFixed(1)}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-gold-text">
                  {results.economic < 0 ? t("left") : t("right")}
                </div>
              </div>
              <div className="theme-card rounded-[20px] p-6 text-center shadow-sm">
                <div className="text-sm font-medium text-foreground/60">
                  {t("socialAxis")}
                </div>
                <div className="mt-2 text-3xl font-bold text-foreground">
                  {Number(results.social).toFixed(1)}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-gold-text">
                  {results.social < 0 ? t("liberal") : t("authoritarian")}
                </div>
              </div>
            </div>

            <div data-html2canvas-ignore className="flex flex-col gap-3 py-4">
              <button
                onClick={() => setShowPersona(true)}
                className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-purple-500/30"
              >
                Let me share this! (Story Mode) 📱
              </button>
              <button
                onClick={() => handleDownload(contentRef, "The-PATH-Results")}
                disabled={isDownloading}
                className="w-full rounded-xl border border-foreground/20 bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-foreground/5 hover:border-gold/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isDownloading ? "Generating..." : "Download Full Map"}
              </button>
              <button
                onClick={() => router.push("/")}
                className="w-full rounded-xl border border-foreground/20 bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-all hover:bg-foreground/5 hover:border-gold/50"
              >
                {t("retakeQuiz")}
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="theme-card relative overflow-hidden rounded-[32px] p-4 lg:col-span-7 shadow-2xl">
            <div className="relative aspect-square w-full overflow-hidden rounded-[24px] border border-foreground/10 bg-black/5">
              <img
                src="/hero-bg-new.jpg"
                alt="Compass"
                className="h-full w-full object-cover"
              />
              {politicians.map((p) => {
                const l = ((p.x + 10) / 20) * 100;
                const t = ((10 - p.y) / 20) * 100;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPolitician(p)}
                    className="absolute h-[12%] w-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-transparent bg-transparent hover:border-gold/80 hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(253,185,19,0.5)] transition-all focus:outline-none"
                    style={{ left: `${l}%`, top: `${t}%` }}
                  />
                );
              })}
              <div
                className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10 animate-pulse pointer-events-none"
                style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-xs font-bold text-white shadow-sm">
                  YOU
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm font-medium text-foreground/50 italic">
              Tap on any politician's face...
            </div>

            {selectedPolitician && (
              <div
                className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
                onClick={() => setSelectedPolitician(null)}
              >
                <div
                  className="theme-card relative w-full max-w-sm rounded-[24px] p-6 shadow-2xl animate-in zoom-in-95 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedPolitician(null)}
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-foreground/10 text-foreground/60 flex items-center justify-center"
                  >
                    ✕
                  </button>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {getPoliticianName(selectedPolitician)}
                    </h3>
                    <div className="text-sm font-bold text-gold-text">
                      {selectedPolitician.party}
                    </div>
                  </div>
                  <div className="space-y-4 text-sm text-foreground/80">
                    <div className="rounded-xl bg-foreground/5 p-3">
                      <strong className="block text-xs uppercase tracking-wider text-foreground/50 mb-1">
                        {locale === "en" ? "Economic Position" : "Economic"}
                      </strong>
                      {getReasoning(selectedPolitician, "economic")}
                    </div>
                    <div className="rounded-xl bg-foreground/5 p-3">
                      <strong className="block text-xs uppercase tracking-wider text-foreground/50 mb-1">
                        {locale === "en" ? "Social Position" : "Social"}
                      </strong>
                      {getReasoning(selectedPolitician, "social")}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- PERSONA MODAL --- */}
        {showPersona && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
            <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-300">
              {/* ZERO TAILWIND Utility Classes in Capture Area to Fix 'oklab' Error */}
              <div
                ref={personaRef}
                id="persona-card-capture"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "320px",
                  height: "568px",
                  borderRadius: "32px",
                  backgroundColor: "#000000",
                  border: "4px solid #1a1a1a",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // Manual box-shadow
                  fontFamily: "sans-serif",
                }}
              >
                {/* Background Art */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.8,
                    background:
                      "linear-gradient(135deg, #2a0e0e 0%, #000000 50%, #0e2a14 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "256px",
                    height: "256px",
                    borderRadius: "9999px",
                    background: "rgba(253, 185, 19, 0.2)",
                    filter: "blur(80px)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "32px",
                    textAlign: "center",
                    color: "#ffffff",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        marginBottom: "24px",
                        color: "rgba(253, 185, 19, 0.8)",
                      }}
                    >
                      The P.A.T.H. Personality
                    </div>

                    {/* Title */}
                    <h2
                      style={{
                        fontSize: "36px",
                        fontWeight: "800",
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                        marginBottom: "8px",
                        color: "#FDB913",
                      }}
                    >
                      {personaTitle}
                    </h2>
                    <div
                      style={{
                        height: "4px",
                        width: "64px",
                        margin: "0 auto 32px auto",
                        borderRadius: "9999px",
                        background: "rgba(253, 185, 19, 0.5)",
                      }}
                    />

                    <div style={{ marginBottom: "32px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          marginBottom: "8px",
                        }}
                      >
                        I align with
                      </div>
                      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                        {getPoliticianName(closestMatch.politician)}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#FDB913",
                        }}
                      >
                        {closestMatch.politician.party}
                      </div>
                    </div>

                    {controversial && (
                      <div
                        style={{
                          borderRadius: "16px",
                          padding: "16px",
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "10px",
                            color: "#9ca3af",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            marginBottom: "8px",
                          }}
                        >
                          My Hot Take 🔥
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontStyle: "italic",
                            fontWeight: "500",
                            lineHeight: 1.5,
                          }}
                        >
                          "{controversial.text}"
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            marginTop: "8px",
                            textTransform: "uppercase",
                            color: "#FDB913",
                          }}
                        >
                          {controversial.val > 0
                            ? "Strongly Agree"
                            : "Strongly Disagree"}
                        </div>
                      </div>
                    )}
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "96px",
                        height: "96px",
                        margin: "0 auto 16px auto",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "12px",
                        overflow: "hidden",
                        background: "rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      <img
                        src="/hero-bg-new.jpg"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          opacity: 0.5,
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          width: "12px",
                          height: "12px",
                          borderRadius: "9999px",
                          background: "#EF4444",
                          border: "1px solid #FFFFFF",
                          left: `${leftPercent}%`,
                          top: `${topPercent}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        opacity: 0.5,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      path.lk
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full max-w-[320px] no-capture">
                <button
                  onClick={() =>
                    handleDownload(personaRef, "My-Political-Persona")
                  }
                  className="w-full rounded-2xl bg-[#FDB913] py-4 text-center font-extrabold text-black hover:bg-[#ffc845] active:scale-95 transition-all shadow-[0_0_20px_rgba(253,185,19,0.3)]"
                >
                  Download Image ⬇️
                </button>
                <button
                  onClick={() => setShowPersona(false)}
                  className="w-full rounded-xl py-3 text-sm font-semibold text-white/50 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
