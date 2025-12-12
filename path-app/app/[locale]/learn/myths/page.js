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
    <div className="min-h-screen py-16 text-foreground">
      <div className="container mx-auto px-6 max-w-[1000px]">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-red-500 opacity-90">
            Fact Check Central
          </div>
          <h1 className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Political <span className="text-[#FDB913]">MythBusters</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {locale === "en"
              ? "Separating fact from fiction in Sri Lankan politics. Don't let rumors fool you."
              : locale === "si"
              ? "ශ්‍රී ලාංකීය දේශපාලනයේ ඇත්ත සහ බොරුව වෙන් කර හඳුනාගන්න. කටකතා වලට රැවටෙන්න එපා."
              : "இலங்கை அரசியலில் உண்மையைப் புனைவிலிருந்து பிரித்தறிதல். வதந்திகள் உங்களை ஏமாற்ற விடாதீர்கள்."}
          </p>
        </div>

        {/* Myths Grid */}
        <div className="space-y-6">
          {myths.map((item) => (
            <div
              key={item.id}
              className={`group overflow-hidden rounded-[24px] border bg-gradient-to-br transition-all duration-500 ${
                activeMyth === item.id
                  ? "border-[#FDB913]/50 shadow-[0_0_30px_-10px_rgba(253,185,19,0.3)] scale-[1.02]"
                  : `border-white/5 hover:border-white/10 hover:shadow-lg ${item.borderColor}`
              } ${item.color}`}
            >
              {/* Card Header (Always Visible) */}
              <button
                onClick={() => toggleMyth(item.id)}
                className="w-full text-left p-6 md:p-8 flex items-start gap-6 relative"
              >
                <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-black/20 text-3xl shadow-inner backdrop-blur-sm">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/20 text-foreground/80">
                      {item.theme}
                    </span>
                    {activeMyth === item.id && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
                        Busted
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-[#FDB913] transition-colors">
                    {item.title[locale]}
                  </h2>
                  <div className="flex items-center gap-2 text-lg font-medium text-red-400/90 font-mono">
                    <span className="text-xl">❌</span>
                    &quot;{item.myth[locale]}&quot;
                  </div>
                </div>

                <div
                  className={`absolute right-8 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    activeMyth === item.id ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/30 group-hover:text-foreground/60"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              {/* Expansion Content (Reality check) */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  activeMyth === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 border-t border-white/5 bg-black/10 backdrop-blur-sm">
                    {/* The Reality */}
                    <div className="mb-6 mt-6 rounded-xl bg-green-500/10 border border-green-500/20 p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                      <h3 className="text-green-400 font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="text-lg">✅</span> The Reality
                      </h3>
                      <p className="text-xl font-bold text-foreground leading-snug">
                        {item.reality[locale]}
                      </p>
                    </div>

                    {/* The Explanation */}
                    <div className="prose prose-invert max-w-none">
                      <p className="text-lg text-foreground/80 leading-relaxed indent-0">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-gold-text transition-colors"
          >
            ← Back to Classroom
          </Link>
        </div>
      </div>
    </div>
  );
}
