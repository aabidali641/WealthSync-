import { Container } from "lucide-react";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import HeroSection from "@/components/Hero";
import AnimateLogo from "@/components/AnimateLogo";

const inter = Inter( { subsets : ["latin"] } );

export const metadata = {
  title: "WealthSync",
  description: "Your Finances, Your Rules",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header  />
          <main className=""> {children} </main>
          {/* <HeroSection />
          <AnimateLogo /> */}
          {/* footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
