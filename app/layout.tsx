import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YouPass - Nền tảng tự luyện IELTS miễn phí",
  description:
    "Nền tảng tự luyện IELTS Reading, Listening, Writing chất lượng cao, hoàn toàn MIỄN PHÍ",
  openGraph: {
    title: "YouPass - Nền tảng tự luyện IELTS miễn phí",
    description:
      "Nền tảng tự luyện IELTS Reading, Listening, Writing chất lượng cao, hoàn toàn MIỄN PHÍ",
    url: "https://youpass.vn",
    siteName: "YouPass",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={nunito.variable}>
      <body className="antialiased font-sans bg-white text-black">
        <Header />
        <main className="relative z-[1] w-full min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
