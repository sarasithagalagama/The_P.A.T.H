"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("home");
  const tApp = useTranslations("app");
  const locale = useLocale();

  const getLinkClass = (lang) => {
    // Dynamic styles for Light/Dark modes
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
          <div className="text-2xl font-bold tracking-[0.5px] text-gold-text">
            The P.A.T.H.
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center rounded-lg border border-black/5 bg-black/[0.03] p-1 dark:border-white/10 dark:bg-white/5">
              <Link href="/" locale="en" className={getLinkClass("en")}>
                EN
              </Link>
              <Link href="/" locale="si" className={getLinkClass("si")}>
                සිංහල
              </Link>
              <Link href="/" locale="ta" className={getLinkClass("ta")}>
                தமிழ்
              </Link>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-black/[0.03] transition-all hover:border-gold/30 dark:border-white/10 dark:bg-white/5">
              <ThemeToggle className="text-foreground" />
            </div>
          </div>
        </header>

        {/* Hero Section with Background Image */}
        <section className="relative flex flex-col items-start justify-center overflow-hidden rounded-[32px] px-8 py-20 text-left md:min-h-[600px] md:px-16">
          {/* Background Image Absolute */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-compass.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay"
              priority
            />
            {/* Gradient Overlay to fade it out and ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* Content Relative z-10 */}
          <div className="relative z-10 max-w-[650px]">
            <div className="mb-6 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              {tApp("subtitle")}
            </div>

            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-[72px]">
              The P.A.T.H.
              <span className="block text-gold-text">Political Alignment</span>
              <span className="block text-gold-text">Testing Hub</span>
            </h1>

            <p className="mb-12 text-xl leading-[1.7] text-foreground/80 font-medium">
              {t("intro")}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/quiz"
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FDB913] to-[#f5a623] px-10 py-[18px] text-lg font-bold text-black shadow-[0_4px_20px_rgba(253,185,19,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(253,185,19,0.5)] text-center"
              >
                {t("startQuiz")}
              </Link>

              <button className="rounded-xl border border-foreground/20 bg-white/5 backdrop-blur-sm px-8 py-[18px] text-base font-semibold text-foreground transition-all hover:bg-foreground/10 hover:border-gold/50">
                {t("howItWorks")}
              </button>
            </div>

            <div className="mt-4 text-sm text-foreground/60 font-medium">
              ⏱️ Takes approximately 5 minutes
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="pb-24 pt-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: 1,
                icon: "❓",
                title: "Answer Questions",
                text: t("step1"),
              },
              { num: 2, icon: "📊", title: "View Analysis", text: t("step2") },
              { num: 3, icon: "🤝", title: "Find Match", text: t("step3") },
            ].map((step) => (
              <div
                key={step.num}
                className="theme-card group relative overflow-hidden rounded-[20px] p-8 transition-all duration-400 hover:-translate-y-2 hover:border-gold/30"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 bg-gradient-to-r from-[#FDB913] to-[#f5a623] transition-transform duration-400 group-hover:scale-x-100" />

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-[2px] border-gold/30 bg-gold/10 text-2xl font-extrabold text-gold-text">
                    {step.num}
                  </div>
                  <div className="text-3xl opacity-60 grayscale transition-all group-hover:grayscale-0">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-base leading-[1.6] text-foreground/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
