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
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="py-12">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              Constitution for Dummies
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Know Your <span className="text-gold-text">Power</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              {locale === "en"
                ? "Fundamental Rights (FR) explained simply. No legal jargon, just what matters to you."
                : locale === "si"
                ? "මූලික අයිතිවාසිකම් (FR) සරලව. නීති වචන නැතුව, ඔබට වැදගත් දේ පමණක්."
                : "அடிப்படை உரிமைகள் (FR) எளிமையாக. சட்டச் சொற்கள் இன்றி, உங்களுக்குத் தேவையானவை மட்டும்."}
            </p>
          </div>

          {/* Rights Grid */}
          <div className="grid gap-6">
            {rights.map((item) => (
              <div
                key={item.id}
                className={`theme-card group overflow-hidden rounded-[24px] border transition-all duration-300 ${
                  activeRight === item.id
                    ? "border-gold/50 shadow-xl"
                    : `border-transparent hover:border-gold/20 hover:shadow-lg`
                }`}
              >
                {/* Card Header (Always Visible) */}
                <button
                  onClick={() => toggleRight(item.id)}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-6 relative z-10"
                >
                  <div
                    className={`hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-foreground/5 text-3xl transition-transform duration-300 ${
                      activeRight === item.id
                        ? "scale-110 text-gold-text"
                        : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-foreground/5 text-foreground/70 font-mono border border-foreground/5">
                        {item.article}
                      </span>
                      {activeRight === item.id && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20 animate-pulse">
                          Reading Law
                        </span>
                      )}
                    </div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold mb-2 transition-colors ${
                        activeRight === item.id
                          ? "text-gold-text"
                          : "text-foreground group-hover:text-gold-text"
                      }`}
                    >
                      {item.title[locale]}
                    </h2>
                    <p className="text-lg font-medium text-foreground/60 italic font-serif leading-relaxed">
                      &quot;{item.rule[locale]}&quot;
                    </p>
                  </div>

                  <div
                    className={`absolute right-8 top-8 transition-transform duration-300 rounded-full h-10 w-10 flex items-center justify-center bg-foreground/5 ${
                      activeRight === item.id
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

                {/* Expansion Content (The Meaning) */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    activeRight === item.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 md:p-8 pt-0 border-t border-white/5 mx-6 md:mx-8 mt-2 mb-6">
                      {/* The Meaning Header */}
                      <div className="mb-4 mt-6 flex items-center gap-3 text-gold-text font-bold text-xs uppercase tracking-[0.2em] opacity-80">
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
