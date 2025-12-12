# The P.A.T.H. - Political Alignment Testing Hub (Sri Lanka)

![The P.A.T.H. Desktop Preview](path-app/public/screenshots/home-preview.png)

A production-ready, trilingual (English, Sinhala, Tamil) political compass web application for Sri Lanka. Built with Next.js 14, this app measures users on two axes (Economic: Left/Right, Social: Authoritarian/Liberal) and matches them to historical Sri Lankan politicians.

## 🌟 Features

- **Trilingual Support**: Full support for English, Sinhala, and Tamil
- **20 Curated Questions**: 10 economic and 10 social questions specific to Sri Lankan politics
- **Interactive Quiz**: Smooth slider-based interface for answering questions
- **Political Compass Visualization**: Beautiful scatter plot showing user position and historical politicians
- **Politician Matching**: Algorithm to find the closest historical Sri Lankan politician to your ideology
- **Social Sharing**: Generate shareable OG images with your results
- **Dark/Gold Theme**: Premium classy design with black backgrounds and gold accents
- **Fully Client-Side**: No database required, runs entirely in the browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with Shadcn/UI principles
- **Charts**: Chart.js with react-chartjs-2
- **Internationalization**: next-intl
- **OG Images**: Vercel OG

## 📊 Political Compass Axes

### Economic Axis (X-axis)

- **Left (-10)**: State control, subsidies, protectionism, wealth redistribution
- **Right (+10)**: Free market, privatization, low taxes, foreign investment

### Social Axis (Y-axis)

- **Liberal (-10)**: Decentralization, civil liberties, democratic reforms
- **Authoritarian (+10)**: Centralization, security focus, traditional values

## 🏛️ Historical Politicians Included

1. **J.R. Jayewardene** (UNP) - Right-wing, Authoritarian
2. **Sirimavo Bandaranaike** (SLFP) - Left-wing, Authoritarian
3. **Mahinda Rajapaksa** (SLPP) - Center-left, Authoritarian
4. **Ranil Wickremesinghe** (UNP) - Right-wing, Moderate
5. **Chandrika Kumaratunga** (SLFP) - Center-left, Liberal
6. **Anura Kumara Dissanayake** (NPP/JVP) - Left-wing, Moderate Liberal
7. **Sajith Premadasa** (SJB) - Center-right, Liberal
8. **S.J.V. Chelvanayakam** (ITAK) - Centrist, Very Liberal
9. **D.S. Senanayake** (UNP) - Right-wing, Moderate
10. **Ranasinghe Premadasa** (UNP) - Center-right, Authoritarian

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd path-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## � Project Structure

```
path-app/
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── page.js         # Home page
│   │   ├── quiz/
│   │   │   └── page.js     # Quiz page
│   │   └── results/
│   │       └── page.js     # Results page
│   ├── api/
│   │   └── og/
│   │       └── route.js    # OG image generation
│   └── globals.css         # Global styles
├── data/
│   ├── questions.js        # Question bank
│   └── politicians.js      # Politicians data
├── i18n/
│   └── routing.js          # i18n routing config
├── messages/
│   ├── en.json            # English translations
│   ├── si.json            # Sinhala translations
│   └── ta.json            # Tamil translations
├── i18n.js                # i18n configuration
├── middleware.js          # Locale detection
└── next.config.mjs        # Next.js configuration
```

## 🎨 Design System

### Colors

- **Background**: `#000000` (Pure Black)
- **Card Background**: `#0A0A0A`
- **Card Border**: `#1A1A1A`
- **Gold**: `#D4AF37`
- **Gold Dark**: `#B8941F`
- **Gold Light**: `#E8C547`
- **Text**: `#FFFFFF` (White)

### Typography

- **Font**: Inter (with fallbacks)
- **Headings**: Bold, gradient gold effect
- **Body**: Regular weight, white text

## 🌐 Internationalization

The app supports three languages with full translations:

- English (`/en`)
- Sinhala (`/si`)
- Tamil (`/ta`)

Language switching is automatic based on URL, with a language selector on the home page.

## 📊 Scoring Algorithm

1. Each question has a value from -2 to +2
2. User answers range from -2 (Strongly Disagree) to +2 (Strongly Agree)
3. Score = Answer × Question Value / 2
4. Final scores are normalized to -10 to +10 range
5. Euclidean distance is used to find the closest politician

## 🔗 API Routes

### `/api/og`

Generates dynamic OG images for social sharing.

**Query Parameters:**

- `x`: Economic score (-10 to 10)
- `y`: Social score (-10 to 10)
- `locale`: Language code (en, si, ta)

**Example:**

```
/api/og?x=5.5&y=-2.0&locale=en
```

## 📱 Responsive Design

The app is fully responsive and works on:

- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🚢 Deployment

This app is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

The app will automatically:

- Build the Next.js app
- Generate static pages where possible
- Enable edge functions for OG images

## 🗳️ Feedback & Issues

This is a personal portfolio project. While I am not actively seeking code contributions, I welcome feedback, bug reports, and suggestions. Please feel free to open an issue on GitHub.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ for Sri Lankan democracy**

## ⚖️ Copyright & Usage

This project is shared publicly for portfolio and educational purposes. **All rights are reserved.**

- **Ownership**: The creator retains full ownership of the codebase. Copying, modifying, or using this code for commercial purposes/rival products without permission is strictly prohibited.
- **GitHub**: As per GitHub's Terms of Service, users are permitted to view and fork this repository, but this does not grant rights to reuse the code for other purposes.
