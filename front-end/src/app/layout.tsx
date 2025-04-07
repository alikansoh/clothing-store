import { Playfair_Display, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar";

// Import fonts using next/font/google
const playfair = Playfair_Display({
  subsets: ["latin"], // choose the character set (you can also include others like Cyrillic)
  variable: "--font-playfair", // create a variable for use in CSS
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Clothing Shop",
  description: "Elegant fashion store",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
