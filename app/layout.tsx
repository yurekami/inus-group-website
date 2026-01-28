import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n";

export const metadata: Metadata = {
  title: "INUS Group | Leading the Future Through Integration",
  description:
    "INUS Group integrates logistics, finance, technology, trade, and real estate to drive innovation in global markets. With operations spanning Korea, USA, and Singapore.",
  keywords: [
    "INUS Group",
    "이너스 그룹",
    "logistics",
    "물류",
    "technology",
    "기술",
    "finance",
    "금융",
    "trade",
    "무역",
    "real estate",
    "부동산",
    "innovation",
    "global conglomerate",
    "supply chain",
    "AI logistics",
    "sustainable development",
  ],
  authors: [{ name: "INUS Group" }],
  creator: "INUS Group",
  metadataBase: new URL("https://www.inus-group.com"),
  openGraph: {
    title: "INUS Group | Leading the Future Through Integration",
    description:
      "Integrating logistics, finance, technology, trade, and real estate to drive innovation in global markets.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    url: "https://www.inus-group.com",
    siteName: "INUS Group",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "INUS Group - Leading the Future Through Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INUS Group | Leading the Future Through Integration",
    description:
      "Integrating logistics, finance, technology, trade, and real estate to drive innovation in global markets.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
