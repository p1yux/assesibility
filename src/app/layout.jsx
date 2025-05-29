import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import structuredData from "../../public/structured-data.json";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "enablecanada - Making Digital World Inclusive | Enable Canada",
  description: "Enable Canada helps businesses create inclusive digital experiences that empower everyone, regardless of ability. WCAG 2.1 AA, ADA, and AODA compliant accessibility services.",
  keywords: "accessibility, web accessibility, WCAG, ADA compliance, AODA, Section 508, inclusive design, digital accessibility, assistive technology, screen reader compatibility, keyboard navigation, website remediation, enablecanada",
  metadataBase: new URL('https://enablecanada.ca'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'enablecanada - Making Digital World Inclusive | Enable Canada',
    description: 'Enable Canada helps businesses create inclusive digital experiences that empower everyone, regardless of ability. WCAG 2.1 AA, ADA, and AODA compliant accessibility services.',
    url: 'https://enablecanada.ca',
    siteName: 'Enable Canada',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://enablecanada.ca/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Enable Canada - Digital Accessibility Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'enablecanada - Making Digital World Inclusive | Enable Canada',
    description: 'Enable Canada helps businesses create inclusive digital experiences that empower everyone, regardless of ability. WCAG 2.1 AA, ADA, and AODA compliant accessibility services.',
    images: ['https://enablecanada.ca/twitter-image.jpg'],
    creator: '@enablecanada',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#c91c1c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" 
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
            title="Google Tag Manager"
          />
        </noscript>
        
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:p-4 focus:bg-white focus:text-black">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
          
        </main>
        <Footer />
      </body>
    </html>
  );
}
