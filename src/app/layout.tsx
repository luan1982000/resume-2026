import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const font = Instrument_Sans({ subsets: ["latin"] });
const display = Bricolage_Grotesque({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
});
const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Luan Luan (Levi) - Resume 2025 - Software engineer",
  description:
    "Luan Luan (Levi) - Resume 2025 is a software engineer with over 6 years of experience. Specializing in React.js, Next.js, Node.js, Python and more.",
  openGraph: {
    title: "Luan Luan (Levi) - Resume 2025 - Software engineer",
    description:
      "Luan Luan (Levi) - Resume 2025 is a software engineer with over 6 years of experience. Specializing in React.js, Next.js, Node.js, Python and more.",
    url: "https://www.luanluan.tech",
    siteName: "Luan Luan Portfolio",
    images: [
      {
        url: "https://www.luanluan.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luan Luan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "https://www.luanluan.tech",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="canonical"
        href={process.env.NEXT_PUBLIC_DOMAIN || "https://www.luanluan.tech"}
        key="canonical"
      />
      <body className={`${font.className} ${display.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
