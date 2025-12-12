"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("home");
  const tApp = useTranslations("app");
  const locale = useLocale();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Methodology & Criteria Content
  const methodologyContent = {
    en: {
      headline: "Methodology & Assumptions",
      generalSections: [
        {
          title: "How We Calculate",
          body: "We use a weighted scoring system based on the standard 2-axis political model. The Horizontal Axis (Economic) measures your stance between State Control (Left) and Free Market (Right). The Vertical Axis (Social) measures your views on Authority (Up) versus Individual Liberty (Down).",
        },
        {
          title: "Calibrated for Sri Lanka",
          body: 'Unlike Western models, our baseline is set to the Sri Lankan context. For example, our "Economic Right" is defined by the 1977 Open Economy reforms, while our "Economic Left" reflects traditional welfare-state policies and nationalization.',
        },
      ],
      criteriaHeadline: "How We Classify Leaders",
      criteriaSections: [
        {
          title: "Economic Stance (Left vs. Right)",
          body: "We analyze their actual policy record while in power. Leaders who promoted nationalization, import restrictions, and subsidies are placed on the Left (e.g., Sirimavo Bandaranaike). Leaders who pushed for privatization, the Open Economy, and deregulation are placed on the Right (e.g., J.R. Jayewardene).",
        },
        {
          title: "Governance Style (Authoritarian vs. Libertarian)",
          body: "This is determined by their use of executive power. Leaders who centralized power, suppressed press freedom, or utilized emergency laws frequently are placed higher on the Authoritarian scale. Those who supported decentralization and strengthened democratic institutions are placed lower towards Libertarian.",
        },
        {
          title: "Actions Over Rhetoric",
          body: 'Classification is based on implemented policies, not election promises. For example, a leader may promise "socialism" but implement "capitalist" reforms; we score them based on the reforms they actually implemented.',
        },
      ],
    },
    si: {
      headline: "ගණනය කිරීමේ ක්‍රමවේදය සහ උපකල්පන",
      generalSections: [
        {
          title: "අප ගණනය කරන ආකාරය",
          body: "අප භාවිතා කරන්නේ සම්මත දේශපාලන මාලිමා ආකෘතිය මත පදනම් වූ ලකුණු දීමේ ක්‍රමයකි. මෙහි තිරස් අක්ෂය (ආර්ථික) මගින් රාජ්‍ය පාලනය (වම) සහ නිදහස් වෙළඳපොල (දකුණ) අතර ඔබේ ස්ථාවරය මනිනු ලබන අතර, සිරස් අක්ෂය (සමාජීය) මගින් අධිකාරීවාදය සහ පුද්ගල නිදහස අතර ඔබේ මතය විමසා බලයි.",
        },
        {
          title: "ශ්‍රී ලාංකීය සන්දර්භය",
          body: 'බටහිර නිර්ණායක වෙනුවට, අප මෙය සකසා ඇත්තේ ශ්‍රී ලංකාවේ දේශපාලන ඉතිහාසයට ගැලපෙන පරිදිය. උදාහරණයක් ලෙස, අපගේ "ආර්ථික දකුණ" 1977 විවෘත ආර්ථික ප්‍රතිපත්ති මත පදනම් වන අතර, "ආර්ථික වම" සම්ප්‍රදායික සුබසාධනවාදී ප්‍රතිපත්ති නියෝජනය කරයි.',
        },
      ],
      criteriaHeadline: "දේශපාලන නායකයින් වර්ගීකරණය කරන නිර්ණායක",
      criteriaSections: [
        {
          title: "ආර්ථික දිශානතිය (වම සහ දකුණ)",
          body: "අප සලකා බලන්නේ ඔවුන් බලයේ සිටියදී ක්‍රියාත්මක කළ සැබෑ ප්‍රතිපත්ති ය. රාජ්‍ය දේපල ජනසතු කළ සහ දේශීය ආර්ථිකය ආරක්ෂා කළ නායකයින් වම් පසින්ද (උදා: සිරිමාවෝ බණ්ඩාරනායක), විවෘත ආර්ථිකය සහ පෞද්ගලීකරණය දිරිමත් කළ නායකයින් දකුණු පසින්ද (උදා: ජේ.ආර්. ජයවර්ධන) නම් කර ඇත.",
        },
        {
          title: "පාලන විලාසය (අධිකාරීවාදී සහ නිදහස්වාදී)",
          body: "මෙය තීරණය කරනුයේ විධායක බලය භාවිත කළ ආකාරය මතය. බලය කේන්ද්‍රගත කළ, මාධ්‍ය නිදහස සීමා කළ හෝ හදිසි නීති නිතර භාවිතා කළ නායකයින් අධිකාරීවාදී (Authoritarian) අක්ෂයේ ඉහළින් ස්ථානගත කර ඇත. ප්‍රජාතන්ත්‍රවාදී ආයතන ශක්තිමත් කිරීමට කටයුතු කළ අය පහළින් ස්ථානගත කර ඇත.",
        },
        {
          title: "වචන වලට වඩා ක්‍රියාවන්ට මුල්තැන",
          body: "මෙම වර්ගීකරණය සිදු කර ඇත්තේ මැතිවරණ වේදිකාවේ දෙන ලද පොරොන්දු මත නොව, ඔවුන් පාලන සමයේදී ක්‍රියාවට නැංවූ ප්‍රතිපත්ති මත පදනම්වය.",
        },
      ],
    },
    ta: {
      headline: "கணிப்பீட்டு முறை மற்றும் அனுமானங்கள்",
      generalSections: [
        {
          title: "நாம் கணிக்கும் முறை",
          body: "நாங்கள் நிலையான இரண்டு அச்சு மாதிரியை (2-axis model) அடிப்படையாகக் கொண்ட மதிப்பீட்டு முறையைப் பயன்படுத்துகிறோம். கிடை அச்சு (பொருளாதாரம்) அரச கட்டுப்பாடு (இடது) மற்றும் திறந்த சந்தை (வலது) ஆகியவற்றிற்கு இடையிலான உங்கள் நிலைப்பாட்டை அளவிடுகிறது. செங்குத்து அச்சு (சமூகம்) அதிகாரம் மற்றும் தனிமனித சுதந்திரம் ஆகியவற்றிற்கு இடையிலான உங்கள் பார்வையை அளவிடுகிறது.",
        },
        {
          title: "இலங்கைச் சூழலுக்கு ஏற்ப",
          body: 'மேற்கத்திய மாதிரிகளைப் போலன்றி, இது இலங்கையின் அரசியல் சூழலுக்கு ஏற்ப வடிவமைக்கப்பட்டுள்ளது. உதாரணமாக, எமது "பொருளாதார வலதுசாரி" என்பது 1977 திறந்த பொருளாதாரக் கொள்கைகளை அடிப்படையாகக் கொண்டது, அதேசமயம் "பொருளாதார இடதுசாரி" என்பது பாரம்பரிய நலன்புரி அரச கொள்கைகளை பிரதிபலிக்கிறது.',
        },
      ],
      criteriaHeadline: "தலைவர்களை வகைப்படுத்தும் முறை",
      criteriaSections: [
        {
          title: "பொருளாதாரக் கொள்கை (இடது vs வலது)",
          body: "அவர்கள் ஆட்சியில் இருந்தபோது முன்னெடுத்த உண்மையான கொள்கைகளை நாங்கள் ஆய்வு செய்கிறோம். தேசியமயமாக்கல் மற்றும் இறக்குமதி கட்டுப்பாடுகளை ஆதரித்தவர்கள் இடதுசாரி (உதாரணம்: சிறிமாவோ பண்டாரநாயக்க) எனவும், திறந்த பொருளாதாரம் மற்றும் தனியார்மயமாக்கலை ஆதரித்தவர்கள் வலதுசாரி (உதாரணம்: ஜே.ஆர். ஜெயவர்த்தன) எனவும் வகைப்படுத்தப்பட்டுள்ளனர்.",
        },
        {
          title: "ஆட்சி முறை (சர்வாதிகாரம் vs தாராளவாதம்)",
          body: "இது அவர்கள் அதிகாரத்தைப் பயன்படுத்திய விதத்தைக் கொண்டு தீர்மானிக்கப்படுகிறது. அதிகாரத்தைக் குவித்தவர்கள் மற்றும் ஊடகச் சுதந்திரத்தை ஒக்கியவர்கள் சர்வாதிகார (Authoritarian) அச்சுக்கு மேலாகவும், ஜனநாயக நிறுவனங்களை வலுப்படுத்தியவர்கள் அதற்கு கீழாகவும் வைக்கப்பட்டுள்ளனர்.",
        },
        {
          title: "வாக்குறுதிகள் அல்ல, செயல்பாடுகள்",
          body: "இந்த வகைப்படுத்தலானது தேர்தல் வாக்குறுதிகளின் அடிப்படையில் அல்லாமல், அவர்கள் நடைமுறைப்படுத்திய உண்மையான திட்டங்களின் அடிப்படையில் அமைந்துள்ளது.",
        },
      ],
    },
  };

  const currentMethodology =
    methodologyContent[locale] || methodologyContent.en;

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Hero Section */}
        <section className="relative flex flex-col items-start justify-center overflow-hidden rounded-[32px] px-8 py-20 text-left md:min-h-[600px] md:px-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg-new.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

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

              <button
                onClick={() => scrollToSection("how-it-works")}
                className="rounded-xl border border-foreground/20 bg-white/5 backdrop-blur-sm px-8 py-[18px] text-base font-semibold text-foreground transition-all hover:bg-foreground/10 hover:border-gold/50"
              >
                {t("howItWorks")}
              </button>
            </div>

            <div className="mt-4 text-sm text-foreground/60 font-medium">
              ⏱️ Takes approximately 5 minutes
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section id="how-it-works" className="py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: 1,
                icon: "❓",
                titleKey: "step1Title",
                textKey: "step1Text",
              },
              {
                num: 2,
                icon: "📊",
                titleKey: "step2Title",
                textKey: "step2Text",
              },
              {
                num: 3,
                icon: "🤝",
                titleKey: "step3Title",
                textKey: "step3Text",
              },
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
                  {t(step.titleKey)}
                </h3>
                <p className="text-base leading-[1.6] text-foreground/70">
                  {t(step.textKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology & Classification Criteria Section */}
        <section
          id="methodology"
          className="pb-24 pt-12 border-t border-foreground/10"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {currentMethodology.headline}
            </h2>
            <div className="h-1 w-20 bg-[#FDB913] mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
            {currentMethodology.generalSections.map((section, index) => (
              <div
                key={index}
                className="theme-card relative rounded-[20px] p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {section.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-8 text-center mt-16">
            <h3 className="text-2xl font-bold tracking-tight text-gold-text">
              {currentMethodology.criteriaHeadline}
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {currentMethodology.criteriaSections.map((section, index) => (
              <div
                key={index}
                className="theme-card relative rounded-[20px] p-8 border border-gold/10"
              >
                <h4 className="mb-4 text-lg font-bold text-foreground">
                  {section.title}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
