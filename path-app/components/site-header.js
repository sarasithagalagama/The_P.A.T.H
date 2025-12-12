"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const locale = useLocale();
  const t = useTranslations("home"); // Reusing home translations where possible or just hardcoding for now

  const getLinkClass = (lang) => {
    const base =
      "rounded px-3 py-1.5 text-sm font-medium transition-all hover:bg-black/5 dark:hover:bg-white/10";
    const active = "bg-[#FDB913] text-black font-bold shadow-sm";
    const inactive = "text-foreground/60 hover:text-foreground";
    return `${base} ${locale === lang ? active : inactive}`;
  };

  const navItems = [
    {
      href: "/learn",
      label: { en: "Learn", si: "ඉගෙන ගන්න", ta: "கற்க" },
    },
    {
      href: "/issues",
      label: { en: "Issues", si: "ගැටළු", ta: "பிரச்சினைகள்" },
    },
    {
      href: "/glossary",
      label: { en: "Glossary", si: "ශබ්දකෝෂය", ta: "அகராதி" },
    },
    {
      href: "/leaders",
      label: { en: "Leaders", si: "නායකයින්", ta: "தலைவர்கள்" },
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-8">
      <div className="container mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.5px] text-gold-text hover:opacity-80 transition-opacity"
          >
            The P.A.T.H.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-gold-text transition-colors"
                activeclassname="text-gold-text font-bold"
              >
                {item.label[locale] || item.label.en}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center rounded-lg border border-black/5 bg-black/[0.03] p-1 dark:border-white/10 dark:bg-white/5">
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

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-black/[0.03] transition-all hover:border-gold/30 dark:border-white/10 dark:bg-white/5">
            <ThemeToggle className="text-foreground h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
