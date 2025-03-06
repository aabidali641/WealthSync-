import { Container } from "lucide-react";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter( { subsets : ["latin"] } );

export const metadata = {
  title: "WealthSync",
  description: "Your Finances, Your Rules",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
          <Header />
        <main className="min-h-screen"> {children} </main>
        {/* footer */}
       <Footer />
      </body>
    </html>
  );
}
