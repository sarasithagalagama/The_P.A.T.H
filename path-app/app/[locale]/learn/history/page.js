"use client";

import { useLocale } from "next-intl";
import { useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import { timeline } from "@/data/history";

/**
 * History Page (Timeline)
 * Displays a horizontal scrollable timeline of Sri Lanka's political history.
 * Uses a ref-based scroll controller for the timeline container.
 */
export default function HistoryPage() {
  const locale = useLocale();

  const getCardBorder = (type) => {
    switch (type) {
      case "conflict":
        return "hover:border-red-500/50";
      case "economical":
        return "hover:border-green-500/50";
      case "uprising":
        return "hover:border-yellow-500/50";
      default:
        return "hover:border-blue-500/50";
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case "conflict":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "economical":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "uprising":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
  };

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Width of card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="py-12">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-gold-text opacity-90">
              Sri Lankan History
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Timeline of <span className="text-gold-text">Turning Points</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              From Independence to the Aragalaya
            </p>
          </div>

          {/* Navigation & Timeline Container */}
          <div className="relative group/container">
            {/* 
              -------------------------------------------------------------------------
              DESKTOP VIEW: Horizontal Scrollable "Metro Map" (Hidden on Mobile)
              -------------------------------------------------------------------------
            */}
            <div className="hidden lg:block">
              {/* Nav Buttons (Visible on Hover/Desktop) */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex h-14 w-14 items-center justify-center rounded-full theme-card text-3xl transition-all hover:scale-110 hover:border-gold-text/50 shadow-2xl opacity-0 group-hover/container:opacity-100"
                aria-label="Scroll Left"
              >
                ‹
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex h-14 w-14 items-center justify-center rounded-full theme-card text-3xl transition-all hover:scale-110 hover:border-gold-text/50 shadow-2xl opacity-0 group-hover/container:opacity-100"
                aria-label="Scroll Right"
              >
                ›
              </button>

              {/* Scrollable Timeline Area */}
              <div
                ref={scrollRef}
                className="relative w-full overflow-x-auto py-16 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                <div className="flex min-w-max px-12 relative items-start">
                  {/* The Continuous Timeline "Rail" */}
                  <div className="absolute top-[3rem] left-0 w-full h-[4px] bg-foreground/10 rounded-full z-0">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-text/20 via-primary/20 to-gold-text/20 w-full opacity-50" />
                  </div>

                  {timeline.map((event, index) => (
                    <div
                      key={index}
                      className="relative z-10 w-[380px] shrink-0 flex flex-col items-center group px-4"
                    >
                      {/* 1. The Timeline Node & Year */}
                      <div className="relative flex flex-col items-center justify-center mb-6">
                        {/* Year Label (Floating above) */}
                        <div className="absolute -top-12 text-3xl font-black text-foreground/20 group-hover:text-gold-text transition-colors duration-300 tracking-tighter">
                          {event.year}
                        </div>

                        {/* The Node Icon */}
                        <div
                          className={`
                              relative z-20 h-24 w-24 rounded-full border-[6px] bg-background shadow-xl flex items-center justify-center text-4xl transition-all duration-500
                              ${getBadgeColor(
                                event.type
                              )} group-hover:scale-110 group-hover:border-gold-text
                          `}
                        >
                          {event.icon}
                        </div>
                      </div>

                      {/* 2. Vertical Connector Stem */}
                      <div className="h-8 w-[2px] bg-foreground/20 group-hover:bg-gold-text/50 transition-colors mb-4" />

                      {/* 3. The Content Card */}
                      <div className="w-full">
                        <div
                          className={`theme-card h-full rounded-[20px] p-6 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-b from-white/5 to-transparent
                          ${getCardBorder(event.type)}`}
                        >
                          {/* Title */}
                          <h3 className="mb-3 text-xl font-bold text-foreground leading-tight group-hover:text-gold-text transition-colors text-center">
                            {event.title[locale] || event.title.en}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-foreground/70 leading-relaxed text-center font-medium">
                            {event.desc[locale] || event.desc.en}
                          </p>

                          {/* Type Tag (Small) */}
                          <div className="mt-4 flex justify-center">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${getBadgeColor(
                                event.type
                              )} bg-transparent`}
                            >
                              {event.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 
              -------------------------------------------------------------------------
              MOBILE VIEW: Vertical Timeline (Visible on < lg)
              -------------------------------------------------------------------------
            */}
            <div className="block lg:hidden relative px-4 text-center">
              {/* Vertical Rail */}
              <div className="absolute top-0 bottom-0 left-[50%] w-[3px] -translate-x-1/2 bg-foreground/10 rounded-full z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold-text/20 via-primary/20 to-gold-text/20 opacity-50" />
              </div>

              <div className="flex flex-col gap-16 relative z-10 py-8">
                {timeline.map((event, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Node & Year Group */}
                    <div className="relative mb-6">
                      <div className="text-3xl font-black text-foreground/40 mb-2 tracking-tighter">
                        {event.year}
                      </div>
                      <div
                        className={`
                          relative z-10 h-20 w-20 rounded-full border-[4px] bg-background shadow-lg flex items-center justify-center text-3xl
                          ${getBadgeColor(event.type)}
                      `}
                      >
                        {event.icon}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`theme-card w-full rounded-[20px] p-6 border bg-gradient-to-b from-white/5 to-transparent relative
                      ${getCardBorder(event.type)}`}
                    >
                      {/* Little arrow pointing up to the node */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-foreground/10"></div>

                      <h3 className="mb-2 text-lg font-bold text-foreground leading-tight">
                        {event.title[locale] || event.title.en}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                        {event.desc[locale] || event.desc.en}
                      </p>

                      <div className="mt-3 inline-block">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${getBadgeColor(
                            event.type
                          )} bg-transparent`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl text-foreground/60 hover:text-gold-text transition-colors text-sm font-bold uppercase tracking-widest"
            >
              ← {locale === "si" ? "නැවත පාඩම් මාලාවට" : "Back to Classroom"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
