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
    <div className="min-h-screen py-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-foreground md:text-6xl">
            The <span className="text-[#FDB913]">Classroom</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Democracy requires an educated citizenry. Learn the basics of how
            your country works.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className={`group relative overflow-hidden rounded-[32px] border ${section.borderColor} bg-gradient-to-br ${section.color} p-8 hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                {section.icon}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 text-4xl">{section.icon}</div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground group-hover:text-[#FDB913] transition-colors">
                    {section.title[locale] || section.title.en}
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/80 font-medium">
                    {section.desc[locale] || section.desc.en}
                  </p>
                </div>

                <div className="mt-8 flex items-center font-bold text-sm tracking-widest uppercase opacity-70 group-hover:opacity-100 group-hover:tracking-[0.2em] transition-all">
                  Start Learning
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
