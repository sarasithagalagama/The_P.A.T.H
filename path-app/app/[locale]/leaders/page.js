"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { leadersData } from "@/data/leaders";

function LeaderCard({ leader, locale }) {
  return (
    <div className="theme-card group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 p-0 transition-all hover:-translate-y-1 hover:shadow-2xl">
      {/* Header Decoration */}
      <div
        className="h-2 w-full opacity-80"
        style={{ backgroundColor: leader.color }}
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Top Section: Avatar & Info */}
        <div className="mb-4 flex items-start gap-4">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/20 shadow-md">
            <img
              src={leader.image}
              alt={leader.name["en"]}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-gold-text transition-colors">
              {leader.name[locale] || leader.name["en"]}
            </h3>
            <div
              className="mt-1 inline-flex rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: leader.color }}
            >
              {leader.party}
            </div>
          </div>
        </div>

        {/* Role */}
        <div className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground/50">
          {leader.role[locale] || leader.role["en"]}
        </div>

        {/* Quote */}
        {leader.quote && (
          <blockquote className="mb-4 border-l-2 border-foreground/20 pl-3 text-sm italic text-foreground/70">
            "{leader.quote[locale] || leader.quote["en"]}"
          </blockquote>
        )}

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-foreground/80">
          {leader.desc[locale] || leader.desc["en"]}
        </p>

        {/* Tags */}
        {leader.tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {leader.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-foreground/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Allies */}
        {leader.allies && leader.allies.length > 0 && (
          <div className="mb-4 text-xs text-foreground/60">
            <span className="font-bold uppercase tracking-wider opacity-80">
              {locale === "si"
                ? "මිතුරන්: "
                : locale === "ta"
                ? "நண்பர்கள்: "
                : "Allies: "}
            </span>
            {leader.allies.join(", ")}
          </div>
        )}

        {/* Controversies */}
        {leader.controversies && (
          <div className="mb-6 rounded-lg bg-red-500/10 p-3 text-xs leading-relaxed text-red-600/90 dark:text-red-400">
            <span className="mb-1 block font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              {locale === "si"
                ? "ආන්දෝලනාත්මක: "
                : locale === "ta"
                ? "சர்ச்சை: "
                : "Controversy: "}
            </span>
            {leader.controversies[locale] || leader.controversies["en"]}
          </div>
        )}

        {/* Compass Mini-Viz */}
        <div className="mt-auto border-t border-foreground/5 pt-4">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase text-foreground/40">
            <span>
              Econ: {leader.compass.x > 0 ? "R" : "L"}
              {Math.abs(leader.compass.x)}
            </span>
            <span>
              Soc: {leader.compass.y > 0 ? "Auth" : "Lib"}
              {Math.abs(leader.compass.y)}
            </span>
          </div>
          {/* Visual Line */}
          <div className="relative mt-2 h-1.5 w-full rounded-full bg-foreground/10">
            {/* Center Marker */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-foreground/20" />

            {/* Position Dot */}
            <div
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white shadow-sm transition-all"
              style={{
                left: `${((leader.compass.x + 10) / 20) * 100}%`,
                backgroundColor: leader.color,
              }}
              title={`Economic: ${leader.compass.x}`}
            />
          </div>
          <div className="mt-1 text-center text-[9px] font-bold uppercase tracking-wider text-foreground/30">
            Economic Spectrum
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LeadersPage() {
  const locale = useLocale();

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="py-12">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              {locale === "si"
                ? "ඉතිහාසය දෙසට"
                : locale === "ta"
                ? "வரலாற்றுப் பார்வை"
                : "A Walk Through History"}
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {locale === "si"
                ? "රාජ්‍ය නායකත්ව ලේඛනාගාරය"
                : locale === "ta"
                ? "தலைத்துவ ஆவணம்"
                : "Leadership Archive"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              {locale === "en" &&
                "Explore the profiles of Sri Lanka's key political figures, their tenure, ideologies, and impact on the nation."}
              {locale === "si" &&
                "ශ්‍රී ලංකාවේ ප්‍රධාන දේශපාලන චරිත, ඔවුන්ගේ ධුර කාලය, දෘෂ්ටිවාදයන් සහ රටට කළ බලපෑම ගවේෂණය කරන්න."}
              {locale === "ta" &&
                "இலங்கையின் முக்கிய அரசியல் பிரமுகர்கள், அவர்களின் பதவிக்காலம், கொள்கைகள் மற்றும் நாட்டின் மீதான தாக்கம் பற்றி ஆராயுங்கள்."}
            </p>
          </div>

          {/* SECTION 1: Parliamentary Era */}
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-foreground/10"></div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground opacity-80 text-center px-4">
                {locale === "si"
                  ? "පාර්ලිමේන්තු යුගය (1947–1978)"
                  : locale === "ta"
                  ? "பாராளுமன்ற சகாப்தம் (1947–1978)"
                  : "The Parliamentary Era (1947–1978)"}
              </h2>
              <div className="h-px flex-1 bg-foreground/10"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {leadersData.slice(0, 6).map((leader) => (
                <LeaderCard key={leader.id} leader={leader} locale={locale} />
              ))}
            </div>
          </div>

          {/* SECTION 2: Executive Presidency */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-foreground/10"></div>
              <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground opacity-80 text-center px-4">
                {locale === "si"
                  ? "විධායක ජනාධිපති යුගය (1978–වර්තමානය)"
                  : locale === "ta"
                  ? "நிறைவேற்று ஜனாதிபதி முறைமை (1978–தற்போது)"
                  : "The Executive Presidency (1978–Present)"}
              </h2>
              <div className="h-px flex-1 bg-foreground/10"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {leadersData.slice(6).map((leader) => (
                <LeaderCard key={leader.id} leader={leader} locale={locale} />
              ))}
            </div>
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
