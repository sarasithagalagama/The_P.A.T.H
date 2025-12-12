"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { myths } from "@/data/myths";
import { useState } from "react";

export default function MythsPage() {
  const locale = useLocale();
  const [activeMyth, setActiveMyth] = useState(null);

  const toggleMyth = (id) => {
    setActiveMyth(activeMyth === id ? null : id);
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="py-12">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              Fact Check Central
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Political <span className="text-gold-text">MythBusters</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              {locale === "en"
                ? "Separating fact from fiction in Sri Lankan politics. Don't let rumors fool you."
                : locale === "si"
                ? "ශ්‍රී ලාංකීය දේශපාලනයේ ඇත්ත සහ බොරුව වෙන් කර හඳුනාගන්න. කටකතා වලට රැවටෙන්න එපා."
                : "இலங்கை அரசியலில் உண்மையைப் புனைவிலிருந்து பிரித்தறிதல். வதந்திகள் உங்களை ஏமாற்ற விடாதீர்கள்."}
            </p>
          </div>

          {/* Myths Grid */}
          <div className="grid gap-6">
            {myths.map((item) => (
              <div
                key={item.id}
                className={`theme-card group overflow-hidden rounded-[24px] border transition-all duration-300 ${
                  activeMyth === item.id
                    ? "border-gold/50 shadow-xl"
                    : `border-transparent hover:border-gold/20 hover:shadow-lg`
                }`}
              >
                {/* Card Header (Always Visible) */}
                <button
                  onClick={() => toggleMyth(item.id)}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-6 relative z-10"
                >
                  <div
                    className={`hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-foreground/5 text-3xl transition-transform duration-300 ${
                      activeMyth === item.id
                        ? "scale-110 grayscale-0"
                        : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-foreground/5 text-foreground/70 font-mono border border-foreground/5">
                        {item.theme}
                      </span>
                      {activeMyth === item.id && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-500/10 text-red-500 border border-red-500/30 animate-pulse">
                          Busted
                        </span>
                      )}
                    </div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold mb-3 transition-colors ${
                        activeMyth === item.id
                          ? "text-gold-text"
                          : "text-foreground group-hover:text-gold-text"
                      }`}
                    >
                      {item.title[locale]}
                    </h2>
                    <div className="flex items-start gap-3 text-lg font-medium text-red-400/90 font-mono bg-red-500/5 p-3 rounded-xl border border-red-500/10">
                      <span className="text-xl leading-none mt-0.5">❌</span>
                      <p className="leading-snug">
                        &quot;{item.myth[locale]}&quot;
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute right-8 top-8 transition-transform duration-300 rounded-full h-10 w-10 flex items-center justify-center bg-foreground/5 ${
                      activeMyth === item.id
                        ? "rotate-180 bg-gold/10 text-gold-text"
                        : "text-foreground/40 group-hover:text-foreground"
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                {/* Expansion Content (Reality check) */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    activeMyth === item.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 md:p-8 pt-0 border-t border-white/5 mx-6 md:mx-8 mt-2 mb-6">
                      {/* The Reality */}
                      <div className="mb-6 mt-6 rounded-xl bg-green-500/5 border border-green-500/20 p-6 relative overflow-hidden group/reality hover:bg-green-500/10 transition-colors">
                        <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50" />
                        <h3 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                          <span className="text-lg">✅</span> The Reality
                        </h3>
                        <p className="text-xl font-bold text-foreground leading-snug">
                          {item.reality[locale]}
                        </p>
                      </div>

                      {/* The Explanation */}
                      <div className="prose prose-invert max-w-none pl-4 border-l-2 border-foreground/10">
                        <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                          {item.explanation[locale]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Link */}
          <div className="mt-16 text-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 px-8 py-4 text-sm font-bold transition-all hover:bg-foreground hover:text-background"
            >
              ← {locale === "si" ? "නැවත පාඩම් මාලාවට" : "Back to Classroom"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
