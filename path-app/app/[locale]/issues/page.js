"use client";

import { useLocale } from "next-intl";

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
    <div className="min-h-screen py-12 px-6">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
            Issue <span className="text-[#FDB913]">Decoder</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Complex political debates, simplified. Understand the arguments
            without the noise.
          </p>
        </div>

        <div className="space-y-12">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="relative rounded-[24px] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.07]"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {issue.title[locale] || issue.title.en}
                </h2>
                <p className="text-lg text-foreground/60">
                  {issue.description[locale] || issue.description.en}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                {/* Arguments FOR */}
                <div className="rounded-xl bg-green-500/10 p-6 border border-green-500/20">
                  <h3 className="mb-3 text-lg font-bold text-green-400 flex items-center gap-2">
                    <span className="text-xl">👍</span> The Argument FOR
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {issue.for[locale] || issue.for.en}
                  </p>
                </div>

                {/* Arguments AGAINST */}
                <div className="rounded-xl bg-red-500/10 p-6 border border-red-500/20">
                  <h3 className="mb-3 text-lg font-bold text-red-400 flex items-center gap-2">
                    <span className="text-xl">👎</span> The Argument AGAINST
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {issue.against[locale] || issue.against.en}
                  </p>
                </div>
              </div>

              {/* The Reality */}
              <div className="rounded-xl bg-[#FDB913]/10 p-6 border border-[#FDB913]/30">
                <h3 className="mb-3 text-lg font-bold text-[#FDB913] flex items-center gap-2">
                  <span className="text-xl">⚖️</span> The Reality
                </h3>
                <p className="text-foreground/90 font-medium leading-relaxed">
                  {issue.reality[locale] || issue.reality.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
