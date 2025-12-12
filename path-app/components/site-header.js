"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * SiteHeader Component
 * A floating, glassmorphism-style header with:
 * - Logo and branding
 * - Desktop navigation
 * - Language switcher (EN/SI/TA)
 * - Theme toggle (Dark/Light)
 * - Mobile hamburger menu
 */
export function SiteHeader() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const t = useTranslations("home");

  /**
   * Helper to style language switcher links.
   * Highlights the current active language.
   */
  const getLinkClass = (lang) => {
    const base =
      "rounded-full px-4 py-1.5 text-[10px] uppercase font-bold transition-all";
    const active =
      "bg-background shadow-sm text-foreground ring-1 ring-black/5";
    const inactive = "text-foreground/50 hover:text-foreground/80";
    return `${base} ${locale === lang ? active : inactive}`;
  };

  // Navigation items with localized labels
  const navItems = [
    {
      href: "/",
      label: { en: "Home", si: "මුල් පිටුව", ta: "முகப்பு" },
    },
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
      label: {
        en: "Leaders",
        si: "නායකයින්",
        ta: "தலைவர்கள்",
      },
    },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto w-full max-w-[1200px] px-6">
      <div className="relative rounded-full border border-foreground/10 bg-background/60 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/40 transition-all duration-300 hover:bg-background/80 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-foreground/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-lg font-black tracking-tight text-foreground hover:opacity-80 transition-opacity flex items-center gap-2 pl-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#FDB913] animate-pulse"></span>
              P.A.T.H.
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all"
                >
                  {item.label[locale] || item.label.en}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop Language & Theme */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center rounded-full border border-foreground/5 bg-foreground/5 p-1">
                <Link href="/" locale="en" className={getLinkClass("en")}>
                  EN
                </Link>
                <Link href="/" locale="si" className={getLinkClass("si")}>
                  සිං
                </Link>
                <Link href="/" locale="ta" className={getLinkClass("ta")}>
                  த
                </Link>
              </div>

              <div className="flex items-center border-l border-foreground/10 pl-3">
                <ThemeToggle className="h-8 w-8 rounded-full hover:bg-foreground/10 flex items-center justify-center transition-colors text-foreground/80" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+10px)] left-6 right-6 rounded-[24px] border border-foreground/10 bg-background/90 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-foreground/5 rounded-xl transition-all"
              >
                {item.label[locale] || item.label.en}
              </Link>
            ))}

            <div className="h-px bg-foreground/10 my-2" />

            <div className="flex items-center justify-between px-2">
              <div className="flex items-center rounded-full border border-foreground/5 bg-foreground/5 p-1">
                <Link href="/" locale="en" className={getLinkClass("en")}>
                  EN
                </Link>
                <Link href="/" locale="si" className={getLinkClass("si")}>
                  සිං
                </Link>
                <Link href="/" locale="ta" className={getLinkClass("ta")}>
                  த
                </Link>
              </div>
              <ThemeToggle className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
