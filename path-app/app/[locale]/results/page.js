"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { politicians, findClosestPolitician } from "@/data/politicians";
import { questions } from "@/data/questions";
import html2canvas from "html2canvas";
import { useTheme } from "next-themes";

const PoliticianAvatar = ({ politician }) => {
  const [error, setError] = useState(false);

  if (politician.image && !error) {
    return (
      <img
        src={politician.image}
        alt={politician.name["en"]}
        className="h-full w-full object-cover"
        onError={() => setError(true)}
        crossOrigin="anonymous"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-200 text-[10px] font-bold text-gray-600">
      {politician.name["en"].charAt(0)}
    </div>
  );
};

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

  const getArchetype = (x, y) => {
    const safeX = Number(x) || 0;
    const safeY = Number(y) || 0;

    if (safeX < -2 && safeY > 2)
      return {
        title: "Statist Nationalist (Authoritarian Left)",
        desc: "You believe in a strong government that controls the economy and protects national sovereignty. You prefer state-owned industries over privatization.",
      };
    if (safeX > 2 && safeY > 2)
      return {
        title: "Conservative Capitalist (Authoritarian Right)",
        desc: "You support a free market and open economy but believe in strong leadership and traditional values. You prioritize stability and growth.",
      };
    if (safeX < -2 && safeY < -2)
      return {
        title: "Democratic Socialist (Libertarian Left)",
        desc: "You value social equality and civil rights. You support wealth redistribution but strongly oppose authoritarianism and corruption.",
      };
    if (safeX > 2 && safeY < -2)
      return {
        title: "Social Liberal (Libertarian Right)",
        desc: "You believe in individual freedom in both the economy and personal life. You want less government interference in business and rights.",
      };
    return {
      title: "Centrist Moderate (Center)",
      desc: "You see value in both sides and prefer pragmatic, gradual reform over radical change.",
    };
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

  const { resolvedTheme } = useTheme();

  // Unified Theme: Adaptive Premium Look (Light & Dark)
  const getArchetypeTheme = (archetypeTitle) => {
    let icon = "⚖️";
    if (archetypeTitle.includes("Statist")) icon = "🛡️";
    else if (archetypeTitle.includes("Socialist")) icon = "✊";
    else if (archetypeTitle.includes("Liberal")) icon = "🕊️";

    const isLight = resolvedTheme === "light";

    return {
      // Dynamic Background: Dark/Black vs Light/White
      bg: isLight
        ? "bg-white/95 backdrop-blur-2xl border border-gray-200 shadow-xl"
        : "bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50",

      // Dynamic Text Colors
      text: isLight ? "text-gray-900" : "text-white",
      subtext: isLight ? "text-gray-500" : "text-white/70",

      // Accents: Darker gold for text in light mode for readability, Standard Gold in dark
      accent: isLight ? "text-[#b47602]" : "text-[#FDB913]",
      border: isLight ? "border-[#FDB913]/30" : "border-gold/20",

      icon: icon,

      // Dynamic Shadows
      glow: isLight
        ? "shadow-2xl shadow-gray-200"
        : "shadow-2xl shadow-black/50",

      // Progress Bar Tracks
      barTrack: isLight ? "bg-gray-100" : "bg-white/10",
      // Bar Color: Warmer/Brighter gradient in Light mode, Richer in Dark
      barColor: isLight
        ? "bg-gradient-to-r from-[#FDB913] to-[#F59E0B]" // Brighter Amber/Gold
        : "bg-gradient-to-r from-[#FDB913] to-[#aa7d0e]", // Deep Gold
    };
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

  // Closest match coordinates for line drawing
  const matchLeft = ((closestMatch.politician.x + 10) / 20) * 100;
  const matchTop = ((10 - closestMatch.politician.y) / 20) * 100;

  const archetype = getArchetype(results.economic, results.social);
  const theme = getArchetypeTheme(archetype.title);
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
        className="relative z-10 mx-auto max-w-7xl p-0 md:p-4 bg-transparent"
      >
        {/* Header */}
        <div className="mb-12 text-center" data-html2canvas-ignore>
          <span className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-gold-text opacity-80">
            Identity Revealed
          </span>
          <h1 className="text-4xl font-black tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            {archetype.title.split("(")[0]}
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground/60 max-w-2xl mx-auto">
            {archetype.title.split("(")[1]?.replace(")", "") ||
              "Political Compass Result"}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* CONCEPT 1: RPG CARD (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              ref={personaRef}
              id="persona-card-capture"
              className={`relative overflow-hidden rounded-[40px] border-[1px] ${theme.border} ${theme.bg} p-8 shadow-2xl ${theme.glow} transition-all`}
            >
              {/* Subtle Gold Gradient Mesh */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* 3D Icon */}
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gold/10 text-[5rem] shadow-[inset_0_0_20px_rgba(253,185,19,0.1)] border border-gold/20 backdrop-blur-sm">
                  {theme.icon}
                </div>

                <h2
                  className={`text-3xl font-black ${theme.text} leading-tight mb-2`}
                >
                  {archetype.title.split("(")[0]}
                </h2>
                <div
                  className={`text-sm font-bold uppercase tracking-[2px] ${theme.accent} mb-8`}
                >
                  {archetype.title.split("(")[1]?.replace(")", "")}
                </div>

                <p
                  className={`${theme.subtext} font-medium leading-relaxed mb-8 text-base px-2`}
                >
                  "{archetype.desc}"
                </p>

                {/* RPG Stats Bars */}
                <div
                  className={`w-full space-y-6 rounded-2xl p-6 border ${
                    theme.border
                  } ${
                    resolvedTheme === "light" ? "bg-black/5" : "bg-black/20"
                  }`}
                >
                  {/* Economic Bar */}
                  <div>
                    <div
                      className={`flex justify-between text-xs font-bold uppercase tracking-wider ${theme.subtext} opacity-70 mb-2`}
                    >
                      <span>Economic Stance</span>
                      <span className={theme.accent}>
                        {Math.abs(results.economic) > 5
                          ? "Extreme"
                          : "Moderate"}{" "}
                        {results.economic > 0 ? "Right" : "Left"}
                      </span>
                    </div>
                    <div
                      className={`h-4 w-full rounded-full ${theme.barTrack} overflow-hidden relative border border-white/5`}
                    >
                      {/* Middle Marker */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 z-10"></div>
                      <div
                        className={`h-full rounded-full shadow-[0_0_10px_rgba(253,185,19,0.3)] ${theme.barColor}`}
                        style={{
                          width: `${Math.min(
                            Math.abs(results.economic) * 10,
                            100
                          )}%`,
                          marginLeft:
                            results.economic > 0
                              ? "50%"
                              : `${
                                  50 -
                                  Math.min(Math.abs(results.economic) * 10, 100)
                                }%`,
                        }}
                      />
                    </div>
                    <div
                      className={`flex justify-between text-[10px] uppercase font-bold ${theme.subtext} opacity-50 mt-2`}
                    >
                      <span>Socialist</span>
                      <span>Capitalist</span>
                    </div>
                  </div>

                  {/* Social Bar */}
                  <div>
                    <div
                      className={`flex justify-between text-xs font-bold uppercase tracking-wider ${theme.subtext} opacity-70 mb-2`}
                    >
                      <span>Social Stance</span>
                      <span className={theme.accent}>
                        {Math.abs(results.social) > 5 ? "Radical" : "Moderate"}{" "}
                        {results.social > 0 ? "Auth" : "Lib"}
                      </span>
                    </div>
                    <div
                      className={`h-4 w-full rounded-full ${theme.barTrack} overflow-hidden relative border border-white/5`}
                    >
                      {/* Middle Marker */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 z-10"></div>
                      <div
                        className={`h-full rounded-full shadow-[0_0_10px_rgba(253,185,19,0.3)] ${theme.barColor}`}
                        style={{
                          width: `${Math.min(
                            Math.abs(results.social) * 10,
                            100
                          )}%`,
                          marginLeft:
                            results.social > 0
                              ? "50%"
                              : `${
                                  50 -
                                  Math.min(Math.abs(results.social) * 10, 100)
                                }%`,
                        }}
                      />
                    </div>
                    <div
                      className={`flex justify-between text-[10px] uppercase font-bold ${theme.subtext} opacity-50 mt-2`}
                    >
                      <span>Libertarian</span>
                      <span>Authoritarian</span>
                    </div>
                  </div>

                  {/* Closest Match Stat */}
                  <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase ${theme.subtext} opacity-50`}
                    >
                      Closest Match
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border border-gold/30 overflow-hidden bg-black/50">
                        <PoliticianAvatar
                          politician={closestMatch.politician}
                        />
                      </div>
                      <div className="flex flex-col items-end">
                        <span
                          className={`text-sm font-bold ${theme.text} leading-none`}
                        >
                          {getPoliticianName(closestMatch.politician)}
                        </span>
                        <span className="text-[10px] text-gold-text opacity-80 mt-1 font-medium">
                          {(100 - closestMatch.distance * 5).toFixed(0)}% Match
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Branding */}
              <div className="absolute bottom-6 left-0 right-0 text-center opacity-30">
                <span className="text-[10px] uppercase tracking-[4px] font-bold text-gold-text">
                  The P.A.T.H. Sri Lanka
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3" data-html2canvas-ignore>
              <button
                onClick={() => handleDownload(personaRef, "My-Political-Card")}
                disabled={isDownloading}
                className="col-span-2 rounded-xl bg-[#FDB913] py-4 text-center font-bold text-black hover:bg-[#ffc845] active:scale-95 transition-all shadow-lg"
              >
                {isDownloading ? "Generating..." : "Download Card ⬇️"}
              </button>
              <button
                onClick={() => router.push("/")}
                className="col-span-2 rounded-xl border border-foreground/10 bg-foreground/5 py-4 text-center font-semibold text-foreground hover:bg-foreground/10 transition-all"
              >
                Retake Quiz
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: CONCEPT 2 (The Grid) */}
          <div
            className={`relative rounded-[40px] border-[1px] ${theme.border} ${theme.bg} p-8 lg:col-span-7 shadow-2xl ${theme.glow} overflow-hidden flex flex-col`}
          >
            <div className="w-full text-left mb-2 z-20">
              <div
                className={`text-xs font-bold uppercase tracking-wider ${theme.subtext} opacity-70 mb-1`}
              >
                Compass View
              </div>
              <h3 className={`text-xl font-bold ${theme.text}`}>
                Where you stand
              </h3>
            </div>

            <div
              className={`relative aspect-square w-full max-w-full lg:max-w-[450px] mx-auto overflow-visible my-auto ${theme.text}`}
            >
              {/* Quadrant Colors */}
              <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500/40" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/40" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500/40" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-500/40" />
              </div>

              {/* Grid Background */}
              <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                  backgroundSize: "10% 10%",
                  maskImage:
                    "radial-gradient(circle, black 60%, transparent 100%)",
                }}
              />

              {/* Axes */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-current opacity-20 z-0" />
              <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-current opacity-20 z-0" />

              {/* Quadrant Labels */}
              <div
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
              >
                Authoritarian
              </div>
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
              >
                Libertarian
              </div>
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 -rotate-90 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
              >
                Left
              </div>
              <div
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 rotate-90 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
              >
                Right
              </div>

              {/* Nearest Neighbor Line (SVG) */}
              <svg className="absolute inset-0 pointer-events-none z-10 w-full h-full overflow-visible">
                <line
                  x1={`${leftPercent}%`}
                  y1={`${topPercent}%`}
                  x2={`${matchLeft}%`}
                  y2={`${matchTop}%`}
                  stroke={
                    theme.accent.replace("text-", "#") === "text-yellow-400"
                      ? "#FACC15"
                      : "currentColor"
                  } // Fallback color logic simplified, easier to just use class if possible or inline style
                  className={`${theme.accent} opacity-50`}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <circle
                  cx={`${matchLeft}%`}
                  cy={`${matchTop}%`}
                  r="4"
                  fill="currentColor"
                  className={`${theme.accent} animate-ping opacity-20`}
                />
              </svg>

              {/* Politicians */}
              {politicians.map((p) => {
                const l = ((p.x + 10) / 20) * 100;
                const t = ((10 - p.y) / 20) * 100;
                const isClosest = p.id === closestMatch.politician.id;

                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPolitician(p)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 group ${
                      isClosest
                        ? "scale-125 z-30"
                        : "scale-100 hover:scale-110 opacity-70 hover:opacity-100"
                    }`}
                    style={{ left: `${l}%`, top: `${t}%` }}
                  >
                    <div
                      className={`relative h-10 w-10 rounded-full border-2 overflow-hidden shadow-md bg-white ${
                        isClosest
                          ? "border-gold shadow-[0_0_15px_rgba(253,185,19,0.6)]"
                          : "border-white/50"
                      }`}
                    >
                      <PoliticianAvatar politician={p} />
                    </div>
                    {isClosest && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-gold-text pointer-events-none">
                        Closest Match
                      </div>
                    )}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-lg text-[10px] font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {p.name[locale] || p.name["en"]}
                    </div>
                  </button>
                );
              })}

              {/* YOU Marker */}
              <div
                className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 z-40 transform hover:scale-125 transition-transform cursor-pointer"
                style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
              >
                <div className="absolute inset-0 rounded-full bg-red-600 border-2 border-white shadow-[0_0_20px_rgba(220,38,38,0.6)] animate-pulse"></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  YOU
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-foreground/60">
                You are{" "}
                <span className="font-bold text-foreground">
                  {(100 - closestMatch.distance * 5).toFixed(0)}% similar
                </span>{" "}
                to{" "}
                <span className="font-bold text-gold-text">
                  {getPoliticianName(closestMatch.politician)}
                </span>
                .
              </p>
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
                    className="absolute top-4 right-4 h-8 w-8 rounded-full bg-foreground/10 text-foreground/60 flex items-center justify-center hover:bg-foreground/20"
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
      </div>
    </div>
  );
}
