export const questions = [
  // ECONOMIC AXIS (-10 Left to 10 Right)
  {
    id: 1,
    category: "economic",
    text: {
      en: "The government should tax the rich more to provide for the poor.",
      si: "දුප්පතුන්ට සහාය වීම සඳහා රජය ධනවතුන්ගෙන් වැඩි බදු අය කළ යුතුය.",
      ta: "ஏழைகளுக்கு உதவ அரசாங்கம் பணக்காரர்களிடம் அதிக வரி வசூலிக்க வேண்டும்.",
    },
    weight: -1, // Left
  },
  {
    id: 2,
    category: "economic",
    text: {
      en: "Basic industries like electricity and water should be controlled by the state.",
      si: "විදුලිය සහ ජලය වැනි මූලික කර්මාන්ත රජය විසින් පාලනය කළ යුතුය.",
      ta: "மின்சாரம் மற்றும் நீர் போன்ற அடிப்படை தொழில்கள் அரசால் கட்டுப்படுத்தப்பட வேண்டும்.",
    },
    weight: -1, // Left
  },
  {
    id: 3,
    category: "economic",
    text: {
      en: "The free market is the best way to distribute goods and services.",
      si: "භාණ්ඩ හා සේවා බෙදා හැරීමට හොඳම ක්‍රමය නිදහස් වෙළඳපොලයි.",
      ta: "பொருட்கள் மற்றும் சேவைகளை விநியோகிக்க திறந்த சந்தையே சிறந்த வழியாகும்.",
    },
    weight: 1, // Right
  },
  {
    id: 4,
    category: "economic",
    text: {
      en: "International trade is beneficial and should be encouraged.",
      si: "ජාත්‍යන්තර වෙළඳාම වාසිදායක වන අතර එය දිරිමත් කළ යුතුය.",
      ta: "சர்வதேச வர்த்தகம் நன்மை பயக்கும் மற்றும் ஊக்குவிக்கப்பட வேண்டும்.",
    },
    weight: 1, // Right
  },
  {
    id: 5,
    category: "economic",
    text: {
      en: "From each according to his ability, to each according to his need.",
      si: "සෑම කෙනෙකුම තම හැකියාව අනුව දායක විය යුතු අතර, අවශ්‍යතාවය අනුව ප්‍රතිලාභ ලැබිය යුතුය.",
      ta: "ஒவ்வொருவரிடமிருந்தும் அவரது திறமைக்கு ஏற்ப, ஒவ்வொருவருக்கும் அவரது தேவைக்கு ஏற்ப.",
    },
    weight: -1, // Left
  },
  {
    id: 6,
    category: "economic",
    text: {
      en: "It is regrettable that many personal fortunes are made by people who simply manipulate money and contribute nothing to their society.",
      si: "මුදල් හැසිරවීමෙන් පමණක් ධනවත් වන මිනිසුන් සමාජයට කිසිවක් දායක නොකිරීම කණගාටුදායකය.",
      ta: "பணத்தை கையாளுவதன் மூலம் மட்டுமே செல்வம் ஈட்டும் மக்கள் சமூகத்திற்கு எதுவும் பங்களிக்காதது வருந்தத்தக்கது.",
    },
    weight: -1, // Left
  },
  {
    id: 7,
    category: "economic",
    text: {
      en: "Protectionism is sometimes necessary in trade.",
      si: "වෙළඳාමේදී දේශීය කර්මාන්ත ආරක්ෂා කිරීම සමහර විට අත්‍යවශ්‍ය වේ.",
      ta: "வர்த்தகத்தில் பாதுகாப்புவாதம் சில நேரங்களில் அவசியமானது.",
    },
    weight: -1, // Left (Nationalist Econ)
  },
  {
    id: 8,
    category: "economic",
    text: {
      en: "The only social responsibility of a company should be to deliver a profit to its shareholders.",
      si: "සමාගමක එකම සමාජ වගකීම විය යුත්තේ කොටස් හිමියන්ට ලාභ ලබා දීමයි.",
      ta: "ஒரு நிறுவனத்தின் ஒரே சமூகப் பொறுப்பு அதன் பங்குதாரர்களுக்கு லாபம் ஈட்டுவதாகும்.",
    },
    weight: 1, // Right
  },
  {
    id: 9,
    category: "economic",
    text: {
      en: "Those with the ability to pay should have access to higher standards of medical care.",
      si: "ගෙවීමට හැකි අයට උසස් මට්ටමේ වෛද්‍ය ප්‍රතිකාර ලබා ගැනීමට අවස්ථාව තිබිය යුතුය.",
      ta: "பணம் செலுத்த முடிந்தவர்களுக்கு உயர்தர மருத்துவ வசதிகள் கிடைக்க வேண்டும்.",
    },
    weight: 1, // Right
  },
  {
    id: 10,
    category: "economic",
    text: {
      en: "Governments should penalise businesses that mislead the public.",
      si: "මහජනතාව නොමඟ යවන ව්‍යාපාරවලට රජය දඬුවම් කළ යුතුය.",
      ta: "மக்களை தவறாக வழிநடத்தும் வணிகங்களை அரசாங்கம் தண்டிக்க வேண்டும்.",
    },
    weight: -1, // Intervention
  },

  // SOCIAL AXIS (-10 Libertarian to 10 Authoritarian)
  {
    id: 11,
    category: "social",
    text: {
      en: "Abortion, when the woman's life is not threatened, should always be illegal.",
      si: "කාන්තාවගේ ජීවිතයට තර්ජනයක් නොමැති විට ගබ්සා කිරීම සැමවිටම නීති විරෝධී විය යුතුය.",
      ta: "பெண்ணின் உயிருக்கு அச்சுறுத்தல் இல்லாத போது கருக்கலைப்பு சட்டவிரோதமாக்கப்பட வேண்டும்.",
    },
    weight: 1, // Authoritarian
  },
  {
    id: 12,
    category: "social",
    text: {
      en: "All authority should be questioned.",
      si: "සියලු අධිකාරීන් ප්‍රශ්න කළ යුතුය.",
      ta: "அனைத்து அதிகாரங்களும் கேள்விக்குள்ளாக்கப்பட வேண்டும்.",
    },
    weight: -1, // Libertarian
  },
  {
    id: 13,
    category: "social",
    text: {
      en: "An eye for an eye and a tooth for a tooth.",
      si: "ඇසට ඇසක්, දතට දතක්.",
      ta: "கண்ணுக்கு கண், பல்லுக்கு பல்.",
    },
    weight: 1, // Authoritarian
  },
  {
    id: 14,
    category: "social",
    text: {
      en: "Taxpayers should not be expected to prop up any theatres or museums that cannot survive on a commercial basis.",
      si: "වාණිජමය වශයෙන් පැවතිය නොහැකි සිනමාහල් හෝ කෞතුකාගාර නඩත්තු කිරීමට බදු ගෙවන්නන්ගෙන් බලාපොරොත්තු නොවිය යුතුය.",
      ta: "வணிக ரீதியாக இயங்க முடியாத திரையரங்குகள் அல்லது அருங்காட்சியகங்களை ஆதரிக்க வரி செலுத்துபவர்கள் எதிர்பார்க்கப்படக்கூடாது.",
    },
    weight: -1, // Libertarian (Individualism) - Wait, usually Right/Lib
  },
  {
    id: 15,
    category: "social",
    text: {
      en: "Schools should not make classroom attendance compulsory.",
      si: "පාසල් පැමිණීම අනිවාර්ය නොකළ යුතුය.",
      ta: "பள்ளி வருகையை கட்டாயமாக்கக் கூடாது.",
    },
    weight: -1, // Libertarian
  },
  {
    id: 16,
    category: "social",
    text: {
      en: "All people have their rights, but it is better for all of us that different sorts of people should keep to their own kind.",
      si: "සෑම කෙනෙකුටම අයිතිවාසිකම් ඇත, නමුත් විවිධ වර්ගයේ අය වෙන්ව සිටීම වඩා හොඳය.",
      ta: "அனைவருக்கும் உரிமைகள் உண்டு, ஆனால் வெவ்வேறு வகையான மக்கள் தனித்தனியாக இருப்பதே நல்லது.",
    },
    weight: 1, // Authoritarian
  },
  {
    id: 17,
    category: "social",
    text: {
      en: "Good parents sometimes have to spank their children.",
      si: "හොඳ දෙමාපියන් සමහර විට දරුවන්ට දඬුවම් කළ යුතුය.",
      ta: "நல்ல பெற்றோர்கள் சில சமயங்களில் குழந்தைகளை அடிக்க வேண்டும்.",
    },
    weight: 1, // Authoritarian
  },
  {
    id: 18,
    category: "social",
    text: {
      en: "It is natural for children to keep some secrets from their parents.",
      si: "දරුවන් දෙමාපියන්ගෙන් රහස් තබා ගැනීම ස්වභාවිකය.",
      ta: "குழந்தைகள் பெற்றோரிடம் சில ரகசியங்களை வைத்திருப்பது இயல்பானது.",
    },
    weight: -1, // Libertarian
  },
  {
    id: 19,
    category: "social",
    text: {
      en: "Possessing marijuana for personal use should not be a criminal offence.",
      si: "පුද්ගලික පරිහරණය සඳහා ගංජා ළඟ තබා ගැනීම අපරාධයක් නොවිය යුතුය.",
      ta: "தனிப்பட்ட பயன்பாட்டிற்காக கஞ்சா வைத்திருப்பது குற்றமாக கருதப்படக்கூடாது.",
    },
    weight: -1, // Libertarian
  },
  {
    id: 20,
    category: "social",
    text: {
      en: "The prime function of schooling should be to equip the future generation to find jobs.",
      si: "පාසල් අධ්‍යාපනයේ මූලික අරමුණ අනාගත පරපුරට රැකියා සොයා දීම විය යුතුය.",
      ta: "பள்ளி கல்வியின் முதன்மை நோக்கம் எதிர்கால சந்ததியினரை வேலை வாய்ப்புகளுக்கு தயார்படுத்துவதாகும்.",
    },
    weight: 1, // Authoritarian (Conformity)
  },
];
