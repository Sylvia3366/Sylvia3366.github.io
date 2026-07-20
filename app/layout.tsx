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
    <html lang="en">
      <body className="min-h-full flex flex-col font-sans">
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-neutral-800 p-4 text-white">
      {/* Logo or Name */}
      <div className="font-bold">Sylvia Lin</div>
      
      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="https://www.instagram.com/ainuoqiu/" className="hover:text-gray-300">Instagram</a></li>
        <li><a href="https://github.com/Sylvia3366" target="_blank" className="hover:text-gray-300">GitHub</a></li>
        <li><a href="https://linkedin.com" target="_blank" className="hover:text-gray-300">LinkedIn</a></li>
      </ul>
    </nav>
  );
}