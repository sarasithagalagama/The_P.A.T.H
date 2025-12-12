"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function LeadersPage() {
  const locale = useLocale();

  const caseStudies = [
    {
      id: "statist-nationalist",
      archetype: {
        en: "Statist Nationalist",
        si: "රාජ්‍යවාදී ජාතිකවාදීන්",
        ta: "அரச தேசியவாதிகள்",
      },
      subtitle: {
        en: "(Authoritarian Left)",
        si: "(අධිකාරීවාදී වම්)",
        ta: "(சர்வாதிகார இடது)",
      },
      figures: {
        en: "Mahinda Rajapaksa & Sirimavo Bandaranaike",
        si: "මහින්ද රාජපක්ෂ සහ සිරිමාවෝ බණ්ඩාරනායක",
        ta: "மஹிந்த ராஜபக்ஷ மற்றும் சிறிமாவோ பண்டாரநாயக்க",
      },
      content: {
        en: {
          economic:
            "Both championed a state-heavy economy. Sirimavo closed the economy (1970-77), and Mahinda focused on state-led infrastructure and debt-driven development, protecting local industries but restricting free trade.",
          governance:
            "Both centralized power heavily. Sirimavo used emergency laws to extend her rule; Mahinda removed term limits (18th Amendment) and militarized civil administration.",
        },
        si: {
          economic:
            "දෙදෙනාම රාජ්‍ය මූලික ආර්ථිකයක් වෙනුවෙන් පෙනී සිටියහ. සිරිමාවෝ ආර්ථිකය සංවෘත කළ අතර (1970-77), මහින්ද රාජ්‍ය මූලික යටිතල පහසුකම් සහ ණය මත පදනම් වූ සංවර්ධනය කෙරෙහි අවධානය යොමු කළේය.",
          governance:
            "දෙදෙනාම බලය දැඩි ලෙස මධ්‍යගත කළහ. සිරිමාවෝ හදිසි නීති භාවිතා කළ අතර, මහින්ද ධුර කාල සීමාවන් ඉවත් කර (18 වන සංශෝධනය) පරිපාලනය හමුදාකරණය කළේය.",
        },
        ta: {
          economic:
            "இருவரும் அரசு சார்ந்த பொருளாதாரத்தை ஆதரித்தனர். சிறிமாவோ பொருளாதாரத்தை மூடினார் (1970-77), மஹிந்த அரச உள்கட்டமைப்பு மற்றும் கடன் சார்ந்த வளர்ச்சியில் கவனம் செலுத்தினார்.",
          governance:
            "இருவரும் அதிகாரத்தை மையப்படுத்தினர். சிறிமாவோ அவசரகால சட்டங்களைப் பயன்படுத்தினார்; மஹிந்த பதவி வரம்புகளை நீக்கி (18வது திருத்தம்) நிர்வாகத்தை இராணுவமயமாக்கினார்.",
        },
      },
      color: "#EF4444", // Red (Auth-Left)
    },
    {
      id: "conservative-capitalist",
      archetype: {
        en: "Conservative Capitalist",
        si: "සම්ප්‍රදායික ධනවාදීන්",
        ta: "பழமைவாத முதலாளித்துவவாதிகள்",
      },
      subtitle: {
        en: "(Authoritarian Right)",
        si: "(අධිකාරීවාදී දකුණු)",
        ta: "(சர்வாதிகார வலது)",
      },
      figures: {
        en: "J.R. Jayewardene & Ranil Wickremesinghe",
        si: "ජේ.ආර්. ජයවර්ධන සහ රනිල් වික්‍රමසිංහ",
        ta: "ஜே.ஆர். ஜெயவர்த்தன மற்றும் ரணில் விக்கிரமசிங்க",
      },
      content: {
        en: {
          economic:
            "The architects of the Open Economy. J.R. introduced it in 1977, and Ranil has consistently pushed for neoliberal reforms, privatization of SOEs, and austerity measures to stabilize the economy.",
          governance:
            "Both utilized the full force of the Executive Presidency. J.R. created it and held a referendum to avoid elections; Ranil used it to suppress the Aragalaya and postpone local elections.",
        },
        si: {
          economic:
            "විවෘත ආර්ථිකයේ නිර්මාතෘවරුන්ය. ජේ.ආර්. 1977 දී එය හඳුන්වා දුන් අතර, රනිල් දිගින් දිගටම නව ලිබරල් ප්‍රතිසංස්කරණ සහ රාජ්‍ය ආයතන පෞද්ගලීකරණය වෙනුවෙන් පෙනී සිටියේය.",
          governance:
            "දෙදෙනාම විධායක ජනාධිපති ධුරයේ බලය උපරිමයෙන් භාවිතා කළහ. ජේ.ආර්. ජනමත විචාරණයක් පැවැත්වූ අතර, රනිල් අරගලය මර්දනය කිරීමට එම බලය භාවිතා කළේය.",
        },
        ta: {
          economic:
            "திறந்த பொருளாதாரத்தின் சிற்பிகள். ஜே.ஆர். 1977 இல் அதை அறிமுகப்படுத்தினார், ரணில் தொடர்ந்து தனியார்மயமாக்கலை ஆதரித்தார்.",
          governance:
            "இருவரும் நிறைவேற்று அதிகாரத்தை முழுமையாகப் பயன்படுத்தினர். ஜே.ஆர். தேர்தலைத் தவிர்க்க பொதுவாக்கெடுப்பை நடத்தினார்; ரணில் போராட்டங்களை ஒடுக்கினார்.",
        },
      },
      color: "#3B82F6", // Blue (Auth-Right)
    },
    {
      id: "democratic-socialist",
      archetype: {
        en: "Democratic Socialist",
        si: "ප්‍රජාතන්ත්‍රවාදී සමාජවාදීන්",
        ta: "ஜனநாயக சோசலிஸ்டுகள்",
      },
      subtitle: {
        en: "(Libertarian Left)",
        si: "(නිදහස්වාදී වම්)",
        ta: "(தாராளவாத இடது)",
      },
      figures: {
        en: "Anura Kumara Dissanayake (Modern NPP)",
        si: "අනුර කුමාර දිසානායක (නූතන NPP)",
        ta: "அநுர குமார திஸாநாயக்க (நவீன NPP)",
      },
      content: {
        en: {
          economic:
            "Advocates for a 'Production-Based Economy' and reducing the tax burden on the working class (VAT), while opposing the sale of national assets.",
          governance:
            "The core platform is 'System Change'—abolishing the Executive Presidency, ending corruption, and reducing the power of the political elite.",
          note: "This distinguishes the modern NPP from the historical JVP (which was Authoritarian Left).",
        },
        si: {
          economic:
            "'නිෂ්පාදන ආර්ථිකයක්' සහ වැඩ කරන ජනතාවගේ බදු බර අඩු කිරීම (VAT) වෙනුවෙන් පෙනී සිටින අතර, ජාතික සම්පත් විකිණීමට විරුද්ධ වේ.",
          governance:
            "ප්‍රධාන අරමුණ 'ක්‍රමයේ වෙනසක්' (System Change) - විධායක ජනාධිපති ධුරය අහෝසි කිරීම සහ දූෂණය නතර කිරීමයි.",
          note: "මෙය පැරණි JVP (අධිකාරීවාදී වම) සහ නූතන NPP අතර වෙනස පෙන්නුම් කරයි.",
        },
        ta: {
          economic:
            "'உற்பத்தி சார்ந்த பொருளாதாரம்' மற்றும் வரிச் சுமைகளை குறைத்தல்; அதேவேளை தேசிய சொத்துக்களை விற்பதை எதிர்த்தல்.",
          governance:
            "முக்கிய நோக்கம் 'முறைமை மாற்றம்' (System Change) - நிறைவேற்று அதிகாரத்தை நீக்குதல் மற்றும் ஊழலை ஒழித்தல்.",
          note: "இது நவீன NPP ஐ வரலாற்று JVP யிலிருந்து (சர்வாதிகார இடது) வேறுபடுத்துகிறது.",
        },
      },
      color: "#22C55E", // Green (Lib-Left)
    },
    {
      id: "social-liberal",
      archetype: {
        en: "Social Liberal",
        si: "සමාජ ලිබරල්වාදීන්",
        ta: "சமூக தாராளவாதிகள்",
      },
      subtitle: {
        en: "(Libertarian Right)",
        si: "(නිදහස්වාදී දකුණු)",
        ta: "(தாராளவாத வலது)",
      },
      figures: {
        en: "Sajith Premadasa (SJB) & Mangala Samaraweera (Historical)",
        si: "සජිත් ප්‍රේමදාස (SJB) සහ මංගල සමරවීර",
        ta: "சஜித் பிரேமதாஸ (SJB) மற்றும் மங்கள சமரவீர",
      },
      content: {
        en: {
          economic:
            "Supports open markets but emphasizes 'Social Capitalism'—using market profits to fund strong poverty alleviation programs (like Janasaviya).",
          governance:
            "Generally supports the 13th Amendment (devolution of power) and reducing the powers of the President (21st Amendment).",
        },
        si: {
          economic:
            "විවෘත වෙළඳපොලට සහාය දෙන අතරම 'සමාජ ධනවාදය' අවධාරණය කරයි - වෙළඳපොල ලාභ හරහා දරිද්‍රතාවය පිටුදැකීමේ වැඩසටහන් (ජනසවිය වැනි) ක්‍රියාත්මක කරයි.",
          governance:
            "13 වන සංශෝධනය (බලය බෙදා හැරීම) සහ ජනාධිපති බලතල අඩු කිරීමට (21 වන සංශෝධනය) සහාය දක්වයි.",
        },
        ta: {
          economic:
            "திறந்த சந்தையை ஆதரிக்கிறது ஆனால் 'சமூக முதலாளித்துவத்தை' வலியுறுத்துகிறது - வறுமை ஒழிப்பு திட்டங்களுக்கு நிதியளிக்கிறது.",
          governance:
            "13 வது திருத்தத்தை (அதிகாரப் பகிர்வு) மற்றும் ஜனாதிபதி அதிகாரங்களைக் குறைப்பதை (21 வது திருத்தம்) ஆதரிக்கிறது.",
        },
      },
      color: "#EAB308", // Yellow (Lib-Right)
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="py-12">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              {locale === "si"
                ? "දේශපාලන අධ්‍යයනයන්"
                : "Political Case Studies"}
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {locale === "si"
                ? "ශ්‍රී ලංකාවේ ප්‍රධාන දේශපාලන ධාරාවන්"
                : locale === "ta"
                ? "இலங்கையின் முக்கிய அரசியல் ஆய்வுகள்"
                : "Understanding the Archetypes"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              {locale === "en" &&
                "See where Sri Lanka's key figures land on the compass and understand the history behind their ideologies."}
              {locale === "si" &&
                "ශ්‍රී ලංකාවේ ප්‍රධාන දේශපාලන චරිත මාලිමා සටහනේ ස්ථානගත වන ආකාරය සහ ඔවුන්ගේ දෘෂ්ටිවාදයන් පිටුපස ඇති ඉතිහාසය වටහා ගන්න."}
              {locale === "ta" &&
                "இலங்கையின் முக்கிய அரசியல் பிரமுகர்கள் திசைகாட்டி வரைபடத்தில் எங்கு இருக்கிறார்கள் என்பதையும், அவர்களின் சித்தாந்தங்களின் பின்னணியில் உள்ள வரலாற்றையும் புரிந்து கொள்ளுங்கள்."}
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((item) => (
              <div
                key={item.id}
                className="theme-card group relative overflow-hidden rounded-[32px] p-0 transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Top Banner Color */}
                <div
                  className="h-3 w-full opacity-80"
                  style={{ backgroundColor: item.color }}
                />

                <div className="p-8 md:p-10">
                  {/* Badge */}
                  <div className="mb-6 flex items-start justify-between">
                    <span
                      className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.subtitle[locale] || item.subtitle["en"]}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-2 text-3xl font-extrabold text-foreground group-hover:text-gold-text transition-colors">
                    {item.archetype[locale] || item.archetype["en"]}
                  </h2>
                  <div className="mb-8 text-lg font-medium text-foreground/60">
                    {item.figures[locale] || item.figures["en"]}
                  </div>

                  {/* Content Grid */}
                  <div className="space-y-6">
                    <div className="rounded-[20px] bg-foreground/5 p-6 hover:bg-foreground/10 transition-colors">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-lg">
                          💰
                        </span>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gold-text">
                          {locale === "en" ? "Economic" : "ආර්ථික"}
                        </h3>
                      </div>
                      <p className="text-sm leading-7 text-foreground/80">
                        {item.content[locale]?.economic ||
                          item.content["en"].economic}
                      </p>
                    </div>

                    <div className="rounded-[20px] bg-foreground/5 p-6 hover:bg-foreground/10 transition-colors">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-lg">
                          🏛️
                        </span>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gold-text">
                          {locale === "en" ? "Governance" : "පාලනය"}
                        </h3>
                      </div>
                      <p className="text-sm leading-7 text-foreground/80">
                        {item.content[locale]?.governance ||
                          item.content["en"].governance}
                      </p>
                    </div>

                    {/* Note for Democratic Socialist */}
                    {item.content[locale]?.note && (
                      <div className="mt-4 rounded-xl border border-foreground/10 bg-transparent p-4 text-xs italic text-foreground/50">
                        * {item.content[locale].note}
                      </div>
                    )}
                    {item.content["en"]?.note &&
                      !item.content[locale]?.note && (
                        <div className="mt-4 rounded-xl border border-foreground/10 bg-transparent p-4 text-xs italic text-foreground/50">
                          * {item.content["en"].note}
                        </div>
                      )}
                  </div>
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
