"use client";

import { useLocale } from "next-intl";

export default function ElectionsPage() {
  const locale = useLocale();

  const sections = [
    {
      id: "presidential",
      title: {
        en: "Presidential Election (The 50% Rule)",
        si: "ජනාධිපතිවරණය (50% නීතිය)",
        ta: "ஜனாதிபதித் தேர்தல் (50% விதி)",
      },
      concept: {
        en: "It’s not just about who gets the most votes; it’s about crossing the finish line.",
        si: "වැඩිම ඡන්ද ලබා ගැනීම පමණක් ප්‍රමාණවත් නොවේ; නියමිත ඉලක්කය පසු කළ යුතුය.",
        ta: "அதிக வாக்குகளைப் பெறுவது மட்டுமல்ல; எல்லைக்கோட்டைக் கடப்பதே முக்கியம்.",
      },
      body: {
        en: "To win, a candidate must get 50% + 1 of the total valid votes. If no one reaches 50% in the first count, the 2nd and 3rd preferences on your ballot paper are counted to decide the winner.",
        si: "ජනාධිපතිවරයෙකු තේරී පත්වීමට වලංගු ඡන්ද සංඛ්‍යාවෙන් 50% ක් සහ තවත් එක් ඡන්දයක් (50% + 1) ලබා ගත යුතුය. කිසිදු අපේක්ෂකයෙකු 50% ඉක්මවා නොමැති නම්, ඡන්ද පත්‍රිකාවේ සලකුණු කළ දෙවන සහ තෙවන මනාප ගණන් කර ජයග්‍රාහකයා තීරණය කරනු ලැබේ.",
        ta: "வெற்றி பெறுவதற்கு ஒரு வேட்பாளர் மொத்த செல்லுபடியாகும் வாக்குகளில் 50% + 1 வாக்குகளைப் பெற வேண்டும். யாரும் 50% ஐப் பெறவில்லை எனில், வெற்றியாளரைத் தீர்மானிக்க உங்கள் வாக்குச்சீட்டில் உள்ள 2வது மற்றும் 3வது விருப்பத் தேர்வுகள் கணக்கிடப்படும்.",
      },
      tip: {
        label: { en: "Tip", si: "වැදගත්", ta: "குறிப்பு" },
        text: {
          en: "This is why you can mark '1', '2', and '3' on your ballot instead of just 'X'.",
          si: "ඔබ ඡන්දය සලකුණු කිරීමේදී 'X' ලකුණ වෙනුවට 1, 2, 3 ලෙස අංක භාවිතා කළ හැක්කේ එබැවිනි.",
          ta: "இதனால்தான் நீங்கள் 'X' இற்குப் பதிலாக 1, 2, 3 என இலக்கமிட்டு வாக்களிக்க முடியும்.",
        },
      },
      icon: "🗳️",
      color: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      id: "parliamentary",
      title: {
        en: 'Parliamentary Election (The "Manaapa" System)',
        si: "මහ මැතිවරණය (මනාප ක්‍රමය)",
        ta: "பாராளுமன்றத் தேர்தல் (விருப்பு வாக்கு முறை)",
      },
      concept: {
        en: "You vote for the Party first, and the Candidate second.",
        si: "ඔබ පළමුව පක්ෂයටත්, දෙවනුව අපේක්ෂකයාටත් ඡන්දය ලබා දේ.",
        ta: "நீங்கள் முதலில் கட்சிக்கும், இரண்டாவதாக வேட்பாளருக்கும் வாக்களிக்கிறீர்கள்.",
      },
      body: {
        en: "Sri Lanka uses Proportional Representation.",
        si: "ශ්‍රී ලංකාවේ භාවිතා වන්නේ සමානුපාතික නියෝජන ක්‍රමයයි.",
        ta: "இலங்கை விகிதாசாரப் பிரதிநிதித்துவ முறையைப் பயன்படுத்துகிறது.",
      },
      points: [
        {
          label: {
            en: "Vote for the Party",
            si: "පක්ෂයට ඡන්දය",
            ta: "கட்சிக்கு வாக்களித்தல்",
          },
          text: {
            en: "This decides how many seats the party gets in your district.",
            si: "ඔබේ දිස්ත්‍රික්කයෙන් එම පක්ෂයට හිමිවන ආසන ගණන තීරණය කරන්නේ මෙයයි.",
            ta: "இது உங்கள் மாவட்டத்தில் அந்தக் கட்சிக்கு எத்தனை ஆசனங்கள் கிடைக்கும் என்பதைத் தீர்மானிக்கிறது.",
          },
        },
        {
          label: {
            en: "Pick 3 Candidates",
            si: "මනාප 3ක්",
            ta: "3 வேட்பாளர்கள்",
          },
          text: {
            en: 'Your 3 "Manaapa" votes decide which specific people from that party get those seats.',
            si: "පක්ෂයට ලැබෙන ආසන සඳහා තේරී පත්වන පුද්ගලයින් තීරණය කරන්නේ ඔබේ මනාපයෙනි.",
            ta: 'கட்சிக்குக் கிடைக்கும் ஆசனங்களுக்கு யார் தெரிவு செய்யப்படுவார்கள் என்பதை உங்கள் 3 "விருப்பு வாக்குகள்" (Manaapa) தீர்மானிக்கின்றன.',
          },
        },
      ],
      reality: {
        label: { en: "Reality Check", si: "ඇත්ත තත්ත්වය", ta: "யதார்த்தம்" },
        text: {
          en: "Even if a candidate gets 100,000 votes, they won't get a seat if their party doesn't get enough votes in that district.",
          si: "අපේක්ෂකයෙකුට මනාප ලක්ෂයක් ලැබුණත්, ඔහුගේ පක්ෂයට ප්‍රමාණවත් ඡන්ද සංඛ්‍යාවක් නොලැබුණහොත් ඔහුට මන්ත්‍රී ධුරයක් නොලැබේ.",
          ta: "ஒரு வேட்பாளர் 100,000 வாக்குகளைப் பெற்றாலும், அந்த மாவட்டத்தில் அவரது கட்சிக்கு போதுமான வாக்குகள் கிடைக்காவிட்டால் அவருக்கு ஆசனம் கிடைக்காது.",
        },
      },
      icon: "📊",
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      id: "nationallist",
      title: {
        en: "The National List (Appointed MPs)",
        si: "ජාතික ලැයිස්තුව",
        ta: "தேசியப் பட்டியல்",
      },
      concept: {
        en: 'The "Bonus" seats.',
        si: "අමතර මන්ත්‍රී ධුර.",
        ta: '"போனஸ்" ஆசனங்கள்.',
      },
      body: {
        en: "These are 29 extra seats divided among parties based on their total national vote share.",
        si: "මෙය පක්ෂ ලබාගත් මුළු දිවයිනේම ඡන්ද ප්‍රතිශතය අනුව බෙදී යන අමතර ආසන 29කි.",
        ta: "இது கட்சிகள் பெற்ற தேசிய ரீதியிலான மொத்த வாக்குகளின் அடிப்படையில் பகிர்ந்தளிக்கப்படும் 29 மேலதிக ஆசனங்களாகும்.",
      },
      comparison: {
        theory: {
          label: { en: "The Theory", si: "න්‍යාය", ta: "நோக்கம்" },
          text: {
            en: "It was designed to bring professionals (doctors, lawyers, scholars) into Parliament without forcing them to campaign in elections.",
            si: "මැතිවරණ ව්‍යාපාරවල නිරත විය නොහැකි බුද්ධිමතුන් සහ වෘත්තිකයන් පාර්ලිමේන්තුවට ගෙන ඒම.",
            ta: "தேர்தலில் போட்டியிட விரும்பாத புத்திஜீவிகள் மற்றும் தொழில் வல்லுநர்களைப் பாராளுமன்றத்திற்குக் கொண்டு வருதல்.",
          },
        },
        practice: {
          label: {
            en: "The Practice",
            si: "ප්‍රායෝගික තත්ත්වය",
            ta: "நடைமுறை",
          },
          text: {
            en: "Often used to bring back defeated politicians who lost their electorate battles.",
            si: "බොහෝ විට ඡන්දයෙන් පරාජය වූ දේශපාලනඥයින් නැවත පාර්ලිමේන්තුවට ගෙන ඒමට මෙය භාවිතා කරයි.",
            ta: "பெரும்பாலும் தேர்தலில் தோல்வியடைந்த அரசியல்வாதிகளை மீண்டும் பாராளுமன்றத்திற்குள் கொண்டுவர இது பயன்படுத்தப்படுகிறது.",
          },
        },
      },
      icon: "📝",
      color: "from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/30",
    },
  ];

  return (
    <div className="min-h-screen py-16 text-foreground">
      <div className="container mx-auto px-6 max-w-[1000px]">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl mb-4">
            How Your <span className="text-[#FDB913]">Vote Counts</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Master the system. Understand the 50% rule, the Manaapa system, and
            the National List.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`rounded-[32px] border ${section.borderColor} bg-gradient-to-br ${section.color} p-8 md:p-10`}
            >
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-black/10 backdrop-blur border border-white/10 flex items-center justify-center text-3xl">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {section.title[locale] || section.title.en}
                  </h2>
                  <p className="text-lg font-medium text-foreground/80 italic">
                    "{section.concept[locale] || section.concept.en}"
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p>{section.body[locale] || section.body.en}</p>

                {/* Presidential Tip */}
                {section.tip && (
                  <div className="bg-[#FDB913]/10 border border-[#FDB913]/30 rounded-xl p-6">
                    <strong className="block text-[#FDB913] mb-2 uppercase tracking-wide text-sm font-bold">
                      💡 {section.tip.label[locale] || section.tip.label.en}
                    </strong>
                    {section.tip.text[locale] || section.tip.text.en}
                  </div>
                )}

                {/* Parliamentary Points */}
                {section.points && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="bg-black/20 rounded-xl p-5 border border-white/5"
                      >
                        <h3 className="font-bold text-foreground mb-2 text-base">
                          {point.label[locale] || point.label.en}
                        </h3>
                        <p className="text-sm text-foreground/70">
                          {point.text[locale] || point.text.en}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reality Check */}
                {section.reality && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <strong className="block text-red-400 mb-2 uppercase tracking-wide text-sm font-bold">
                      ⚠️{" "}
                      {section.reality.label[locale] ||
                        section.reality.label.en}
                    </strong>
                    {section.reality.text[locale] || section.reality.text.en}
                  </div>
                )}

                {/* National List Comparison */}
                {section.comparison && (
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                      <h3 className="font-bold text-green-400 mb-2 uppercase tracking-wide text-sm">
                        😇{" "}
                        {section.comparison.theory.label[locale] ||
                          section.comparison.theory.label.en}
                      </h3>
                      <p className="text-sm">
                        {section.comparison.theory.text[locale] ||
                          section.comparison.theory.text.en}
                      </p>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                      <h3 className="font-bold text-orange-400 mb-2 uppercase tracking-wide text-sm">
                        😈{" "}
                        {section.comparison.practice.label[locale] ||
                          section.comparison.practice.label.en}
                      </h3>
                      <p className="text-sm">
                        {section.comparison.practice.text[locale] ||
                          section.comparison.practice.text.en}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
