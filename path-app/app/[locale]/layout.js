import { Inter, Noto_Sans_Sinhala, Noto_Sans_Tamil } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import "../globals.css";

// Font configurations for trilingual support
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  display: "swap",
  variable: "--font-noto-sans-sinhala",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-sans-tamil",
});

const locales = ["en", "si", "ta"];

/**
 * Generate static params for all supported locales.
 * This ensures these paths are statically optimized at build time.
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://thepathsl.sarasitha.me"
  ),
  title: {
    default: "The P.A.T.H. - Political Alignment Testing Hub",
    template: "%s | The P.A.T.H.",
  },
  description:
    "Discover where you stand on the Sri Lankan political spectrum with The P.A.T.H. Take our quiz to find your political alignment in the context of Sri Lankan politics.",
  keywords: [
    "Sri Lanka",
    "Politics",
    "Political Test",
    "The PATH",
    "JVP",
    "SJB",
    "SLPP",
    "UNP",
    "Political Compass",
    "Sri Lanka Elections",
    "Buddhism",
    "Socialism",
    "Liberalism",
  ],
  authors: [{ name: "The P.A.T.H. Team" }],
  creator: "The P.A.T.H. Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "The P.A.T.H. - Political Alignment Testing Hub",
    description:
      "Discover where you stand on the Sri Lankan political spectrum. Take the quiz now!",
    siteName: "The P.A.T.H.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The P.A.T.H. - Political Alignment Testing Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The P.A.T.H. - Political Alignment Testing Hub",
    description:
      "Discover where you stand on the Sri Lankan political spectrum. Take the quiz now!",
    images: ["/og-image.png"],
    creator: "@thepathlanka",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
};

/**
 * Root Locale Layout
 * Wraps the entire application with necessary providers and global structure.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child pages
 * @param {Object} props.params - Route parameters (including locale)
 */
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Load i18n messages for the client side
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansSinhala.variable} ${notoSansTamil.variable} min-h-screen flex flex-col bg-background text-foreground`}
        suppressHydrationWarning
      >
        {/*
          ThemeProvider: Manages Dark/Light mode preferences.
          - defaultTheme="dark": Sets the default look to the premium dark theme.
          - enableSystem: Allows respecting system preferences.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/*
           NextIntlClientProvider:
           Passes translation messages to client components for hooks like useTranslations().
          */}
          <NextIntlClientProvider messages={messages}>
            {/*
             Global Layout Structure:
             - Header: Fixed navigation bar (SiteHeader)
             - Main Content: Flexible central area (children)
             - Footer: Bottom navigation (Footer)
            */}
            <SiteHeader />
            <div className="flex-1 flex flex-col pt-28">{children}</div>
            <Footer />
            <Analytics />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
