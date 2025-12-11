export const politicians = [
  {
    id: "ranil",
    name: {
      en: "Ranil Wickremesinghe",
      si: "රනිල් වික්‍රමසිංහ",
      ta: "ரணில் விக்கிரமசிங்க",
    },
    x: 7.5,
    y: 6.0,
    party: "UNP/Independent",
    color: "#00A550",
    reasoning: {
      en: {
        economic:
          "Strong advocate for the free market, privatization of state enterprises (SOEs), and strict adherence to IMF austerity measures.",
        social:
          "Used the Executive Presidency's full power to suppress the Aragalaya protests and postponed local government elections citing economic reasons.",
      },
      si: {
        economic:
          "නිදහස් වෙළඳපොල සහ රාජ්‍ය ආයතන පෞද්ගලීකරණය දැඩිව විශ්වාස කරයි.",
        social:
          "විධායක බලතල භාවිතා කරමින් අරගලය මර්දනය කිරීම සහ මැතිවරණ කල් දැමීම.",
      },
      ta: {
        economic: "திறந்த சந்தை மற்றும் தனியார்மயமாக்கலை ஆதரிப்பவர்.",
        social: "நிறைவேற்று அதிகாரத்தைப் பயன்படுத்தி போராட்டங்களை ஒடுக்கியமை.",
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
    reasoning: {
      en: {
        economic:
          "Favored large state-led infrastructure projects (funded by debt), protectionist import bans, and bloated the public sector workforce.",
        social:
          "Centralized power around the family, removed term limits (18th Amendment), and militarized civilian administration after the war.",
      },
      si: {
        economic:
          "දේශීය කර්මාන්ත ආරක්ෂා කිරීම සහ රාජ්‍ය අංශය පුළුල් කිරීම (ණය මත පදනම් වූ සංවර්ධනය).",
        social:
          "පවුල වටා බලය කේන්ද්‍රගත කිරීම සහ 18 වන සංශෝධනය හරහා ධුර කාල සීමාවන් ඉවත් කිරීම.",
      },
      ta: {
        economic: "அரச துறை விரிவாக்கம் மற்றும் இறக்குமதி கட்டுப்பாடுகள்.",
        social:
          "அதிகாரத்தை ஒரு மையத்தில் குவித்தல் மற்றும் சிவில் நிர்வாகத்தில் இராணுவத் தலையீடு.",
      },
    },
  },
  {
    id: "akd",
    name: {
      en: "Anura Kumara Dissanayake",
      si: "අනුර කුමාර දිසානායක",
      ta: "අநுර කුමාර දිසානායක", // Using Sinhala phonetic for uniformity if Tamil unavailable, or user provided Tamil:
    },
    // User provided Tamil: அநுர குமார திஸாநாயக்க
    // I will correct the name object during write.
    x: -5.0,
    y: -4.0,
    party: "NPP/JVP",
    color: "#FF0000",
    reasoning: {
      en: {
        economic:
          "Supports a 'Production-Based Economy,' reducing tax burdens on the poor (VAT), and renegotiating trade deals.",
        social:
          "Advocates for 'System Change,' abolishing the Executive Presidency, and ending corruption/elite privileges.",
      },
      si: {
        economic: "'නිෂ්පාදන ආර්ථිකයක්' ගොඩනැගීම සහ බදු බර අඩු කිරීම.",
        social:
          "'ක්‍රමයේ වෙනසක්' (System Change) සහ විධායක ජනාධිපති ධුරය අහෝසි කිරීම.",
      },
      ta: {
        economic:
          "உற்பத்தி சார்ந்த பொருளாதாரம் மற்றும் வரிச் சுமைகளை குறைத்தல்.",
        social: "ஊழலை ஒழித்தல் மற்றும் நிறைவேற்று அதிகார முறைமையை நீக்குதல்.",
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
    reasoning: {
      en: {
        economic:
          "Supports open markets but emphasizes 'Social Capitalism'—free trade combined with strong poverty alleviation programs.",
        social:
          "Supported the 21st Amendment to reduce presidential powers and has historically advocated for devolution (13A).",
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
    reasoning: {
      en: {
        economic:
          "Introduced the 1977 Open Economy reforms, shifting Sri Lanka to free-market capitalism.",
        social:
          "Held the 1982 Referendum to extend parliament term instead of elections; consolidated executive power.",
      },
      si: {
        economic: "1977 විවෘත ආර්ථික ප්‍රතිසංස්කරණ හඳුන්වා දුන්නේය.",
        social: "1982 ජනමත විචාරණය පැවැත්වීය.",
      },
      ta: {
        economic: "1977 திறந்த பொருளாதார சீர்திருத்தங்களை அறிமுகப்படுத்தினார்.",
        social: "1982 பொதுவாக்கெடுப்பை நடத்தினார்.",
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
    reasoning: {
      en: {
        economic:
          "Mixed approach: 200 Garment Factories program (Right) combined with massive Gam Udawa welfare (Left).",
        social:
          "Extremely centralized control during the JVP insurrection era.",
      },
      si: {
        economic: "ඇඟලුම් කර්මාන්තශාලා 200 වැඩසටහන සහ ගම් උදාව.",
        social: "දැඩි මධ්‍යගත පාලනයක් ගෙන ගියේය.",
      },
      ta: {
        economic: "200 ஆடைத் தொழிற்சாலை திட்டத்தை அறிமுகப்படுத்தினார்.",
        social: "கடுமையான மத்திய கட்டுப்பாட்டை பேணினார்.",
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
    reasoning: {
      en: {
        economic:
          "Implemented closed economy (1970-77), import substitution, and nationalization of key industries.",
        social:
          "Enacted Republican constitution, severing ties with British dominion.",
      },
      si: {
        economic: "සංවෘත ආර්ථිකයක් ක්‍රියාත්මක කළාය (1970-77).",
        social: "ජනරජ ආණ්ඩුක්‍රම ව්‍යවස්ථාව පැනවූවාය.",
      },
      ta: {
        economic: "மூடிய பொருளாதாரத்தை அமல்படுத்தினார்.",
        social: "குடியரசு அரசியலமைப்பை அறிமுகப்படுத்தினார்.",
      },
    },
  },
  {
    id: "swrd",
    name: {
      en: "S.W.R.D. Bandaranaike",
      si: "එස්.ඩබ්ලිව්.ආර්.ඩී. බණ්ඩාරනායක",
      ta: "எஸ்.டபிள்யூ.ஆர்.டி. பண்டாரநாயக்க",
    },
    x: -4.0,
    y: 1.0,
    party: "SLFP",
    color: "#0000FF",
    reasoning: {
      en: {
        economic:
          "Advocated for nationalization (e.g., Bus transport, Port) and socialist welfare policies.",
        social:
          "Championed 'Sinhala Only' act; pivoted away from colonial elite structures.",
      },
      si: {
        economic: "ජනසතු කිරීමේ ප්‍රතිපත්ති (බස්, වරාය).",
        social: "'සිංහල පමණක්' පනත ගෙන ආවේය.",
      },
      ta: {
        economic: "தேசியமயமாக்கல் கொள்கைகளை ஆதரித்தார்.",
        social: "'சிங்களம் மட்டும்' சட்டத்தை கொண்டு வந்தார்.",
      },
    },
  },
  {
    id: "rohana",
    name: {
      en: "Rohana Wijeweera",
      si: "රෝහණ විජේවීර",
      ta: "ரோஹண விஜேவீர",
    },
    x: -9.0,
    y: 8.5,
    party: "JVP",
    color: "#FF0000",
    reasoning: {
      en: {
        economic:
          "Hardline Marxist; advocated complete state control, land redistribution, and anti-capitalism.",
        social:
          "Led two armed insurrections; strictly authoritarian party structure and ideology.",
      },
      si: {
        economic: "දැඩි මාක්ස්වාදී ආර්ථික ප්‍රතිපත්ති.",
        social: "නැගිටීම් දෙකකට නායකත්වය දුන්නේය.",
      },
      ta: {
        economic: "கடுமையான மார்க்சிய பொருளாதார கொள்கைகள்.",
        social: "இரண்டு ஆயுதப் போராட்டங்களை வழிநடத்தினார்.",
      },
    },
  },
];

export function findClosestPolitician(x, y) {
  let closest = null;
  let minDistance = Infinity;

  politicians.forEach((p) => {
    const distance = Math.sqrt(Math.pow(p.x - x, 2) + Math.pow(p.y - y, 2));
    if (distance < minDistance) {
      minDistance = distance;
      closest = { politician: p, distance };
    }
  });

  return closest;
}
