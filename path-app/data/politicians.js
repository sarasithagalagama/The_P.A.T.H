/**
 * Historical Sri Lankan Politicians Reference Map
 * Each politician has:
 * - name: politician's name in all three languages
 * - x: economic position (-10 = far left, +10 = far right)
 * - y: social position (-10 = liberal, +10 = authoritarian)
 * - color: party color for visualization
 * - party: party abbreviation
 */

export const politicians = [
  {
    id: "jrj",
    name: {
      en: "J.R. Jayewardene",
      si: "ජේ.ආර්. ජයවර්ධන",
      ta: "ஜே.ஆர். ஜயவர்தனே",
    },
    x: 8.0,
    y: 8.5,
    color: "#008000", // UNP Green
    party: "UNP",
  },
  {
    id: "sirimavo",
    name: {
      en: "Sirimavo Bandaranaike",
      si: "සිරිමාවෝ බණ්ඩාරනායක",
      ta: "சிறிமாவோ பண்டாரநாயக்க",
    },
    x: -8.0,
    y: 8.0,
    color: "#0000FF", // SLFP Blue
    party: "SLFP",
  },
  {
    id: "mahinda",
    name: {
      en: "Mahinda Rajapaksa",
      si: "මහින්ද රාජපක්ෂ",
      ta: "மஹிந்த ராஜபக்ஷ",
    },
    x: -4.0,
    y: 7.5,
    color: "#800000", // SLPP Maroon
    party: "SLPP",
  },
  {
    id: "ranil",
    name: {
      en: "Ranil Wickremesinghe",
      si: "රනිල් වික්‍රමසිංහ",
      ta: "ரணில் விக்ரமசிங்க",
    },
    x: 6.5,
    y: 4.0,
    color: "#0066CC", // Blue
    party: "UNP",
  },
  {
    id: "chandrika",
    name: {
      en: "Chandrika Kumaratunga",
      si: "චන්ද්‍රිකා කුමාරතුංග",
      ta: "சந்திரிகா குமாரதுங்க",
    },
    x: -2.0,
    y: -3.0,
    color: "#0000FF", // Blue
    party: "SLFP",
  },
  {
    id: "akd",
    name: {
      en: "Anura Kumara Dissanayake",
      si: "අනුර කුමාර දිසානායක",
      ta: "அனுர குமார திசாநாயக்க",
    },
    x: -5.5,
    y: -1.0,
    color: "#FF0000", // NPP Red
    party: "NPP/JVP",
  },
  {
    id: "sajith",
    name: {
      en: "Sajith Premadasa",
      si: "සජිත් ප්‍රේමදාස",
      ta: "சஜித் பிரேமதாச",
    },
    x: 1.5,
    y: -2.0,
    color: "#00AA00", // SJB Green
    party: "SJB",
  },
  {
    id: "chelva",
    name: {
      en: "S.J.V. Chelvanayakam",
      si: "එස්.ජේ.වී. චෙල්වනායගම්",
      ta: "எஸ்.ஜே.வி. செல்வநாயகம்",
    },
    x: 0.0,
    y: -9.0,
    color: "#FFD700", // Yellow
    party: "ITAK",
  },
  {
    id: "ds",
    name: {
      en: "D.S. Senanayake",
      si: "ඩී.එස්. සේනානායක",
      ta: "டி.எஸ். சேனாநாயக்க",
    },
    x: 5.0,
    y: 2.0,
    color: "#008000", // Green
    party: "UNP",
  },
  {
    id: "premadasa",
    name: {
      en: "Ranasinghe Premadasa",
      si: "රණසිංහ ප්‍රේමදාස",
      ta: "ரணசிங்க பிரேமதாச",
    },
    x: 1.5,
    y: 8.5,
    color: "#008000", // Green
    party: "UNP",
  },
];

/**
 * Calculate Euclidean distance between two points
 */
export function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Find the closest politician to a given position
 */
export function findClosestPolitician(userX, userY) {
  let closest = null;
  let minDistance = Infinity;

  politicians.forEach((politician) => {
    const distance = calculateDistance(
      userX,
      userY,
      politician.x,
      politician.y
    );
    if (distance < minDistance) {
      minDistance = distance;
      closest = politician;
    }
  });

  return { politician: closest, distance: minDistance };
}
