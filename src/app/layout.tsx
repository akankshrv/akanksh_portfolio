import type { Metadata, Viewport } from "next";
import { Chelsea_Market } from "next/font/google";
import "./globals.css";

const chelseaMarket = Chelsea_Market({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chelsea-market",
});

export const metadata: Metadata = {
  title: "Portfolio | Akanksh",
  description: "Personal portfolio showcasing projects, experience, and skills.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chelseaMarket.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-white">
        {children}
      </body>
    </html>
  );
}
