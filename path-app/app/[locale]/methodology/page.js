"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
export default function MethodologyPage() {
  const locale = useLocale();

  const content = {
    en: {
      headline: "Methodology & Assumptions",
      sections: [
        {
          title: "How We Calculate",
          body: "We use a weighted scoring system based on the standard 2-axis political model. The Horizontal Axis (Economic) measures your stance between State Control (Left) and Free Market (Right). The Vertical Axis (Social) measures your views on Authority (Up) versus Individual Liberty (Down).",
        },
        {
          title: "Calibrated for Sri Lanka",
          body: 'Unlike Western models, our baseline is set to the Sri Lankan context. For example, our "Economic Right" is defined by the 1977 Open Economy reforms, while our "Economic Left" reflects traditional welfare-state policies and nationalization.',
        },
        {
          title: "Leader Placement",
          body: "Historical figures are plotted based on their actual policy records and governance styles during their tenure, rather than just their election manifestos.",
        },
      ],
    },
    si: {
      headline: "ගණනය කිරීමේ ක්‍රමවේදය සහ උපකල්පන",
      sections: [
        {
          title: "අප ගණනය කරන ආකාරය",
          body: "අප භාවිතා කරන්නේ සම්මත දේශපාලන මාලිමා ආකෘතිය මත පදනම් වූ ලකුණු දීමේ ක්‍රමයකි. මෙහි තිරස් අක්ෂය (ආර්ථික) මගින් රාජ්‍ය පාලනය (වම) සහ නිදහස් වෙළඳපොල (දකුණ) අතර ඔබේ ස්ථාවරය මනිනු ලබන අතර, සිරස් අක්ෂය (සමාජීය) මගින් අධිකාරීවාදය සහ පුද්ගල නිදහස අතර ඔබේ මතය විමසා බලයි.",
        },
        {
          title: "ශ්‍රී ලාංකීය සන්දර්භය",
          body: 'බටහිර නිර්ණායක වෙනුවට, අප මෙය සකසා ඇත්තේ ශ්‍රී ලංකාවේ දේශපාලන ඉතිහාසයට ගැලපෙන පරිදිය. උදාහරණයක් ලෙස, අපගේ "ආර්ථික දකුණ" 1977 විවෘත ආර්ථික ප්‍රතිපත්ති මත පදනම් වන අතර, "ආර්ථික වම" සම්ප්‍රදායික සුබසාධනවාදී ප්‍රතිපත්ති නියෝජනය කරයි.',
        },
        {
          title: "නායකයින් ස්ථානගත කිරීම",
          body: "දේශපාලන නායකයින් මෙම ප්‍රස්ථාරයේ ස්ථානගත කර ඇත්තේ ඔවුන්ගේ මැතිවරණ පොරොන්දු මත නොව, ඔවුන්ගේ පාලන සමය තුළ ක්‍රියාත්මක කළ සැබෑ ප්‍රතිපත්ති සහ පාලන විලාසය මත පදනම්වය.",
        },
      ],
    },
    ta: {
      headline: "கணிப்பீட்டு முறை மற்றும் அனுமானங்கள்",
      sections: [
        {
          title: "நாம் கணிக்கும் முறை",
          body: "நாங்கள் நிலையான இரண்டு அச்சு மாதிரியை (2-axis model) அடிப்படையாகக் கொண்ட மதிப்பீட்டு முறையைப் பயன்படுத்துகிறோம். கிடை அச்சு (பொருளாதாரம்) அரச கட்டுப்பாடு (இடது) மற்றும் திறந்த சந்தை (வலது) ஆகியவற்றிற்கு இடையிலான உங்கள் நிலைப்பாட்டை அளவிடுகிறது. செங்குத்து அச்சு (சமூகம்) அதிகாரம் மற்றும் தனிமனித சுதந்திரம் ஆகியவற்றிற்கு இடையிலான உங்கள் பார்வையை அளவிடுகிறது.",
        },
        {
          title: "இலங்கைச் சூழலுக்கு ஏற்ப",
          body: 'மேற்கத்திய மாதிரிகளைப் போலன்றி, இது இலங்கையின் அரசியல் சூழலுக்கு ஏற்ப வடிவமைக்கப்பட்டுள்ளது. உதாரணமாக, எமது "பொருளாதார வலதுசாரி" என்பது 1977 திறந்த பொருளாதாரக் கொள்கைகளை அடிப்படையாகக் கொண்டது, அதேசமயம் "பொருளாதார இடதுசாரி" என்பது பாரம்பரிய நலன்புரி அரச கொள்கைகளை பிரதிபலிக்கிறது.',
        },
        {
          title: "தலைவர்களின் நிலைப்பாடு",
          body: "அரசியல் தலைவர்கள் அவர்களது தேர்தல் வாக்குறுதிகளின் அடிப்படையில் அல்லாமல், அவர்களது ஆட்சிக்காலத்தில் முன்னெடுத்த உண்மையான கொள்கைகள் மற்றும் நிர்வாக முறைகளின் அடிப்படையில் இந்த வரைபடத்தில் குறிக்கப்பட்டுள்ளனர்.",
        },
      ],
    },
  };

  const currentContent = content[locale] || content.en;

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Content */}
        <div className="py-12">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              {locale === "en"
                ? "About The Project"
                : locale === "si"
                ? "ව්‍යාපෘතිය ගැන"
                : "திட்டம் பற்றி"}
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {currentContent.headline}
            </h1>
            <div className="h-1 w-24 bg-[#FDB913] mx-auto rounded-full" />
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {currentContent.sections.map((section, index) => (
              <div
                key={index}
                className="theme-card relative overflow-hidden rounded-[24px] p-8 md:p-10 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-xl font-bold text-gold-text border border-gold/20">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-foreground/80">
                      {section.body}
                    </p>
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
