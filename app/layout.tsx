import type { Metadata } from "next";
import { Be_Vietnam_Pro, Lora } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const headingFont = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Một blog âm nhạc chia sẻ playlist, review album và những câu chuyện quanh văn hóa nghe hiện đại.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
