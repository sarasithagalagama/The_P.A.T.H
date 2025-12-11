"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "@/components/theme-toggle";
import { politicians } from "@/data/politicians";

export default function LeadersPage() {
  const locale = useLocale();

  const getLinkClass = (lang) => {
    const base =
      "rounded px-3 py-1.5 text-sm font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10";
    const active = "bg-[#FDB913] text-black font-bold shadow-sm";
    const inactive = "text-foreground/60 hover:text-foreground";
    return `${base} ${locale === lang ? active : inactive}`;
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <header className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-[0.5px] text-gold-text hover:opacity-80 transition-opacity"
          >
            The P.A.T.H.
          </Link>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center rounded-lg border border-black/5 bg-black/[0.03] p-1 dark:border-white/10 dark:bg-white/5">
              <Link href="/leaders" locale="en" className={getLinkClass("en")}>
                EN
              </Link>
              <Link href="/leaders" locale="si" className={getLinkClass("si")}>
                සිංහල
              </Link>
              <Link href="/leaders" locale="ta" className={getLinkClass("ta")}>
                தமிழ்
              </Link>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-black/[0.03] transition-all hover:border-gold/30 dark:border-white/10 dark:bg-white/5">
              <ThemeToggle className="text-foreground" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-12">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              Profiles
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Leader Profiles
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">
              {locale === "en" &&
                "A deep dive into the ideologies of Sri Lanka's key political figures."}
              {locale === "si" &&
                "ශ්‍රී ලංකාවේ ප්‍රධාන දේශපාලන චරිතවල දෘෂ්ටිවාදයන් පිළිබඳ ගැඹුරු විමර්ශනයක්."}
              {locale === "ta" &&
                "இலங்கையின் முக்கிய அரசியல் பிரமுகர்களின் சித்தாந்தங்களை ஆழமாகப் பார்க்கலாம்."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {politicians.map((p) => (
              <div
                key={p.id}
                className="theme-card relative overflow-hidden rounded-[24px] p-0 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Header Band */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: p.color }}
                />

                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-foreground">
                      {p.name[locale]}
                    </h2>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm"
                      style={{ backgroundColor: p.color }}
                    >
                      {p.party}
                    </span>
                  </div>

                  {/* Compass Position Mini-Badge */}
                  <div className="mb-6 flex gap-2">
                    <span className="inline-flex items-center rounded-md bg-foreground/5 px-2 py-1 text-xs font-medium text-foreground/70">
                      Economic: {p.x > 0 ? "Right" : "Left"}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-foreground/5 px-2 py-1 text-xs font-medium text-foreground/70">
                      Social: {p.y > 0 ? "Auth" : "Lib"}
                    </span>
                  </div>

                  <div className="space-y-4 text-sm text-foreground/80">
                    <div className="rounded-xl bg-foreground/5 p-4">
                      <strong className="block text-gold-text text-xs uppercase tracking-wider mb-2">
                        {locale === "en"
                          ? "Economic Policy"
                          : locale === "si"
                          ? "ආර්ථික ප්‍රතිපත්තිය"
                          : "பொருளாதாரக் கொள்கை"}
                      </strong>
                      {p.reasoning[locale]?.economic ||
                        p.reasoning["en"].economic}
                    </div>
                    <div className="rounded-xl bg-foreground/5 p-4">
                      <strong className="block text-gold-text text-xs uppercase tracking-wider mb-2">
                        {locale === "en"
                          ? "Social Policy"
                          : locale === "si"
                          ? "සමාජ ප්‍රතිපත්තිය"
                          : "சமூகக் கொள்கை"}
                      </strong>
                      {p.reasoning[locale]?.social || p.reasoning["en"].social}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-gold-text transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
