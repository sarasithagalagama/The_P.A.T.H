"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

/**
 * HomePage Component
 * The main landing page of the application.
 * Features:
 * - Hero section with primary Call-to-Action (CTA)
 * - "How It Works" steps
 * - Detailed Methodology & Assumptions section
 */
export default function HomePage() {
  const t = useTranslations("home");
  const tApp = useTranslations("app");
  const locale = useLocale();

  // Helper to smooth scroll to specific sections (e.g., Methodology)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Methodology Content
   * Structured data for the Methodology section to support complex layouts
   * that might be difficult to manage purely with simple i18n JSON strings.
   * This ensures the "How We Calculate" and "How We Classify" sections are rich and detailed.
   */
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

  const floatingLeaders = [
    {
      src: "D.S. Senanayake.png",
      size: 120,
      top: "5%",
      left: "3%",
      duration: "25s",
      animation: "float-1",
    },
    {
      src: "S.W.R.D. Bandaranaike.png",
      size: 110,
      top: "12%",
      right: "8%",
      duration: "28s",
      animation: "float-2",
    },
    {
      src: "Sirimavo Bandaranaike.png",
      size: 115,
      top: "48%",
      left: "-4%",
      duration: "30s",
      animation: "float-3",
    },
    {
      src: "J.R. Jayewardene.png",
      size: 125,
      top: "32%",
      right: "-6%",
      duration: "22s",
      animation: "float-1",
    },
    {
      src: "Ranasinghe Premadasa.png",
      size: 110,
      bottom: "12%",
      left: "8%",
      duration: "26s",
      animation: "float-2",
    },
    {
      src: "Mahinda Rajapaksa.png",
      size: 130,
      bottom: "6%",
      right: "4%",
      duration: "24s",
      animation: "float-3",
    },
    {
      src: "Ranil Wickremesinghe.png",
      size: 100,
      top: "4%",
      left: "42%",
      duration: "35s",
      animation: "float-1",
      opacity: 0.1,
    },
    {
      src: "Anura Kumara Dissanayake.png",
      size: 110,
      bottom: "22%",
      right: "28%",
      duration: "32s",
      animation: "float-2",
      opacity: 0.1,
    },
  ];

  return (
    <div className="relative min-h-screen">
      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -30px) rotate(3deg);
          }
          50% {
            transform: translate(0, -50px) rotate(0deg);
          }
          75% {
            transform: translate(-30px, -20px) rotate(-3deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 30px) rotate(-3deg);
          }
          66% {
            transform: translate(25px, 15px) rotate(2deg);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(40px, 40px) rotate(3deg);
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/*
          Hero Section:
          Centerpiece of the home page with floating politicians background.
        */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden rounded-[32px] px-8 py-24 text-center md:min-h-[650px] md:px-16 border border-foreground/5 bg-background/50 backdrop-blur-sm">
          {/* Dynamic Floating Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Radial Gradient for Center Focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/80 to-background z-10" />

            {/* Floating Heads */}
            {floatingLeaders.map((leader, index) => (
              <div
                key={index}
                className="absolute opacity-20 dark:opacity-15 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
                style={{
                  top: leader.top,
                  left: leader.left,
                  right: leader.right,
                  bottom: leader.bottom,
                  width: `${leader.size}px`,
                  height: `${leader.size}px`,
                  animation: `${leader.animation} ${leader.duration} ease-in-out infinite`,
                  opacity: leader.opacity, // Optional override
                }}
              >
                <Image
                  src={`/images/politicians/${leader.src}`}
                  alt="Leader"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            ))}
          </div>

          <div className="relative z-20 max-w-[800px]">
            <div className="mb-6 inline-flex items-center justify-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-gold-text shadow-[0_0_15px_rgba(253,185,19,0.2)]">
              {tApp("subtitle")}
            </div>

            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-[80px]">
              The P.A.T.H.
              <span className="mt-2 block bg-gradient-to-r from-[#FDB913] via-[#ffdda0] to-[#FDB913] bg-clip-text text-transparent drop-shadow-sm">
                Political Alignment
              </span>
              <span className="block text-foreground/90">Testing Hub</span>
            </h1>

            <p className="mx-auto mb-12 max-w-2xl text-xl leading-[1.7] text-foreground/70 font-medium">
              {t("intro")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/quiz"
                className="group relative overflow-hidden rounded-xl bg-gold px-12 py-5 text-lg font-bold text-black shadow-[0_4px_20px_rgba(253,185,19,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(253,185,19,0.5)]"
              >
                <span className="relative z-10">{t("startQuiz")}</span>
                <div className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <button
                onClick={() => scrollToSection("how-it-works")}
                className="rounded-xl border border-foreground/10 bg-foreground/5 backdrop-blur-md px-10 py-5 text-base font-semibold text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/20"
              >
                {t("howItWorks")}
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-foreground/40 font-medium tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Takes approximately 5 minutes
            </div>
          </div>
        </section>

        {/*
          How It Works Section:
          Simple 3-step guide using cards with hover effects.
        */}
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
                className="theme-card group relative overflow-hidden rounded-[24px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] scale-x-0 bg-gradient-to-r from-gold via-yellow-200 to-gold transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-foreground/5 text-2xl font-black text-gold-text group-hover:bg-gold group-hover:text-black transition-colors duration-500 shadow-inner">
                    {step.num}
                  </div>
                  <div className="text-4xl opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-gold-text transition-colors">
                  {t(step.titleKey)}
                </h3>
                <p className="text-base leading-[1.7] text-foreground/60 transition-colors group-hover:text-foreground/80">
                  {t(step.textKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/*
          Methodology Section:
          Displays the calculation logic and assumptions to ensure transparency.
          Uses the 'methodologyContent' object defined above.
        */}
        <section
          id="methodology"
          className="pb-24 pt-12 border-t border-foreground/5"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {currentMethodology.headline}
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full opacity-80" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
            {currentMethodology.generalSections.map((section, index) => (
              <div
                key={index}
                className="theme-card relative rounded-[24px] p-10 hover:bg-foreground/5 transition-colors"
              >
                <div className="absolute top-10 left-0 w-1 h-12 bg-gold/50 rounded-r-full" />
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {section.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground/70">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gold-text uppercase tracking-widest opacity-90">
              {currentMethodology.criteriaHeadline}
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {currentMethodology.criteriaSections.map((section, index) => (
              <div
                key={index}
                className="theme-card relative rounded-[24px] p-8 border border-foreground/10 hover:border-gold/30 transition-all duration-300 group"
              >
                <h4 className="mb-4 text-lg font-bold text-foreground group-hover:text-gold-text transition-colors">
                  {section.title}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/60 group-hover:text-foreground/80 transition-colors">
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
