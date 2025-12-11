/**
 * Political Compass Questions for Sri Lanka
 * Each question has:
 * - id: unique identifier
 * - axis: 'economic' or 'social'
 * - value: score when user agrees (-2 to +2)
 * - text: question text in all three languages
 */

export const questions = [
  // ECONOMIC AXIS QUESTIONS (1-10)
  {
    id: 1,
    axis: "economic",
    value: 2, // Right
    text: {
      en: "Loss-making SOEs like SriLankan Airlines must be fully privatized.",
      si: "ශ්‍රී ලංකන් ගුවන් සේවය වැනි පාඩු ලබන රාජ්‍ය ආයතන සම්පූර්ණයෙන්ම පුද්ගලීකරණය කළ යුතුය.",
      ta: "இலங்கை விமானச் சேவை போன்ற நஷ்டத்தில் இயங்கும் அரச நிறுவனங்கள் முழுமையாக தனியார்மயமாக்கப்பட வேண்டும்.",
    },
  },
  {
    id: 2,
    axis: "economic",
    value: 2, // Right
    text: {
      en: "Government should reduce taxes on high earners to stimulate investment.",
      si: "ආයෝජන උත්තේජනය කිරීම සඳහා රජය ඉහළ ආදායම්ලාභීන්ගේ බදු අඩු කළ යුතුය.",
      ta: "முதலீட்டை ஊக்குவிக்க அரசாங்கம் அதிக வருமானம் ஈட்டுபவர்களின் வரிகளை குறைக்க வேண்டும்.",
    },
  },
  {
    id: 3,
    axis: "economic",
    value: -2, // Left
    text: {
      en: "Food subsidies should be maintained even if it increases the deficit.",
      si: "අර්බුදය වැඩි වුවද ආහාර සහනාධාර පවත්වා ගත යුතුය.",
      ta: "பற்றாக்குறை அதிகரித்தாலும் உணவு மானியங்கள் தொடர வேண்டும்.",
    },
  },
  {
    id: 4,
    axis: "economic",
    value: -2, // Left
    text: {
      en: "The state should guarantee jobs for all university graduates.",
      si: "සියලුම විශ්ව විද්‍යාල උපාධිධාරීන් සඳහා රජය රැකියා සහතික කළ යුතුය.",
      ta: "அனைத்து பல்கலைக்கழக பட்டதாரிகளுக்கும் அரசு வேலைவாய்ப்பை உறுதி செய்ய வேண்டும்.",
    },
  },
  {
    id: 5,
    axis: "economic",
    value: 2, // Right
    text: {
      en: "Foreign ownership of strategic land (e.g., Port City) is beneficial.",
      si: "වරාය නගරය වැනි උපායමාර්ගික ඉඩම් විදේශීය අයිතිය ප්‍රයෝජනවත් වේ.",
      ta: "துறைமுக நகரம் போன்ற மூலோபாய நிலங்களின் வெளிநாட்டு உரிமை நன்மை பயக்கும்.",
    },
  },
  {
    id: 6,
    axis: "economic",
    value: -2, // Left
    text: {
      en: "Wealth tax should be significantly increased on the richest 1%.",
      si: "ධනවත්ම 1% ඉහළ ධන බද්ද සැලකිය යුතු ලෙස වැඩි කළ යුතුය.",
      ta: "மிகவும் பணக்கார 1% மீதான செல்வ வரி கணிசமாக அதிகரிக்கப்பட வேண்டும்.",
    },
  },
  {
    id: 7,
    axis: "economic",
    value: -2, // Left
    text: {
      en: "The army running agriculture projects is acceptable for food security.",
      si: "ආහාර ආරක්ෂාව සඳහා හමුදාව කෘෂිකාර්මික ව්‍යාපෘති පවත්වාගෙන යාම පිළිගත හැකිය.",
      ta: "உணவுப் பாதுகாப்பிற்காக இராணுவம் விவசாய திட்டங்களை நடத்துவது ஏற்றுக்கொள்ளத்தக்கது.",
    },
  },
  {
    id: 8,
    axis: "economic",
    value: 2, // Right
    text: {
      en: "Central Bank independence is more important than political control.",
      si: "මහ බැංකු ස්වාධීනත්වය දේශපාලන පාලනයට වඩා වැදගත් වේ.",
      ta: "மத்திய வங்கி சுதந்திரம் அரசியல் கட்டுப்பாட்டை விட முக்கியமானது.",
    },
  },
  {
    id: 9,
    axis: "economic",
    value: -2, // Left
    text: {
      en: "Import protectionism is necessary to save local industries.",
      si: "දේශීය කර්මාන්ත බේරා ගැනීම සඳහා ආනයන ආරක්ෂාවාදය අවශ්‍ය වේ.",
      ta: "உள்ளூர் தொழில்களை காப்பாற்ற இறக்குமதி பாதுகாப்புவாதம் அவசியம்.",
    },
  },
  {
    id: 10,
    axis: "economic",
    value: -2, // Left
    text: {
      en: "Healthcare should remain 100% free and state-funded.",
      si: "සෞඛ්‍ය සේවා 100% නොමිලේ සහ රාජ්‍ය අරමුදල් සහිතව පැවතිය යුතුය.",
      ta: "சுகாதாரம் 100% இலவசமாகவும் அரசு நிதியுதவியுடனும் இருக்க வேண்டும்.",
    },
  },

  // SOCIAL AXIS QUESTIONS (11-20)
  {
    id: 11,
    axis: "social",
    value: -2, // Liberal
    text: {
      en: "The Executive Presidency should be abolished.",
      si: "විධායක ජනාධිපති ක්‍රමය අහෝසි කළ යුතුය.",
      ta: "நிறைவேற்று அதிபர் முறை ஒழிக்கப்பட வேண்டும்.",
    },
  },
  {
    id: 12,
    axis: "social",
    value: -2, // Liberal
    text: {
      en: "Provincial Councils should have land and police powers (13A).",
      si: "පළාත් සභාවලට ඉඩම් සහ පොලිස් බලතල තිබිය යුතුය (13A).",
      ta: "மாகாண சபைகளுக்கு நில மற்றும் காவல்துறை அதிகாரங்கள் இருக்க வேண்டும் (13A).",
    },
  },
  {
    id: 13,
    axis: "social",
    value: -2, // Liberal
    text: {
      en: "Mass protests (Aragalaya) are a legitimate way to force change.",
      si: "මහජන විරෝධතා (අරගලය) වෙනසක් බලකිරීමට නීත්‍යානුකූල මාර්ගයකි.",
      ta: "வெகுஜன போராட்டங்கள் (அரகலய) மாற்றத்தை கட்டாயப்படுத்த சட்டபூர்வமான வழி.",
    },
  },
  {
    id: 14,
    axis: "social",
    value: 2, // Authoritarian
    text: {
      en: "National security decisions must rest solely with the central government.",
      si: "ජාතික ආරක්ෂක තීරණ මධ්‍යම රජය සතු විය යුතුය.",
      ta: "தேசிய பாதுகாப்பு முடிவுகள் மத்திய அரசாங்கத்திடம் மட்டுமே இருக்க வேண்டும்.",
    },
  },
  {
    id: 15,
    axis: "social",
    value: -2, // Liberal
    text: {
      en: "The military budget should be reduced for education funding.",
      si: "අධ්‍යාපන අරමුදල් සඳහා හමුදා අයවැය අඩු කළ යුතුය.",
      ta: "கல்வி நிதிக்காக இராணுவ வரவு செலவு திட்டம் குறைக்கப்பட வேண்டும்.",
    },
  },
  {
    id: 16,
    axis: "social",
    value: 2, // Authoritarian
    text: {
      en: "Access to social media should be restricted during crises.",
      si: "අර්බුදකාරී කාලවලදී සමාජ මාධ්‍ය ප්‍රවේශය සීමා කළ යුතුය.",
      ta: "நெருக்கடி காலங்களில் சமூக ஊடக அணுகல் கட்டுப்படுத்தப்பட வேண்டும்.",
    },
  },
  {
    id: 17,
    axis: "social",
    value: 2, // Authoritarian
    text: {
      en: "Judges should be subject to political oversight.",
      si: "විනිසුරුවන් දේශපාලන අධීක්ෂණයට යටත් විය යුතුය.",
      ta: "நீதிபதிகள் அரசியல் மேற்பார்வைக்கு உட்பட்டிருக்க வேண்டும்.",
    },
  },
  {
    id: 18,
    axis: "social",
    value: 2, // Authoritarian
    text: {
      en: "LGBTIQ rights are a western concept and not for Sri Lanka.",
      si: "LGBTIQ අයිතිවාසිකම් බටහිර සංකල්පයක් වන අතර ශ්‍රී ලංකාවට නොවේ.",
      ta: "LGBTIQ உரிமைகள் மேற்கத்திய கருத்து மற்றும் இலங்கைக்கு அல்ல.",
    },
  },
  {
    id: 19,
    axis: "social",
    value: 2, // Authoritarian
    text: {
      en: "A strong dictator is better than a weak democracy.",
      si: "දුර්වල ප්‍රජාතන්ත්‍රවාදයකට වඩා ශක්තිමත් ඒකාධිපතියෙක් හොඳය.",
      ta: "பலவீனமான ஜனநாயகத்தை விட வலுவான சர்வாதிகாரி சிறந்தது.",
    },
  },
  {
    id: 20,
    axis: "social",
    value: 2, // Authoritarian
    text: {
      en: "Religious clergy should have a say in state law-making.",
      si: "රාජ්‍ය නීති සම්පාදනයේදී ආගමික පූජකයන්ට අදහස් දැක්විය යුතුය.",
      ta: "மாநில சட்ட உருவாக்கத்தில் மத குருமார்களுக்கு கருத்து இருக்க வேண்டும்.",
    },
  },
];
