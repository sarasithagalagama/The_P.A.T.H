"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { glossaryTerms } from "@/data/glossary";

export default function GlossaryPage() {
  const t = useTranslations("app");
  const locale = useLocale();

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Content */}
        <div className="py-12">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              Education Center
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Political Glossary
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">
              {locale === "en" &&
                "Understanding the terminology behind Sri Lankan politics."}
              {locale === "si" &&
                "ශ්‍රී ලාංකීය දේශපාලනය පිටුපස ඇති පාරිභාෂිතය අවබෝධ කර ගැනීම."}
              {locale === "ta" &&
                "இலங்கை அரசியலின் பின்னணியில் உள்ள சொற்களைப் புரிந்துகொள்ளுதல்."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {glossaryTerms.map((item) => (
              <div
                key={item.id}
                className="theme-card relative overflow-hidden rounded-[24px] p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-[4px] bottom-0 bg-gold/50" />

                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  {item.title[locale]}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-foreground/80">
                  {item.definition[locale]}
                </p>

                <div className="rounded-xl bg-foreground/5 p-4 text-sm">
                  <span className="font-bold text-gold-text uppercase tracking-wider text-xs block mb-2">
                    {locale === "en"
                      ? "Sri Lankan Context"
                      : "ශ්‍රී ලංකා සන්දර්භය"}
                  </span>
                  <span className="text-foreground/60 italic">
                    {item.context[locale]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 px-8 py-4 text-sm font-bold transition-all hover:bg-foreground hover:text-background"
            >
              ← {locale === "si" ? "මුල් පිටුවට" : "Back to Home"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
