"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { rights } from "@/data/rights";
import { useState } from "react";

export default function RightsPage() {
  const locale = useLocale();
  const [activeRight, setActiveRight] = useState(null);

  const toggleRight = (id) => {
    setActiveRight(activeRight === id ? null : id);
  };

  return (
    <div className="min-h-screen py-16 text-foreground">
      <div className="container mx-auto px-6 max-w-[1000px]">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-blue-400 opacity-90">
            Constitution for Dummies
          </div>
          <h1 className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            Know Your <span className="text-[#FDB913]">Power</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {locale === "en"
              ? "Fundamental Rights (FR) explained simply. No legal jargon, just what matters to you."
              : locale === "si"
              ? "මූලික අයිතිවාසිකම් (FR) සරලව. නීති වචන නැතුව, ඔබට වැදගත් දේ පමණක්."
              : "அடிப்படை உரிமைகள் (FR) எளிமையாக. சட்டச் சொற்கள் இன்றி, உங்களுக்குத் தேவையானவை மட்டும்."}
          </p>
        </div>

        {/* Rights Grid */}
        <div className="space-y-6">
          {rights.map((item) => (
            <div
              key={item.id}
              className={`group overflow-hidden rounded-[24px] border bg-gradient-to-br transition-all duration-500 ${
                activeRight === item.id
                  ? "border-[#FDB913]/50 shadow-[0_0_30px_-10px_rgba(253,185,19,0.3)] scale-[1.02]"
                  : `border-white/5 hover:border-white/10 hover:shadow-lg ${item.borderColor}`
              } ${item.color}`}
            >
              {/* Card Header (Always Visible) */}
              <button
                onClick={() => toggleRight(item.id)}
                className="w-full text-left p-6 md:p-8 flex items-start gap-6 relative"
              >
                <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-black/20 text-3xl shadow-inner backdrop-blur-sm">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/20 text-foreground/80 font-mono">
                      {item.article}
                    </span>
                    {activeRight === item.id && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30 animate-pulse">
                        Know This
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-[#FDB913] transition-colors">
                    {item.title[locale]}
                  </h2>
                  <p className="text-lg font-medium text-foreground/60 italic font-serif">
                    &quot;{item.rule[locale]}&quot;
                  </p>
                </div>

                <div
                  className={`absolute right-8 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    activeRight === item.id ? "rotate-180" : ""
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

              {/* Expansion Content (The Meaning) */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  activeRight === item.id
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 border-t border-white/5 bg-black/10 backdrop-blur-sm">
                    {/* The Meaning Header */}
                    <div className="mb-4 mt-6 flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                      <span className="text-lg">💡</span> What this actually
                      means
                    </div>

                    {/* The Meaning Content */}
                    <div className="prose prose-invert max-w-none">
                      <p className="text-xl text-foreground font-medium leading-relaxed">
                        {item.meaning[locale]}
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
