import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://feekrcode.uz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Feekr Code — 12 dasturlash tilini o'yin orqali o'rgan",
  description:
    "Feekr Code — boshlovchidan professionalgacha 12 dasturlash tilini o'yin orqali o'rgatadigan desktop ilova. HTML, CSS, JavaScript, Python, SQL, TypeScript, Java, C#, C++, C, PHP, Go, Rust.",
  keywords: ["dasturlash", "o'rganish", "Feekr", "kod", "Python", "JavaScript", "o'yin", "uzbek"],
  authors: [{ name: "Feekr" }],
  openGraph: {
    title: "Feekr Code — kod o'rganishni o'yinga aylantiramiz",
    description: "12 dasturlash tili · 94 dars · 3 tilda · offline ishlaydi.",
    url: SITE,
    siteName: "Feekr Code",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feekr Code",
    description: "12 dasturlash tilini o'yin orqali o'rgan.",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#05080d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body>
        <div className="bg-fx" />
        <div className="bg-grid" />
        {children}
      </body>
    </html>
  );
}
