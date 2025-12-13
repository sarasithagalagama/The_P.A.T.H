/**
 * Politicians Data
 * Represents historical Sri Lankan leaders mapped to the Political Compass.
 *
 * Coordinates system:
 * - X Axis (Economic): -10 (Left/State) to +10 (Right/Market)
 * - Y Axis (Social): -10 (Libertarian) to +10 (Authoritarian)
 */
export const politicians = [
  // --- CURRENT & RECENT PRESIDENTS ---
  {
    id: "anura",
    name: {
      en: "Anura Kumara Dissanayake",
      si: "අනුර කුමාර දිසානායක",
      ta: "අநுර කුමාර දිසානායක",
    },
    x: -5.0,
    y: -4.0,
    party: "NPP",
    color: "#FF0000",
    image: "/images/politicians/Anura Kumara Dissanayake.png",
    reasoning: {
      en: {
        economic:
          "Advocates for a 'Production-Based Economy', reducing VAT/tax burdens on the poor, and stopping the sell-off of strategic national assets.",
        social:
          "Champions 'System Change' to dismantle elite privileges, establish rule of law, and abolish the Executive Presidency.",
      },
      si: {
        economic:
          "'නිෂ්පාදන ආර්ථිකයක්' ගොඩනැගීම, බදු බර අඩු කිරීම සහ ජාතික සම්පත් විකිණීම නැවැත්වීම.",
        social:
          "'ක්‍රමයේ වෙනසක්' (System Change) හරහා ප්‍රභූ පැලැන්තියේ වරප්‍රසාද අහෝසි කිරීම සහ විධායක ක්‍රමය අහෝසි කිරීම.",
      },
      ta: {
        economic:
          "உற்பத்தி சார்ந்த பொருளாதாரம் மற்றும் வறியவர்கள் மீதான வரிச் சுமைகளை குறைத்தல்.",
        social:
          "'கட்டமைப்பு மாற்றம்' மூலம் உயர்குல சிறப்புரிமைகளை ஒழித்தல் மற்றும் நிறைவேற்று அதிகாரத்தை நீக்குதல்.",
      },
    },
  },
  {
    id: "ranil",
    name: {
      en: "Ranil Wickremesinghe",
      si: "රනිල් වික්‍රමසිංහ",
      ta: "ரணில் விக்கிரமசிங்க",
    },
    x: 7.5,
    y: 6.0,
    party: "UNP",
    color: "#00A550",
    image: "/images/politicians/Ranil Wickremesinghe.png",
    reasoning: {
      en: {
        economic:
          "Strong advocate for free markets, privatization of SOEs, and strict adherence to IMF austerity measures to stabilize the economy.",
        social:
          "Utilized the Executive Presidency's full power to suppress the Aragalaya protests and postponed local elections.",
      },
      si: {
        economic:
          "නිදහස් වෙළඳපොල සහ රාජ්‍ය ආයතන පෞද්ගලීකරණය දැඩිව විශ්වාස කරයි; IMF කොන්දේසි ක්‍රියාත්මක කළේය.",
        social:
          "විධායක බලතල භාවිතා කරමින් අරගලය මර්දනය කිරීම සහ මැතිවරණ කල් දැමීම.",
      },
      ta: {
        economic:
          "திறந்த சந்தை மற்றும் தனியார்மயமாக்கலை ஆதரிப்பவர்; IMF நிபந்தனைகளை நடைமுறைப்படுத்தினார்.",
        social: "நிறைவேற்று அதிகாரத்தைப் பயன்படுத்தி போராட்டங்களை ஒடுக்கியமை.",
      },
    },
  },
  {
    id: "gota",
    name: {
      en: "Gotabaya Rajapaksa",
      si: "ගෝඨාභය රාජපක්ෂ",
      ta: "கோட்டாபய ராஜபக்ஷ",
    },
    x: -6.0,
    y: 8.5,
    party: "SLPP",
    color: "#800000",
    image: "/images/politicians/Gotabaya Rajapaksa.png",
    reasoning: {
      en: {
        economic:
          "Implemented import bans (Closed Economy style) and a disastrous chemical fertilizer ban that crashed agriculture.",
        social:
          "Highly authoritarian 'Technocratic' rule; militarized civilian administration and cracked down on dissent.",
      },
      si: {
        economic:
          "දේශීය කෘෂිකර්මය වෙනුවෙන් පොහොර තහනම සහ ආනයන සීමා පැනවීය (සංවෘත ආර්ථික ලක්ෂණ).",
        social:
          "හමුදා නිලධාරීන් සිවිල් පාලනයට යෙදවූ අධිකාරීවාදී පාලනයක් ගෙන ගියේය.",
      },
      ta: {
        economic:
          "இறக்குமதித் தடை மற்றும் இரசாயன உரத் தடை பொருளாதாரத்தை வீழ்த்தியது.",
        social:
          "இராணுவமயமாக்கப்பட்ட சிவில் நிர்வாகம் மற்றும் கடுமையான அடக்குமுறை.",
      },
    },
  },
  {
    id: "sajith",
    name: {
      en: "Sajith Premadasa",
      si: "සජිත් ප්‍රේමදාස",
      ta: "சஜித் பிரேமதாஸ",
    },
    x: 3.0,
    y: -2.0,
    party: "SJB",
    color: "#008000",
    image: "/images/politicians/Sajith Premadasa.png",
    reasoning: {
      en: {
        economic:
          "Supports open markets ('Social Market Economy') but insists on strong state welfare programs for the poor.",
        social:
          "Voted for the 21st Amendment to reduce presidential powers and generally supports power devolution (13A).",
      },
      si: {
        economic:
          "විවෘත ආර්ථිකය සමඟ දුප්පත්කම තුරන් කිරීමේ වැඩසටහන් (සමාජ වෙළඳපොළ ආර්ථිකය).",
        social:
          "ජනාධිපති බලතල අඩු කිරීමට සහ 13 වන සංශෝධනය ක්‍රියාත්මක කිරීමට සහය දැක්වීම.",
      },
      ta: {
        economic: "சமூக நலத்திட்டங்களுடன் கூடிய திறந்த சந்தை பொருளாதாரம்.",
        social:
          "அதிகாரப் பகிர்வு (13A) மற்றும் ஜனாதிபதி அதிகாரங்களைக் குறைப்பதை ஆதரித்தல்.",
      },
    },
  },
  {
    id: "maithri",
    name: {
      en: "Maithripala Sirisena",
      si: "මෛත්‍රීපාල සිරිසේන",
      ta: "மைத்திரிபால சிறிசேன",
    },
    x: -1.0,
    y: 1.0,
    party: "SLFP",
    color: "#0000FF",
    image: "/images/politicians/Maithripala Sirisena.png",
    reasoning: {
      en: {
        economic:
          "Followed a mixed economic policy, neither fully open nor fully closed, often leading to policy confusion.",
        social:
          "Voluntarily reduced his own powers via the 19th Amendment, restoring independent commissions.",
      },
      si: {
        economic: "මැද මාවතේ ආර්ථික ප්‍රතිපත්තියක් අනුගමනය කළේය.",
        social: "19 වන සංශෝධනය හරහා ස්වෙච්ඡාවෙන්ම ජනාධිපති බලතල අඩු කරගත්තේය.",
      },
      ta: {
        economic: "கலப்பு பொருளாதாரக் கொள்கையை பின்பற்றினார்.",
        social:
          "19வது திருத்தத்தின் மூலம் தனது அதிகாரங்களை குறைத்துக்கொண்டார்.",
      },
    },
  },
  {
    id: "mahinda",
    name: {
      en: "Mahinda Rajapaksa",
      si: "මහින්ද රාජපක්ෂ",
      ta: "மஹிந்த ராஜபக்ஷ",
    },
    x: -3.0,
    y: 7.5,
    party: "SLPP",
    color: "#800000",
    image: "/images/politicians/Mahinda Rajapaksa.png",
    reasoning: {
      en: {
        economic:
          "Statist approach: Heavy borrowing for state-owned infrastructure and bloated public sector jobs.",
        social:
          "Removed term limits (18th Amendment) and centralized power around the ruling family.",
      },
      si: {
        economic:
          "රාජ්‍ය අංශය පුළුල් කිරීම සහ ණය මත පදනම් වූ දැවැන්ත යටිතල පහසුකම් ව්‍යාපෘති.",
        social: "පවුල වටා බලය කේන්ද්‍රගත කිරීම සහ 18 වන සංශෝධනය.",
      },
      ta: {
        economic: "அரச துறை விரிவாக்கம் மற்றும் கடன் நிதியிலான உட்கட்டமைப்பு.",
        social:
          "அதிகாரத்தை ஒரு மையத்தில் குவித்தல் மற்றும் பதவி கால வரம்பை நீக்கியமை.",
      },
    },
  },

  // --- HISTORICAL LEADERS ---
  {
    id: "chandrika",
    name: {
      en: "Chandrika Bandaranaike",
      si: "චන්ද්‍රිකා බණ්ඩාරනායක",
      ta: "சந்திரிகா பண்டாரநாயக்க",
    },
    x: -2.5,
    y: 2.5,
    party: "SLFP",
    color: "#0000FF",
    image: "/images/politicians/Chandrika Bandaranaike Kumaratunga.png",
    reasoning: {
      en: {
        economic:
          "'Open Economy with a Human Face' – retained markets but halted harsh privatization.",
        social:
          "Proposed the 'Union of Regions' (Federalism) but governed with executive power during the war.",
      },
      si: {
        economic: "'මානුෂීය මුහුණුවරක් සහිත විවෘත ආර්ථිකය'.",
        social: "බලය බෙදීමේ 'පැකේජය' යෝජනා කළ අතරම විධායක බලතල දැරුවාය.",
      },
      ta: {
        economic: "'மனிதாபிமான முகத்துடன் கூடிய திறந்த பொருளாதாரம்'.",
        social: "அதிகாரப் பகிர்வுக்கான தீர்வினை முன்வைத்தார்.",
      },
    },
  },
  {
    id: "dbw",
    name: {
      en: "D.B. Wijetunga",
      si: "ඩී.බී. විජේතුංග",
      ta: "டி.பி. விஜேதுங்க",
    },
    x: 6.0,
    y: 4.0,
    party: "UNP",
    color: "#00A550",
    image: "/images/politicians/D.B. Wijetunga.png",
    reasoning: {
      en: {
        economic:
          "Continued Premadasa's open economy but with more fiscal discipline and less populism.",
        social:
          "A quieter, bureaucratic president who did not abuse power but held controversial majoritarian views.",
      },
      si: {
        economic: "විවෘත ආර්ථිකය ඉදිරියට ගෙන ගියේය.",
        social:
          "බලය අනිසි ලෙස භාවිතා නොකළ නමුත් මතභේදාත්මක ජාතිකවාදී අදහස් දැරීය.",
      },
      ta: {
        economic: "திறந்த பொருளாதாரக் கொள்கைகளைத் தொடர்ந்தார்.",
        social: "அதிகாரத்தை துஷ்பிரயோகம் செய்யாத அமைதியான ஆட்சியாளர்.",
      },
    },
  },
  {
    id: "premadasa",
    name: {
      en: "Ranasinghe Premadasa",
      si: "රණසිංහ ප්‍රේමදාස",
      ta: "ரணசிங்க பிரேமதாஸ",
    },
    x: 4.0,
    y: 9.0,
    party: "UNP",
    color: "#00A550",
    image: "/images/politicians/Ranasinghe Premadasa.png",
    reasoning: {
      en: {
        economic:
          "Unique mix: 200 Garment Factories (Capitalist) combined with massive free housing (Socialist).",
        social:
          "Extremely authoritarian; ruled with an iron fist during the JVP insurrection.",
      },
      si: {
        economic: "ඇඟලුම් කම්හල් (ධනවාදී) සහ ගම් උදාව (සමාජවාදී) මිශ්‍රණයක්.",
        social: "භීෂණ සමයේ අතිශය දැඩි මර්දනකාරී පාලනයක් ගෙන ගියේය.",
      },
      ta: {
        economic: "முதலாளித்துவ மற்றும் சோசலிசக் கொள்கைகளின் கலவை.",
        social: "கடுமையான சர்வாதிகாரப் போக்கைக் கொண்டிருந்தார்.",
      },
    },
  },
  {
    id: "jr",
    name: {
      en: "J.R. Jayewardene",
      si: "ජේ.ආර්. ජයවර්ධන",
      ta: "ஜே.ஆர். ஜெயவர்த்தன",
    },
    x: 8.5,
    y: 8.0,
    party: "UNP",
    color: "#00A550",
    image: "/images/politicians/J.R. Jayewardene.png",
    reasoning: {
      en: {
        economic:
          "The Father of the Open Economy (1977); slashed subsidies and welcomed foreign trade.",
        social:
          "Created the Executive Presidency and held a Referendum to cancel elections.",
      },
      si: {
        economic: "1977 විවෘත ආර්ථිකයේ නිර්මාතෘ.",
        social: "විධායක ජනාධිපති ක්‍රමය නිර්මාණය කිරීම සහ ඡන්දය අහෝසි කිරීම.",
      },
      ta: {
        economic: "1977 திறந்த பொருளாதாரத்தின் தந்தை.",
        social: "நிறைவேற்று அதிகாரத்தை உருவாக்கி தேர்தலை ரத்து செய்தார்.",
      },
    },
  },
  {
    id: "sirimavo",
    name: {
      en: "Sirimavo Bandaranaike",
      si: "සිරිමාවෝ බණ්ඩාරනායක",
      ta: "சிறிமாவோ பண்டாரநாயக்க",
    },
    x: -8.0,
    y: 2.0,
    party: "SLFP",
    color: "#0000FF",
    image: "/images/politicians/Sirimavo Bandaranaike.png",
    reasoning: {
      en: {
        economic:
          "Strictly Closed Economy; banned imports, nationalized lands, and promoted local industry.",
        social:
          "Severed ties with the British monarchy (Republic) but governed under emergency law for years.",
      },
      si: {
        economic: "දැඩි සංවෘත ආර්ථිකය; ආනයන තහනම සහ ඉඩම් ප්‍රතිසංස්කරණය.",
        social: "හදිසි නීතිය යටතේ දීර්ඝ කාලයක් පාලනය ගෙන ගියාය.",
      },
      ta: {
        economic: "கடுமையான மூடிய பொருளாதாரம் மற்றும் இறக்குமதித் தடை.",
        social: "அவசரகாலச் சட்டத்தின் கீழ் நீண்ட காலம் ஆட்சி செய்தார்.",
      },
    },
  },
  {
    id: "dahanayake",
    name: { en: "W. Dahanayake", si: "ඩබ්. දහනායක", ta: "டபிள்யூ. தகநாயக்க" },
    x: -2.0,
    y: 3.0,
    party: "Independent",
    color: "#808080",
    image: "/images/politicians/W. Dahanayake.png",
    reasoning: {
      en: {
        economic:
          "Populist measures; lowered food prices artificially to please the public.",
        social: "Unstable caretaker rule; dissolved parliament rapidly.",
      },
      si: {
        economic: "ජනප්‍රියවාදී තීරණ; බඩු මිල අඩු කළේය.",
        social: "අස්ථාවර භාරකාර පාලනය.",
      },
      ta: {
        economic: "மக்கள் விரும்பும் வகையில் உணவு விலைகளை குறைத்தார்.",
        social: "நிலையற்ற இடைக்கால ஆட்சி.",
      },
    },
  },
  {
    id: "swrd",
    name: {
      en: "S.W.R.D. Bandaranaike",
      si: "එස්.ඩබ්.ආර්.ඩී. බණ්ඩාරනායක",
      ta: "எஸ்.டபிள்யூ.ஆர்.டி. பண்டாரநாயக்க",
    },
    x: -4.0,
    y: 1.0,
    party: "SLFP",
    color: "#0000FF",
    image: "/images/politicians/S.W.R.D. Bandaranaike.png",
    reasoning: {
      en: {
        economic:
          "Socialist shift; nationalized the Bus service and Colombo Port.",
        social:
          "Enacted the 'Sinhala Only' Act, shifting power to the rural majority but alienating minorities.",
      },
      si: {
        economic: "බස් සහ වරාය ජනසතු කිරීම.",
        social: "'සිංහල පමණක්' පනත හරහා බහුතරවාදී බලය තහවුරු කිරීම.",
      },
      ta: {
        economic: "பேருந்து மற்றும் துறைமுக சேவைகளை தேசியமயமாக்கல்.",
        social:
          "'சிங்களம் மட்டும்' சட்டத்தின் மூலம் பெரும்பான்மைவாதத்தை நிலைநிறுத்தியமை.",
      },
    },
  },
  {
    id: "kotelawala",
    name: {
      en: "Sir John Kotelawala",
      si: "සර් ජෝන් කොතලාවල",
      ta: "சேர் ஜோன் கொத்தலாவல",
    },
    x: 6.0,
    y: 5.0,
    party: "UNP",
    color: "#00A550",
    image: "/images/politicians/Sir John Kotelawala.png",
    reasoning: {
      en: {
        economic:
          "Pro-Western capitalist; focused on hydroelectricity and trade.",
        social: "Strong-man ruler; aggressively suppressed the 1953 Hartal.",
      },
      si: {
        economic: "බටහිර හිතවාදී ධනවාදී ප්‍රතිපත්ති.",
        social: "1953 හර්තාලය දරුණු ලෙස මර්දනය කළේය.",
      },
      ta: {
        economic: "மேற்குலகச் சார்பு முதலாளித்துவம்.",
        social: "1953 ஹர்த்தாலை வன்முறையாக ஒடுக்கியமை.",
      },
    },
  },
  {
    id: "dudley",
    name: {
      en: "Dudley Senanayake",
      si: "ඩඩ්ලි සේනානායක",
      ta: "டட்லி சேனநாயக்க",
    },
    x: 4.0,
    y: 1.0,
    party: "UNP",
    color: "#00A550",
    image: "/images/politicians/Dudley Senanayake.png",
    reasoning: {
      en: {
        economic:
          "Liberal Democrat; focused on the 'Green Revolution' and agriculture.",
        social: "Soft, democratic governance; resigned when violence erupted.",
      },
      si: {
        economic: "හරිත විප්ලවය සහ කෘෂිකර්මය දියුණු කළේය.",
        social: "මෘදු ප්‍රජාතන්ත්‍රවාදී පාලනයක් ගෙන ගියේය.",
      },
      ta: {
        economic: "பசுமைப் புரட்சி மற்றும் விவசாயத்தை மேம்படுத்தினார்.",
        social: "மென்மையான ஜனநாயக ஆட்சி.",
      },
    },
  },
  {
    id: "ds",
    name: {
      en: "D.S. Senanayake",
      si: "ඩී.එස්. සේනානායක",
      ta: "டி.எஸ். சேனநாயக்க",
    },
    x: 5.0,
    y: 3.0,
    party: "UNP",
    color: "#00A550",
    image: "/images/politicians/D.S. Senanayake.png",
    reasoning: {
      en: {
        economic:
          "Agricultural colonization (Gal Oya); conservative liberal economics.",
        social:
          "Established citizenship laws that disenfranchised estate Tamils; focused on stability.",
      },
      si: {
        economic: "ගොවි ජනපද ව්‍යාපාර සහ ලිබරල් ආර්ථිකය.",
        social: "වතු දෙමළ ජනයාගේ පුරවැසිභාවය අහෝසි කිරීම.",
      },
      ta: {
        economic: "விவசாய குடியேற்றத் திட்டங்கள் மற்றும் தாராளவாத பொருளாதாரம்.",
        social: "மலையகத் தமிழர்களின் குடியுரிமையை பறித்தமை.",
      },
    },
  },
  {
    id: "rohana",
    name: { en: "Rohana Wijeweera", si: "රෝහණ විජේවීර", ta: "ரோஹண விஜேவீர" },
    x: -9.0,
    y: 8.5,
    party: "JVP",
    color: "#FF0000",
    image: "/images/politicians/Rohana Wijeweera.png",
    reasoning: {
      en: {
        economic:
          "Radical Marxist; advocated total state control and abolition of private property.",
        social:
          "Revolutionary authoritarian; led armed insurrections against the state.",
      },
      si: {
        economic: "පුද්ගලික දේපල අහෝසි කිරීම සහ පූර්ණ සමාජවාදය.",
        social: "රාජ්‍යයට එරෙහිව සන්නද්ධ කැරලි මෙහෙයවීය.",
      },
      ta: {
        economic:
          "தனியார் சொத்துரிமையை ரத்து செய்தல் மற்றும் முழுமையான சோசலிசம்.",
        social: "ஆயுதப் போராட்டங்களை வழிநடத்திய புரட்சிகர தலைவர்.",
      },
    },
  },
];

/**
 * Finds the politician closest to the user's result on the 2D grid.
 * Uses Euclidean distance formula: √((x2-x1)² + (y2-y1)²)
 */
export const findClosestPolitician = (userX, userY) => {
  let closest = null;
  let minDistance = Infinity;

  politicians.forEach((p) => {
    const distance = Math.sqrt(
      Math.pow(p.x - userX, 2) + Math.pow(p.y - userY, 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      closest = { politician: p, distance };
    }
  });

  return closest;
};
