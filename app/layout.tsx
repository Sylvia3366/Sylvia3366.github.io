import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/app/components/navbar";

const geistPixel = localFont({
  src: "./fonts/Geist_Pixel/GeistPixel-Regular-VariableFont_ELSH.ttf",
  variable: "--font-geist-pixel",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistPixel.variable}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}