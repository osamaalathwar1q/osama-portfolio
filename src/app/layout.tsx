import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const siteUrl = "https://afaqcodesystem.42web.io";

export const viewport: Viewport = {
  themeColor: "#080B12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "أسامة أحمد محمد | مهندس برمجيات ومؤسس AFAQ CODE",
    template: "%s | أسامة أحمد محمد",
  },
  description:
    "الموقع الشخصي للمهندس أسامة أحمد محمد عثمان - مهندس برمجيات متكامل، مطور تطبيقات الهاتف والويب، ومؤسس منصة AFAQ CODE للحلول البرمجية والتحول الرقمي.",
  keywords: [
    "أسامة أحمد",
    "Osama Ahmed Mohammed",
    "AFAQ CODE",
    "Software Engineer Yemen",
    "Full Stack Developer",
    "Flutter Developer",
    "Next.js Developer",
    "C# WinForms ERP",
    "مهندس برمجيات اليمن",
    "تطوير مواقع وتطبيقات",
  ],
  authors: [{ name: "Osama Ahmed Mohammed", url: siteUrl }],
  creator: "Osama Ahmed Mohammed",
  publisher: "AFAQ CODE",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ar_YE",
    url: siteUrl,
    title: "أسامة أحمد محمد | مهندس برمجيات ومؤسس AFAQ CODE",
    description:
      "معرض الأعمال والشهادات للمهندس أسامة أحمد - حلول برمجية متكاملة (Web, Mobile, Desktop Systems, AI Automation).",
    siteName: "أسامة أحمد - Portfolio",
    images: [
      {
        url: "/images/p.png",
        width: 1200,
        height: 630,
        alt: "أسامة أحمد محمد عثمان - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أسامة أحمد محمد | مهندس برمجيات ومؤسس AFAQ CODE",
    description:
      "الموقع الشخصي ومعرض الأعمال والأنظمة البرمجية للمهندس أسامة أحمد عثمان.",
    images: ["/images/p.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for Person & Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Osama Ahmed Mohammed Othman",
        alternateName: "أسامة أحمد محمد عثمان",
        jobTitle: "Software Engineer & Team Leader",
        worksFor: {
          "@type": "Organization",
          name: "AFAQ CODE",
          url: "https://afaqcodesystem.42web.io/?i=1",
        },
        url: siteUrl,
        image: `${siteUrl}/images/p.png`,
        email: "mailto:osamaahmedmohammed26@gmail.com",
        telephone: "+967778144907",
        sameAs: [
          "https://github.com/osamaalathwar1q",
          "https://www.linkedin.com/in/osama-ahmed-mohammed-othman-82395225b",
          "https://www.instagram.com/oa_a3q",
          "https://www.instagram.com/afaq.ac",
          "https://t.me/OAMO7",
          "https://t.me/AfaqCode",
        ],
      },
    ],
  };

  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080B12] text-[#E5E7EB] font-sans antialiased selection:bg-[#2563EB]/30 selection:text-[#06B6D4]">
        {children}
      </body>
    </html>
  );
}
