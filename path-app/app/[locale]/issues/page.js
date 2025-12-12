"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function IssuesPage() {
  const locale = useLocale();

  const issues = [
    {
      id: "13a",
      title: {
        en: "The 13th Amendment",
        si: "13 වන සංශෝධනය",
        ta: "13 வது திருத்தம்",
      },
      description: {
        en: "The constitutional amendment that established Provincial Councils in Sri Lanka.",
        si: "ශ්‍රී ලංකාවේ පළාත් සභා පිහිටුවන ලද ආණ්ඩුක්‍රම ව්‍යවස්ථා සංශෝධනය.",
        ta: "இலங்கையில் மாகாண சபைகளை நிறுவிய அரசியலமைப்புத் திருத்தம்.",
      },
      for: {
        en: "Devolution of power allows Tamil minorities to self-govern in their areas; reduces ethnic tension by sharing power.",
        si: "බලතල බෙදා හැරීම මගින් දෙමළ ජනතාවට තම ප්‍රදේශවල ස්වයං පාලනයක් ලබා දේ; බලය බෙදා හැරීමෙන් ජනවාර්ගික ආතතිය අඩු වේ.",
        ta: "அதிகாரப் பகிர்வு தமிழ் சிறுபான்மையினர் தங்கள் பகுதிகளில் சுய ஆட்சி செய்ய அனுமதிக்கிறது; அதிகாரத்தைப் பகிர்வதன் மூலம் இன முரண்பாடுகளைக் குறைக்கிறது.",
      },
      against: {
        en: "Could lead to a separate state (separatism) and weaken central control; creates administrative duplication and extra cost.",
        si: "වෙන්වූ රාජ්‍යයක් (බෙදුම්වාදය) ඇතිවීමට සහ මධ්‍යම පාලනය දුර්වල කිරීමට හේතු විය හැක; පරිපාලන අනුපිටපත් සහ අමතර වියදම් ඇති කරයි.",
        ta: "தனி நாட்டை (பிரிவினைவாதம்) உருவாக்கலாம் மற்றும் மத்திய கட்டுப்பாட்டை பலவீனப்படுத்தலாம்; நிர்வாக இரட்டிப்பு மற்றும் கூடுதல் செலவை உருவாக்குகிறது.",
      },
      reality: {
        en: "It is already law, but police and land powers are not fully implemented by the central government.",
        si: "එය දැනටමත් නීතියක් නමුත්, පොලිස් සහ ඉඩම් බලතල මධ්‍යම රජය විසින් සම්පූර්ණයෙන්ම ක්‍රියාත්මක කර නොමැත.",
        ta: "இது ஏற்கனவே சட்டமாகும், ஆனால் பொலிஸ் மற்றும் காணி அதிகாரங்கள் மத்திய அரசால் முழுமையாக நடைமுறைப்படுத்தப்படவில்லை.",
      },
    },
    {
      id: "imf",
      title: {
        en: "IMF Restructuring",
        si: "IMF ප්‍රතිව්‍යුහගත කිරීම",
        ta: "IMF மறுசீரமைப்பு",
      },
      description: {
        en: "The economic program agreed with the International Monetary Fund to bail out Sri Lanka.",
        si: "ශ්‍රී ලංකාව ගොඩගැනීම සඳහා ජාත්‍යන්තර මූල්‍ය අරමුදල සමඟ එකඟ වූ ආර්ථික වැඩපිළිවෙල.",
        ta: "இலங்கையை மீட்க சர்வதேச நாணய நிதியத்துடன் ஒப்புக்கொள்ளப்பட்ட பொருளாதாரத் திட்டம்.",
      },
      for: {
        en: "Necessary to restore fiscal discipline, gain international credibility, and unlock funding.",
        si: "මූල්‍ය විනය නැවත ඇති කිරීමට, ජාත්‍යන්තර විශ්වාසය දිනා ගැනීමට සහ අරමුදල් ලබා ගැනීමට අත්‍යවශ්‍ය වේ.",
        ta: "நிதி ஒழுக்கத்தை மீட்டெடுக்கவும், சர்வதேச நம்பகத்தன்மையைப் பெறவும், நிதியுதவியைப் பெறவும் அவசியமானது.",
      },
      against: {
        en: "Austerity measures (high taxes, reduced subsidies) hurt the poor and working class most.",
        si: "කප්පාදු පියවර (ඉහළ බදු, සහනාධාර අඩු කිරීම) දිළිඳු සහ වැඩකරන ජනතාවට දැඩි ලෙස බලපායි.",
        ta: "சிக்கன நடவடிக்கைகள் (அதிக வரிகள், குறைக்கப்பட்ட மானியங்கள்) ஏழை மற்றும் உழைக்கும் வர்க்கத்தினரை அதிகம் பாதிக்கின்றன.",
      },
      reality: {
        en: "Sri Lanka has defaulted on debt, and IMF is currently the only major viable path to stabilizing the currency and economy.",
        si: "ශ්‍රී ලංකාව ණය ගෙවීම පැහැර හැර ඇති අතර, මුදල් සහ ආර්ථිකය ස්ථාවර කිරීමට ඇති එකම ප්‍රධාන මාර්ගය IMF වේ.",
        ta: "இலங்கை கடனைத் திருப்பிச் செலுத்தத் தவறிவிட்டது, நாணயம் மற்றும் பொருளாதாரத்தை ஸ்திரப்படுத்த IMF தற்போதுள்ள ஒரே முக்கிய வழியாகும்.",
      },
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="py-12">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              Political Issue Decoder
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Complex Debates,{" "}
              <span className="text-gold-text">Simplified</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              Understand the arguments without the noise. We break down the
              biggest debates in Sri Lanka.
            </p>
          </div>

          <div className="space-y-12">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="theme-card relative overflow-hidden rounded-[32px] p-8 md:p-10 transition-all hover:shadow-2xl hover:border-gold/20"
              >
                {/* ID/Tag */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-block rounded-full bg-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground/70">
                    Topic: {issue.id.toUpperCase()}
                  </span>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-3xl font-extrabold text-foreground">
                    {issue.title[locale] || issue.title.en}
                  </h2>
                  <p className="text-xl text-foreground/80 leading-relaxed">
                    {issue.description[locale] || issue.description.en}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 mb-10">
                  {/* Arguments FOR */}
                  <div className="relative rounded-[24px] bg-green-500/5 p-8 border border-green-500/20 hover:bg-green-500/10 transition-colors">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-green-500 uppercase tracking-wide">
                        The Argument FOR
                      </h3>
                    </div>
                    <p className="text-foreground/90 leading-relaxed font-medium">
                      {issue.for[locale] || issue.for.en}
                    </p>
                  </div>

                  {/* Arguments AGAINST */}
                  <div className="relative rounded-[24px] bg-red-500/5 p-8 border border-red-500/20 hover:bg-red-500/10 transition-colors">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-red-500 uppercase tracking-wide">
                        The Argument AGAINST
                      </h3>
                    </div>
                    <p className="text-foreground/90 leading-relaxed font-medium">
                      {issue.against[locale] || issue.against.en}
                    </p>
                  </div>
                </div>

                {/* The Reality */}
                <div className="relative overflow-hidden rounded-[24px] bg-gold/5 p-8 border border-gold/30">
                  <div className="absolute top-0 left-0 w-[6px] h-full bg-[#FDB913]" />
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-lg font-bold text-[#FDB913] uppercase tracking-wide">
                      The Reality
                    </h3>
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed pl-2">
                    {issue.reality[locale] || issue.reality.en}
                  </p>
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
