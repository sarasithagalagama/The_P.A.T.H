"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function LearnPage() {
  const locale = useLocale();

  const sections = [
    {
      id: "history",
      title: {
        en: "Timeline of Turning Points",
        si: "තීරණාත්මක අවස්ථාවන්",
        ta: "திருப்புமுனைகள்",
      },
      desc: {
        en: "From 1948 to today: Connect the dots of Sri Lanka's political history.",
        si: "1948 සිට අද දක්වා: ශ්‍රී ලංකාවේ දේශපාලන ඉතිහාසය ගලපා ගන්න.",
        ta: "1948 முதல் இன்று வரை: இலங்கையின் அரசியல் வரலாற்றை இணைக்கவும்.",
      },
      icon: "⏳",
      href: "/learn/history",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      id: "civics",
      title: {
        en: "Who Does What? (Civics 101)",
        si: "කවුද මොනවද කරන්නේ?",
        ta: "யார் என்ன செய்கிறார்கள்?",
      },
      desc: {
        en: "Pradeshiya Sabha vs. Parliament. Who is actually responsible for that blocked drain?",
        si: "ප්‍රාදේශීය සභා සහ පාර්ලිමේන්තුව. කාණු අවහිර වීමට ඇත්තටම වගකිව යුත්තේ කවුද?",
        ta: "பிரதேச சபை vs பாராளுமன்றம். அந்த அடைபட்ட வடிகால் உண்மையில் யாருடைய பொறுப்பு?",
      },
      icon: "🏛️",
      href: "/learn/civics",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      id: "elections",
      title: {
        en: "How Elections Work",
        si: "මැතිවරණ ක්‍රියාවලිය",
        ta: "தேர்தல்கள் எவ்வாறு செயல்படுகின்றன",
      },
      desc: {
        en: "The 50% Rule, The 'Manaapa' System, and the National List explained.",
        si: "50% නීතිය, මනාප ක්‍රමය සහ ජාතික ලැයිස්තුව පැහැදිලි කිරීම.",
        ta: "50% விதி, 'விருப்பு வாக்கு' முறை மற்றும் தேசியப் பட்டியல் விளக்கம்.",
      },
      icon: "🗳️",
      href: "/learn/elections",
      color: "from-blue-600/20 to-indigo-600/20",
      borderColor: "border-blue-600/30",
    },
    {
      id: "constitution",
      title: {
        en: "Constitution for Dummies",
        si: "ව්‍යවස්ථාව සරලව",
        ta: "அரசியலமைப்பு எளிமையாக",
      },
      desc: {
        en: "Know your rights. Article 12, 14, and what they mean for you.",
        si: "ඔබේ අයිතිවාසිකම් දැනගන්න. 12, 14 වගන්ති සහ ඒවා ඔබට වැදගත් වන්නේ ඇයි.",
        ta: "உங்கள் உரிமைகளை அறிந்து கொள்ளுங்கள். பிரிவு 12, 14 மற்றும் அவை உங்களுக்கு என்ன அர்த்தம்.",
      },
      icon: "📜",
      href: "/learn/constitution",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
    },
    {
      id: "myths",
      title: {
        en: "Political MythBusters",
        si: "දේශපාලන මිථ්‍යාවන්",
        ta: "அரசியல் கட்டுக்கதைகள்",
      },
      desc: {
        en: "Common lies debunked. 'Printing money' to 'Federalism'.",
        si: "පොදු බොරු හෙළිදරව් කිරීම. 'මුදල් අච්චු ගැසීම' සිට 'ෆෙඩරල්වාදය' දක්වා.",
        ta: "பொதுவான பொய்கள் அம்பலப்படுத்தப்பட்டன. 'பணம் அச்சடித்தல்' முதல் 'சமஷ்டි' வரை.",
      },
      icon: "🔍",
      href: "/learn/myths",
      color: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="py-12">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              The Classroom
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Educated Citizenry,{" "}
              <span className="text-gold-text">Stronger Democracy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              Democracy requires an educated citizenry. Learn the basics of how
              your country works through our curated modules.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="theme-card group relative overflow-hidden rounded-[24px] p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Accent Line */}
                <div
                  className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${section.color}`}
                />

                {/* Background Icon (Watermark) */}
                <div className="absolute -bottom-4 -right-4 text-9xl opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 select-none">
                  {section.icon}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-2xl group-hover:scale-110 transition-transform duration-300">
                        {section.icon}
                      </div>
                      <span
                        className={`rounded-full border ${section.borderColor} bg-transparent px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground/60`}
                      >
                        Module
                      </span>
                    </div>

                    <h2 className="mb-4 text-2xl font-bold text-foreground group-hover:text-gold-text transition-colors">
                      {section.title[locale] || section.title.en}
                    </h2>
                    <p className="text-base leading-relaxed text-foreground/70">
                      {section.desc[locale] || section.desc.en}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-sm font-bold tracking-widest uppercase text-gold-text opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Start Learning
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
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
