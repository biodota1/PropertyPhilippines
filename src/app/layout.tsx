import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UpperNavBar from "./components/UpperNavBar";
import Footer from "./components/Footer";
import SmallScreenNavBar from "@components/SmallScreenNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://propertyphilippines.net"),
  title: "Property Philippines - Real Estate in Cebu and the Philippines",
  description:
    "Explore the best real estate opportunities in Cebu and the Philippines. Find your dream property with expert guides on buying homes, condos, and land.",
  keywords:
    "Properties For Sale in Cebu ,Condos for Sale in Cebu , real estate, Cebu real estate, Philippines property, Cebu homes for sale, property investment Philippines, condos for sale Cebu, buy property Cebu, land for sale Philippines, real estate agents Cebu, investment properties Philippines",
  robots: "index, follow",
  openGraph: {
    title: "Property Philippines - Real Estate in Cebu and the Philippines",
    description:
      "Discover top real estate properties in Cebu and across the Philippines. Browse homes, condos, and land for sale, with expert advice on buying and investing.",
    url: "https://propertyphilippines.net",
    type: "website",
    images: [
      {
        url: "../../public/hero-background.jpg", // Replace with actual image URL
        alt: "Property Philippines",
      },
    ],
  },
  twitter: {
    title: "Property Philippines - Real Estate in Cebu and the Philippines",
    description:
      "Explore the best real estate opportunities in Cebu and the Philippines. Find your perfect property now!",
    card: "summary_large_image",
    images: [
      {
        url: "URL_to_image.jpg", // Replace with actual image URL
        alt: "Property Philippines",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UpperNavBar />
        <SmallScreenNavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
