"use client";

import { useLocale } from "next-intl";
import { useRef, useState } from "react";
import { Link } from "@/i18n/routing";

/**
 * History Page (Timeline)
 * Displays a horizontal scrollable timeline of Sri Lanka's political history.
 * Uses a ref-based scroll controller for the timeline container.
 */
export default function HistoryPage() {
  const locale = useLocale();

  const events = [
    {
      year: "1948",
      title: {
        en: "Independence & The UNP Era",
        si: "නිදහස සහ එජාප යුගය",
        ta: "சுதந்திரம் மற்றும் ஐ.தே.க காலம்",
      },
      desc: {
        en: "Sri Lanka gains independence. The UNP governs with a pro-Western, capitalist outlook.",
        si: "ශ්‍රී ලංකාවට නිදහස ලැබේ. බටහිර හිතවාදී, ධනවාදී ප්‍රතිපත්ති අනුගමනය කළ එක්සත් ජාතික පක්ෂය (UNP) බලයට පත්වේ.",
        ta: "இலங்கை சுதந்திரம் அடைகிறது. மேலைத்தேய சார்பான, முதலாளித்துவக் கொள்கைகளைக் கொண்ட ஐக்கிய தேசியக் கட்சி (UNP) ஆட்சிக்கு வருகிறது.",
      },
      type: "political",
      icon: "🕊️",
    },
    {
      year: "1956",
      title: {
        en: "The 'Sinhala Only' Revolution",
        si: "භාෂා පෙරළිය",
        ta: "தனிச் சிங்களச் சட்டம்",
      },
      desc: {
        en: "S.W.R.D. Bandaranaike passes the 'Sinhala Only' Act. Shift towards Nationalism and Welfare.",
        si: "එස්.ඩබ්ලිව්.ආර්.ඩී. බණ්ඩාරනායක 'සිංහල පමණක්' පනත සම්මත කරයි. ජාතිකවාදය සහ ජනසතු කිරීම ඇරඹේ.",
        ta: "பண்டாரநாயக்க 'தனிச் சிங்களச் சட்டத்தை' நிறைவேற்றுகிறார். தேசியவாதம் மற்றும் மக்கள் நலன் சார்ந்த கொள்கைகள்.",
      },
      type: "conflict",
      icon: "🗣️",
    },
    {
      year: "1970",
      title: {
        en: "The Closed Economy",
        si: "සංවෘත ආර්ථිකය",
        ta: "மூடிய பொருளாதாரம்",
      },
      desc: {
        en: "Sirimavo Bandaranaike implements strict socialism. Imports banned, bread lines form.",
        si: "සිරිමාවෝ බණ්ඩාරනායක දැඩි සමාජවාදී ආර්ථිකයක් ක්‍රියාත්මක කරයි. හාල් පොලු සහ පාන් පෝලිම් නිර්මාණය වේ.",
        ta: "சிறிமாவோ பண்டாரநாயக்க கடுமையான சோசலிசப் பொருளாதாரத்தை நடைமுறைப்படுத்துகிறார். இறக்குமதிகள் தடை.",
      },
      type: "economical",
      icon: "🔒",
    },
    {
      year: "1977",
      title: {
        en: "The Open Economy",
        si: "විවෘත ආර්ථිකය",
        ta: "திறந்த பொருளாதாரம்",
      },
      desc: {
        en: "J.R. Jayewardene opens the economy (Free Trade) and creating the powerful Executive Presidency.",
        si: "ජේ.ආර්. ජයවර්ධන ආර්ථිකය ලෝකයට විවෘත කරයි (විවෘත ආර්ථිකය). විධායක ජනාධිපති ධුරය ඇති කරයි.",
        ta: "ஜே.ஆர். ஜெயவர்த்தன பொருளாதாரத்தைத் திறந்து விடுகிறார். நிறைவேற்று அதிகாரம் கொண்ட ஜனாதிபதி முறை உருவாக்கம்.",
      },
      type: "economical",
      icon: "📈",
    },
    {
      year: "1983",
      title: {
        en: "Black July & Civil War",
        si: "කලු ජූලිය සහ යුද්ධය",
        ta: "கறுப்பு யூலை மற்றும் யுத்தம்",
      },
      desc: {
        en: "Anti-Tamil pogroms trigger a 26-year civil war. Prevention of Terrorism Act (PTA) becomes permanent.",
        si: "දමිළ විරෝධී ප්‍රචණ්ඩත්වය වසර 26ක යුද්ධයකට මුල පුරයි. ත්‍රස්තවාදය වැළැක්වීමේ පනත (PTA) පාලන මෙවලමක් වේ.",
        ta: "வன்முறைகள் 26 வருடகால யுத்தத்தைத் தூண்டுகின்றன. பயங்கரவாதத் தடைச் சட்டம் (PTA) நிரந்தரமாகிறது.",
      },
      type: "conflict",
      icon: "🔥",
    },
    {
      year: "1987",
      title: {
        en: "Insurrection & 13A",
        si: "භීෂණ යුගය සහ 13",
        ta: "கிளர்ச்சி மற்றும் 13A",
      },
      desc: {
        en: "Indo-Lanka Accord introduces Provincial Councils (13A). JVP violent Marxist insurrection crushed.",
        si: "ඉන්දු-ලංකා ගිවිසුම හරහා පළාත් සභා (13) එයි. ජවිපෙ කැරැල්ල දරුණු ලෙස මර්දනය කෙරේ.",
        ta: "இந்திய-இலங்கை ஒப்பந்தம் மூலம் மாகாண சபைகள் (13A). ஜே.வி.பி கிளர்ச்சி ஒடுக்கப்படுகிறது.",
      },
      type: "conflict",
      icon: "⚔️",
    },
    {
      year: "2009",
      title: { en: "End of War", si: "යුද්ධයේ අවසානය", ta: "போரின் முடிவு" },
      desc: {
        en: "Mahinda Rajapaksa ends the war but consolidates power. 18th Amendment removes term limits.",
        si: "මහින්ද රාජපක්ෂ යුද්ධය අවසන් කරයි, නමුත් බලය තවදුරටත් කේන්ද්‍රගත කරගනී. 18 වන සංශෝධනය එයි.",
        ta: "மஹிந்த ராஜபக்ஷ யுத்தத்தை முடிவுக்குக் கொண்டுவருகிறார், ஆனால் அதிகாரத்தை வலுப்படுத்துகிறார். 18வது திருத்தம்.",
      },
      type: "neutral",
      icon: "🏳️",
    },
    {
      year: "2022",
      title: {
        en: "Economic Crisis & Aragalaya",
        si: "ආර්ථික අර්බුදය සහ අරගලය",
        ta: "பொருளாதார நெருக்கடி & போராட்டம்",
      },
      desc: {
        en: "Economy collapses. Massive 'Aragalaya' uprising forces President to flee. Call for System Change.",
        si: "ආර්ථිකය කඩා වැටේ. ජනතා අරගලය හමුවේ ජනාධිපති පලා යයි. 'ක්‍රමයේ වෙනසක්' ඉල්ලා සිටී.",
        ta: "பொருளாதாரம் வீழ்ச்சி. மக்கள் போராட்டத்தால் ஜனாதிபதி தப்பியோட்டம். 'கட்டமைப்பு மாற்றம்' கோரிக்கை.",
      },
      type: "uprising",
      icon: "✊",
    },
  ];

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
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="py-12">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[2px] text-gold-text opacity-90">
              Sri Lankan History
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Timeline of <span className="text-gold-text">Turning Points</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              From Independence to the Aragalaya: The events that defined us and
              shaped our political landscape.
            </p>
          </div>

          {/* Navigation Content */}
          <div className="relative">
            {/* Nav Buttons */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-30 hidden lg:block">
              <button
                onClick={() => scroll("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-2xl backdrop-blur-md transition-all hover:bg-foreground hover:text-background shadow-lg"
                aria-label="Scroll Left"
              >
                ‹
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-30 hidden lg:block">
              <button
                onClick={() => scroll("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-2xl backdrop-blur-md transition-all hover:bg-foreground hover:text-background shadow-lg"
                aria-label="Scroll Right"
              >
                ›
              </button>
            </div>

            {/* Timeline Scroll Area */}
            <div
              ref={scrollRef}
              className="relative w-full overflow-x-auto py-12 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {/* Horizontal Line through the Center */}
              <div className="absolute top-[104px] left-0 h-[3px] w-[3000px] bg-foreground/5 z-0" />

              <div className="flex gap-12 min-w-max px-12">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="relative z-10 w-[360px] group pointer-events-none flex flex-col items-center"
                  >
                    {/* Timeline Node (On the Line) */}
                    <div className="relative z-10 mb-8 pointer-events-auto transition-transform duration-300 group-hover:scale-110">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-foreground/5 shadow-xl text-3xl">
                        {event.icon}
                      </div>
                    </div>

                    {/* Card (Below the Line) */}
                    <div className="pointer-events-auto w-full">
                      <div
                        className={`theme-card relative h-full rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent ${getCardBorder(
                          event.type
                        )}`}
                      >
                        {/* Year Badge at Top of Card */}
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-3xl font-black text-foreground tracking-tight">
                            {event.year}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getBadgeColor(
                              event.type
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>

                        <h3 className="mb-4 text-xl font-bold text-foreground leading-tight group-hover:text-gold-text transition-colors">
                          {event.title[locale] || event.title.en}
                        </h3>

                        <p className="text-base text-foreground/70 leading-relaxed font-medium">
                          {event.desc[locale] || event.desc.en}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
