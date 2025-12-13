"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { politicians, findClosestPolitician } from "@/data/politicians";
import { questions } from "@/data/questions";
import { toPng } from "html-to-image";
import { useTheme } from "next-themes";

// ... (existing imports)

/**
 * Avatar Helper
 * Renders politician image or a fallback initial.
 */
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

/**
 * ResultsPage Component
 * Displays the user's political alignment, archetype, and closest historical match.
 * Features:
 * - "Persona Card" generation (downloadable image)
 * - 2D Coordinate Grid visualization
 * - Closest match algorithm presentation
 */
export default function ResultsPage() {
  const t = useTranslations("results");
  const locale = useLocale();
  const router = useRouter();

  // Refs for capturing the DOM for image download
  const contentRef = useRef(null);
  const personaRef = useRef(null);
  const compassRef = useRef(null);
  const exportRef = useRef(null);

  const [results, setResults] = useState(null);
  const [closestMatch, setClosestMatch] = useState(null);
  const [answers, setAnswers] = useState({});
  const [isDownloading, setIsDownloading] = useState(false);

  const [selectedPolitician, setSelectedPolitician] = useState(null);
  const [showPersona, setShowPersona] = useState(false);

  // Load results from Session Storage on mount
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

        // Calculate closest match using Euclidean distance
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

  /**
   * Generates a PNG image of the Persona Card.
   * Uses html-to-image library.
   */
  const handleDownload = async (ref, filename) => {
    if (!ref.current) return;
    try {
      setIsDownloading(true);
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        backgroundColor: null,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
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

  /**
   * Determines the political Label/Archetype based on the quadrant.
   */
  const getArchetype = (x, y) => {
    const safeX = Number(x) || 0;
    const safeY = Number(y) || 0;

    // Define Center range (strict center)
    if (Math.abs(safeX) < 1.5 && Math.abs(safeY) < 1.5) {
      return {
        title: "Centrist Moderate (Center)",
        desc: "You see value in both sides and prefer pragmatic, gradual reform over radical change.",
      };
    }

    // Quadrants (Prioritize these if outside the small center box)
    if (safeX <= 0 && safeY >= 0)
      return {
        title: "Statist Nationalist (Authoritarian Left)",
        desc: "You believe in a strong government that controls the economy and protects national sovereignty. You prefer state-owned industries over privatization.",
      };
    if (safeX >= 0 && safeY >= 0)
      return {
        title: "Conservative Capitalist (Authoritarian Right)",
        desc: "You support a free market and open economy but believe in strong leadership and traditional values. You prioritize stability and growth.",
      };
    if (safeX <= 0 && safeY <= 0)
      return {
        title: "Democratic Socialist (Libertarian Left)",
        desc: "You value social equality and civil rights. You support wealth redistribution but strongly oppose authoritarianism and corruption.",
      };
    if (safeX >= 0 && safeY <= 0)
      return {
        title: "Social Liberal (Libertarian Right)",
        desc: "You believe in individual freedom in both the economy and personal life. You want less government interference in business and rights.",
      };

    // Fallback
    return {
      title: "Centrist Moderate (Center)",
      desc: "You see value in both sides and prefer pragmatic, gradual reform over radical change.",
    };
  };

  // Helper to find a strong opinion to display (Optional Feature)
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

  /**
   * Adaptive Theme Engine for the Persona Card.
   * Changes styles based on result Type (Auth/Lib) and current App Theme (Dark/Light).
   */
  const getArchetypeTheme = (archetypeTitle) => {
    let icon = "⚖️";
    if (archetypeTitle.includes("Statist")) icon = "🛡️";
    else if (archetypeTitle.includes("Socialist")) icon = "✊";
    else if (archetypeTitle.includes("Liberal")) icon = "🕊️";
    else if (archetypeTitle.includes("Conservative")) icon = "🏛️";

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

  // Calculate coordinates for CSS positioning (0-100%)
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
    <div className="relative min-h-screen">
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-[1200px] px-6 py-12"
      >
        {/* Header */}
        <div className="mb-16 text-center" data-html2canvas-ignore>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
            Identity Revealed
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {archetype.title.split("(")[0]}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
            {archetype.title.split("(")[1]?.replace(")", "") ||
              "Political Compass Result"}
          </p>
        </div>

        <div className="grid gap-8 justify-items-center">
          {/* UNIFIED PROFILE CARD */}
          <div
            ref={contentRef}
            id="unified-result-card"
            className={`relative w-full overflow-hidden rounded-[40px] border-[1px] ${theme.border} ${theme.bg} p-8 lg:p-12 shadow-2xl ${theme.glow} transition-all`}
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="grid gap-12 lg:grid-cols-12 items-center relative z-10">
              {/* LEFT COLUMN: Archetype Info */}
              <div className="lg:col-span-5 flex flex-col text-center lg:text-left">
                <div className="mb-6 mx-auto lg:mx-0 flex h-24 w-24 items-center justify-center rounded-3xl bg-gold/10 text-[5rem] shadow-[inset_0_0_20px_rgba(253,185,19,0.1)] border border-gold/20 backdrop-blur-sm">
                  {theme.icon}
                </div>

                <h2
                  className={`text-4xl font-black ${theme.text} leading-tight mb-2`}
                >
                  {archetype.title.split("(")[0]}
                </h2>
                <div
                  className={`text-sm font-bold uppercase tracking-[2px] ${theme.accent} mb-6`}
                >
                  {archetype.title.split("(")[1]?.replace(")", "")}
                </div>

                <p
                  className={`${theme.subtext} font-medium leading-relaxed mb-8 text-lg`}
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
                      className={`h-3 w-full rounded-full ${theme.barTrack} overflow-hidden relative border border-white/5`}
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
                      className={`h-3 w-full rounded-full ${theme.barTrack} overflow-hidden relative border border-white/5`}
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
                </div>
              </div>

              {/* RIGHT COLUMN: Compass View */}
              <div className="lg:col-span-7 flex flex-col relative">
                <div className="w-full text-left mb-2 z-20 flex justify-between items-start">
                  <div>
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${theme.subtext} opacity-70 mb-1`}
                    >
                      Compass View
                    </div>
                    <h3 className={`text-xl font-bold ${theme.text}`}>
                      Where you stand
                    </h3>
                  </div>
                </div>

                <div
                  ref={compassRef}
                  className={`relative aspect-square w-full max-w-full lg:max-w-[500px] mx-auto overflow-visible ${theme.text}`}
                >
                  {/* Quadrant Colors */}
                  <div className="absolute inset-0 z-0 opacity-30 rounded-3xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500/40" />
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/40" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-500/40" />
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-500/40" />
                  </div>

                  {/* Grid Lines */}
                  <div
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                      backgroundSize: "10% 10%",
                      maskImage:
                        "radial-gradient(circle, black 60%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(circle, black 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-current opacity-30 z-0" />
                  <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-current opacity-30 z-0" />

                  {/* Labels */}
                  <div
                    className={`absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
                  >
                    Authoritarian
                  </div>
                  <div
                    className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
                  >
                    Libertarian
                  </div>
                  <div
                    className={`absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
                  >
                    Left
                  </div>
                  <div
                    className={`absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold uppercase tracking-widest ${theme.subtext} opacity-60`}
                  >
                    Right
                  </div>

                  {politicians.map((p) => {
                    // Clamp values to keep avatars inside the grid visual (5% to 95%)
                    const rawL = ((p.x + 10) / 20) * 100;
                    const rawT = ((10 - p.y) / 20) * 100;
                    const l = Math.max(5, Math.min(95, rawL));
                    const t = Math.max(5, Math.min(95, rawT));
                    return (
                      <button
                        key={p.id}
                        onClick={() => setSelectedPolitician(p)}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 group scale-100 hover:scale-110 opacity-70 hover:opacity-100`}
                        style={{ left: `${l}%`, top: `${t}%` }}
                      >
                        <div
                          className={`relative h-10 w-10 rounded-full border-2 overflow-hidden shadow-md bg-white border-white/50`}
                        >
                          <PoliticianAvatar politician={p} />
                        </div>
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
              </div>
            </div>

            {/* Footer Branding */}
            <div className="absolute bottom-4 left-0 right-0 text-center opacity-30">
              <span className="text-[10px] uppercase tracking-[4px] font-bold text-gold-text">
                The P.A.T.H. Sri Lanka
              </span>
            </div>
          </div>

          {/* ACTION BUTTONS (Outside Unified Card) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl px-4">
            <button
              onClick={() => handleDownload(contentRef, "My-Political-Profile")}
              disabled={isDownloading}
              className="rounded-xl bg-[#FDB913] py-4 text-center font-bold text-black hover:bg-[#ffc845] active:scale-95 transition-all shadow-lg"
            >
              {isDownloading ? "Saving..." : "Download Profile"}
            </button>

            <button
              onClick={() => router.push("/")}
              className="rounded-xl border border-foreground/10 bg-foreground/5 py-4 text-center font-semibold text-foreground hover:bg-foreground/10 transition-all text-sm"
            >
              Retake Quiz
            </button>
          </div>

          {selectedPolitician && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-6 animate-in fade-in duration-200"
              onClick={() => setSelectedPolitician(null)}
            >
              <div
                className="theme-card relative w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-white/10 bg-[#1a1a1a]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full border-2 border-gold/30 overflow-hidden shadow-lg">
                      <PoliticianAvatar politician={selectedPolitician} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {getPoliticianName(selectedPolitician)}
                      </h3>
                      <div className="inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black bg-[#FDB913]">
                        {selectedPolitician.party}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPolitician(null)}
                    className="h-8 w-8 rounded-full bg-white/10 text-white/60 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                    <strong className="block text-xs uppercase tracking-wider text-[#FDB913] mb-2 opacity-90">
                      Economic Philosophy
                    </strong>
                    {getReasoning(selectedPolitician, "economic")}
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                    <strong className="block text-xs uppercase tracking-wider text-[#FDB913] mb-2 opacity-90">
                      Social Philosophy
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
  );
}
