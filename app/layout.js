"use client"; // This must be at the top

import { Container } from "lucide-react";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import HeroSection from "@/components/Hero";
import AnimateLogo from "@/components/AnimateLogo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    toast.success("Welcome to WealthSync!", {
      position: "top-right",
      autoClose: 3000,
    });
  }, []);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="">{children}</main>
          {/* Toast Notifications */}
          <ToastContainer position="top-right" autoClose={3000} />
          {/* <HeroSection />
          <AnimateLogo /> */}
          {/* footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
