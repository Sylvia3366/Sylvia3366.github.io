import type { Metadata } from "next";
import localFont from "next/font/local"; // Change import
import "./globals.css";

const geistPixel = localFont({
  src: "./fonts/Geist_Pixel/GeistPixel-Regular-VariableFont_ELSH.ttf",
  variable: "--font-geist-pixel", // This must match the variable used in globals.css
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistPixel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}