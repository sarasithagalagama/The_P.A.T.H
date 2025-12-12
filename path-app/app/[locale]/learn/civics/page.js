"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function CivicsPage() {
  const locale = useLocale();

  const levels = [
    {
      id: "local",
      title: {
        en: "Level 1: Local Government",
        si: "1 වන මට්ටම: පළාත් පාලන ආයතන",
        ta: "நிலை 1: உள்ளூராட்சி மன்றங்கள்",
      },
      subtitle: {
        en: 'The "Neighborhood" Level',
        si: '"ගමේ/නගරයේ" පාලනය',
        ta: '"ஊர்/நகர" ஆட்சி',
      },
      icon: "🏡",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      textColor: "text-green-500",
      institutions: {
        en: "Pradeshiya Sabha (PS), Urban Council (UC), Municipal Council (MC)",
        si: "ප්‍රාදේශීය සභා / නගර සභා / මහ නගර සභා",
        ta: "பிரதேச சபை / நகர சபை / மாநகர சபை",
      },
      representative: {
        en: "Chairman / Mayor / Member",
        si: "සභාපති / නගරාධිපති / මන්ත්‍රී",
        ta: "தவிசாளர் / முதல்வர் / உறுப்பினர்",
      },
      role: {
        label: {
          en: "Main Responsibility",
          si: "ප්‍රධාන වගකීම",
          ta: "முக்கிய பொறுப்பு",
        },
        text: {
          en: "Responsible for the daily maintenance of your immediate environment.",
          si: "ඔබේ ගම හෝ නගරය පිරිසිදුව පවත්වාගෙන යාම සහ මූලික පහසුකම් සැපයීම.",
          ta: "உங்கள் சுற்றுப்புற சூழலைப் பராமரித்தல் மற்றும் அடிப்படை வசதிகளை வழங்குதல்.",
        },
      },
      dos: {
        label: {
          en: "Call them for...",
          si: "ඔවුන්ට පැවරී ඇති කාර්යයන්...",
          ta: "இவர்களை எதற்குக் நாடலாம்...",
        },
        items: [
          {
            en: "Garbage collection & cleaning drains",
            si: "කුණු එකතු කිරීම සහ කාණු පද්ධති නඩත්තුව",
            ta: "குப்பை சேகரிப்பு மற்றும் வடிகால் துப்புரவு",
          },
          {
            en: "Fixing street lights",
            si: "වීදි ලාම්පු අලුත්වැඩියාව",
            ta: "வீதி விளக்குகளைப் திருத்துதல்",
          },
          {
            en: "Approving building plans",
            si: "ගොඩනැගිලි සැලසුම් අනුමත කිරීම",
            ta: "கட்டட வரைபடங்களுக்கு அனுமதியளித்தல்",
          },
          {
            en: "Maintaining small by-roads",
            si: "කුඩා මාර්ග නඩත්තුව",
            ta: "சிறிய வீதிகளைப் பராமரித்தல்",
          },
        ],
      },
      donts: {
        label: {
          en: "Don't ask them for...",
          si: "වැරදි වැටහීම...",
          ta: "தவறான புரிதல்...",
        },
        text: {
          en: "Jobs, school admissions, or national laws.",
          si: "රැකියා ලබා දීම හෝ ජාතික පාසල්වලට ළමුන් ඇතුළත් කිරීම ඔවුන්ගේ කාර්යභාරයක් නොවේ.",
          ta: "வேலைவாய்ப்புகள் அல்லது தேசிய பாடசாலைகளில் அனுமதி பெறுவது இவர்களது பணியல்ல.",
        },
      },
    },
    {
      id: "provincial",
      title: {
        en: "Level 2: Provincial Council",
        si: "2 වන මට්ටම: පළාත් සභාව",
        ta: "நிலை 2: மாகாண சபை",
      },
      subtitle: {
        en: 'The "Regional" Level',
        si: '"පළාත්" මට්ටම',
        ta: '"பிராந்திய" நிலை',
      },
      icon: "🏥",
      color: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-500",
      institutions: {
        en: "Provincial Council (Western, Southern, etc.)",
        si: "පළාත් සභාව (බස්නාහිර, දකුණ, ආදී වශයෙන්)",
        ta: "மாகாண சபை (மேல் மாகாணம், தென் மாகாணம் போன்றவை)",
      },
      representative: {
        en: "Chief Minister / Provincial Councillor",
        si: "ප්‍රධාන අමාත්‍ය / පළාත් සභා මන්ත්‍රී",
        ta: "முதலமைச்சர் / மாகாண சபை உறுப்பினர்",
      },
      role: {
        label: {
          en: "Main Responsibility",
          si: "ප්‍රධාන වගකීම",
          ta: "முக்கிய பொறுப்பு",
        },
        text: {
          en: "Managing administration within the province. Bridges the gap between village and capital.",
          si: "පළාත තුළ පරිපාලන කටයුතු මෙහෙයවීම.",
          ta: "மாகாணத்திற்குள் நிர்வாகத்தை மேற்கொள்ளல்.",
        },
      },
      dos: {
        label: {
          en: "Call them for...",
          si: "ඔවුන්ට පැවරී ඇති කාර්යයන්...",
          ta: "இவர்களை எதற்குக் நாடலாம்...",
        },
        items: [
          {
            en: "Provincial schools (non-National schools)",
            si: "පළාත් සභා පාසල් පරිපාලනය",
            ta: "மாகாண பாடசாலைகள்",
          },
          {
            en: "Base hospitals",
            si: "ප්‍රාදේශීය රෝහල්",
            ta: "ஆதார வைத்தியசாலைகள்",
          },
          {
            en: "Provincial roads",
            si: "පළාත් මාර්ග සංවර්ධනය",
            ta: "மாகாண வீதிகள்",
          },
          {
            en: "Local bus transportation",
            si: "පළාත් බස් රථ සේවා",
            ta: "உள்ளூர் போக்குவரத்துச் சேவைகள்",
          },
        ],
      },
    },
    {
      id: "national",
      title: {
        en: "Level 3: Central Government",
        si: "3 වන මට්ටම: මධ්‍යම රජය",
        ta: "நிலை 3: மத்திய அரசாங்கம்",
      },
      subtitle: {
        en: 'The "National" Level',
        si: '"ජාතික" මට්ටම',
        ta: '"தேசிய" நிலை',
      },
      icon: "🏛️",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      textColor: "text-[#FDB913]",
      institutions: {
        en: "Parliament & Executive President",
        si: "පාර්ලිමේන්තුව සහ විධායක ජනාධිපති",
        ta: "பாராளுமன்றம் மற்றும் ஜனாதிபதி",
      },
      representative: {
        en: "Member of Parliament (MP) / Minister / President",
        si: "පාර්ලිමේන්තු මන්ත්‍රී (MP) / අමාත්‍ය / ජනාධිපති",
        ta: "பாராளுமன்ற உறுப்பினர் / அமைச்சர் / ஜனாதிபதி",
      },
      role: {
        label: {
          en: "Main Responsibility",
          si: "ප්‍රධාන වගකීම",
          ta: "முக்கிய பொறுப்பு",
        },
        text: {
          en: "Making laws and managing the country's economy and security.",
          si: "රටේ නීති සම්පාදනය, ආර්ථිකය හැසිරවීම සහ ජාතික ආරක්ෂාව.",
          ta: "சட்டங்களை உருவாக்குதல், பொருளாதாரம் மற்றும் பாதுகாப்பை நிர்வகித்தல்.",
        },
      },
      dos: {
        label: {
          en: "Call them for...",
          si: "ඔවුන්ට පැවරී ඇති කාර්යයන්...",
          ta: "இவர்களை எதற்குக் நாடலாம்...",
        },
        items: [
          {
            en: "National policy (Taxes, Education reform)",
            si: "ජාතික ප්‍රතිපත්ති (බදු, අධ්‍යාපන නීති)",
            ta: "தேசிய கொள்கைகள் (வரி, கல்விச் சீர்திருத்தம்)",
          },
          {
            en: "National Security & Foreign Affairs",
            si: "ජාතික ආරක්ෂාව සහ විදේශ සබඳතා",
            ta: "பாதுகாப்பு மற்றும் வெளிநாட்டு உறவுகள்",
          },
          {
            en: "Major infrastructure (Highways, Power Plants)",
            si: "මහාමාර්ග සහ විදුලිබල ව්‍යාපෘති",
            ta: "பெருந்தெருக்கள் மற்றும் மின்சாரத் திட்டங்கள்",
          },
        ],
      },
      donts: {
        label: {
          en: "Don't ask them for...",
          si: "වැරදි වැටහීම...",
          ta: "தவறான புரிதல்...",
        },
        text: {
          en: "To fix a broken drain in front of your house (that's the Pradeshiya Sabha's job!).",
          si: "ඔබේ ගෙදර ඉදිරිපිට කාණුව කැඩී ඇත්නම් ඒ සඳහා මන්ත්‍රීවරයාට (MP) දොස් නොකියන්න; එය ප්‍රාදේශීය සභා මන්ත්‍රීවරයාගේ වගකීමකි.",
          ta: "உங்கள் வீட்டு முன்னால் உள்ள வடிகால் உடைந்திருந்தால் பாராளுமன்ற உறுப்பினரை (MP) குறை கூறாதீர்கள்; அது பிரதேச சபை உறுப்பினரின் பொறுப்பாகும்.",
        },
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
              Civics 101
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Who Does <span className="text-gold-text">What?</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              Stop blaming the wrong person. Know who is responsible for
              what—from your drain to national defense.
            </p>
          </div>

          <div className="grid gap-12">
            {levels.map((level) => (
              <div
                key={level.id}
                className={`theme-card relative overflow-hidden rounded-[32px] p-8 md:p-12 transition-all hover:shadow-2xl border ${level.borderColor}`}
              >
                {/* Accent Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-10 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Icon Column */}
                  <div className="flex-shrink-0 flex items-start justify-center md:block">
                    <div className="h-24 w-24 rounded-[24px] bg-background/50 backdrop-blur-md flex items-center justify-center text-5xl border border-white/10 shadow-inner">
                      {level.icon}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 space-y-8">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                        <h2
                          className={`text-3xl font-extrabold ${level.textColor}`}
                        >
                          {level.title[locale] || level.title.en}
                        </h2>
                        <span className="inline-block px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-bold uppercase tracking-wider text-foreground/70 w-fit">
                          {level.subtitle[locale] || level.subtitle.en}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm text-foreground/80">
                        <div className="bg-background/40 rounded-xl p-5 border border-white/5 backdrop-blur-sm">
                          <span className="block text-xs uppercase tracking-wider opacity-60 mb-2 font-bold">
                            Institutions
                          </span>
                          <span className="font-semibold text-base">
                            {level.institutions[locale] ||
                              level.institutions.en}
                          </span>
                        </div>
                        <div className="bg-background/40 rounded-xl p-5 border border-white/5 backdrop-blur-sm">
                          <span className="block text-xs uppercase tracking-wider opacity-60 mb-2 font-bold">
                            Representative
                          </span>
                          <span className="font-semibold text-base">
                            {level.representative[locale] ||
                              level.representative.en}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="bg-background/30 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
                      <h3 className="text-sm font-bold mb-3 flex items-center gap-2 uppercase tracking-wider opacity-80">
                        🎯 {level.role.label[locale] || level.role.label.en}
                      </h3>
                      <p className="text-lg leading-relaxed font-medium">
                        {level.role.text[locale] || level.role.text.en}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Do's */}
                      <div className="bg-green-500/5 rounded-2xl p-6 border border-green-500/20 hover:bg-green-500/10 transition-colors">
                        <h3 className="text-green-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-xs">
                          ✅ {level.dos.label[locale] || level.dos.label.en}
                        </h3>
                        <ul className="space-y-3">
                          {level.dos.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-foreground/90 text-sm font-medium"
                            >
                              <span className="text-green-500 text-lg leading-none mt-0.5">
                                •
                              </span>
                              <span>{item[locale] || item.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Don'ts (If applicable) */}
                      {level.donts && (
                        <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/20 hover:bg-red-500/10 transition-colors">
                          <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-wide text-xs">
                            ❌{" "}
                            {level.donts.label[locale] || level.donts.label.en}
                          </h3>
                          <p className="text-foreground/90 leading-relaxed text-sm font-medium">
                            {level.donts.text[locale] || level.donts.text.en}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 px-8 py-4 text-sm font-bold transition-all hover:bg-foreground hover:text-background"
            >
              ← {locale === "si" ? "නැවත පාඩම් මාලාවට" : "Back to Classroom"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
