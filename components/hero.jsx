"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [loadingStates, setLoadingStates] = useState({});

  const handleClick = (buttonId) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));

    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 1000);
  };

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title"
          animate={{ y: [-10, 0, -10] }} // Up & Down animation
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        >
          Manage Your Finances <br /> with Intelligence
        </motion.h1>
        <motion.p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
          Effortlessly monitor your expenses, set financial goals, and receive
          personalized budgeting recommendations powered by advanced analytics
          and AI. With automated reports, intelligent forecasts, and secure data
          management,
          <br />
          WealthSync empowers you to make smarter financial decisions and
          achieve long-term financial freedom.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button
              onClick={() => handleClick("button4")}
              size="lg"
              className="animate-bounce px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
            >
              {loadingStates["button4"] ? (
                <>
                  <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Processing...
                </>
              ) : (
                "Get Started"
              )}
            </Button>
          </Link>
          <Link href="https://www.youtube.com/roadsidecoder" target="_blank">
            <Button
              onClick={() => handleClick("button5")}
              size="lg"
              className="animate-bounce px-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-black"
            >
              {loadingStates["button5"] ? (
                <>
                  <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Loading...
                </>
              ) : (
                "Watch Demo"
              )}
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0 flex justify-center">
          <motion.div
            ref={imageRef}
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
