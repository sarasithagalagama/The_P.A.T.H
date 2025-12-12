"use client";

import { useLocale } from "next-intl";
import { useRef, useState } from "react";

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

  const getTypeStyle = (type) => {
    switch (type) {
      case "conflict":
        return "from-red-500/20 to-orange-500/20 border-red-500/30 text-red-500";
      case "economical":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-500";
      case "uprising":
        return "from-yellow-500/20 to-orange-500/20 border-yellow-500/30 text-yellow-500";
      default:
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-500";
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

  return (
    <div className="min-h-screen py-16 text-foreground">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl mb-4">
            Timeline of <span className="text-[#FDB913]">Turning Points</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From Independence to the Aragalaya: The events that defined us.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto pb-16 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Main Timeline Line */}
          <div className="absolute top-[88px] left-0 h-[2px] w-[2200px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          <div className="flex gap-8 min-w-max px-8 pt-10">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative z-10 w-[320px] group pointer-events-none"
              >
                {/* Year Bubble */}
                <div className="flex flex-col items-center mb-8 relative pointer-events-auto">
                  <div
                    className={`h-16 w-16 rounded-full bg-background border-4 flex items-center justify-center text-2xl shadow-lg z-10 transition-transform duration-300 group-hover:scale-110 ${
                      event.type === "conflict"
                        ? "border-red-500/50"
                        : event.type === "economical"
                        ? "border-green-500/50"
                        : "border-[#FDB913]/50"
                    }`}
                  >
                    {event.icon}
                  </div>
                  {/* Vertical Connector */}
                  <div className="absolute top-16 bottom-[-20px] w-[2px] bg-white/10 group-hover:bg-[#FDB913]/50 transition-colors" />
                </div>

                {/* Content Card */}
                <div className="relative mt-4 pointer-events-auto">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-5xl font-black text-white/[0.03] pointer-events-none select-none">
                    {event.year}
                  </div>

                  <div
                    className={`h-full rounded-[24px] border bg-gradient-to-br backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${getTypeStyle(
                      event.type
                    )}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-70 border border-current px-2 py-0.5 rounded-full">
                        {event.year}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                        {event.type}
                      </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-[#FDB913] transition-colors">
                      {event.title[locale] || event.title.en}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {event.desc[locale] || event.desc.en}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
