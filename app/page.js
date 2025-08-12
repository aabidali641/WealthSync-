"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/Hero";
import Link from "next/link";
import AnimateLogo from "@/components/AnimateLogo";
import CustomScroll from "@/components/CustomScroll";
import FAQSection from "@/components/FAQSection";

export function Page() {
  return <CustomScroll />;
}

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // 1 sec ke baad normal text
  };

  return (
    <div className="min-h-screen bg-white custom-scrollbar">
      {/* Hero Section */}
      <HeroSection />
      <AnimateLogo />
      {/* Stats Section */}
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 200 },
            textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)", // Subtle Glow Effect
            color: "#2563EB", // Slightly brighter color on hover
          }}
        >
          Your Reliable Finance Partner – Proven & Trusted
        </motion.h2>
      </motion.div>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.2,
            }}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 200 },
                  textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)", // Subtle Glow Effect
                  color: "#2563EB",
                }}
              >
                <motion.div
                  className="text-4xl font-bold text-blue-600 mb-2"
                  whileHover={{ scale: 1.2, color: "#1E40AF" }} // Darker blue on hover
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-gray-600"
                  whileHover={{ scale: 1.1, color: "#2563EB" }} // Brighter blue on hover
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          {/* Heading with animation */}
          <motion.h2
            className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 200 },
              textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)", // Subtle Glow Effect
              color: "#2563EB", // Slightly brighter color on hover
            }}
          >
            Everything you need to manage your finances
          </motion.h2>

          {/* Animated Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }} // Stagger effect for smooth entry
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100, // Alternating left-right entry
                    y: 50, // Thoda niche se bhi aayega
                  },
                  visible: { opacity: 1, x: 0, y: 0 },
                }}
                transition={{ duration: 1.2, ease: "easeOut" }} // Slow & smooth
              >
                <motion.div
                  whileHover={{
                    scale: 1.1, // Zoom effect on hover
                    rotate: 2, // Tilt effect
                    boxShadow: "0px 15px 30px rgba(0, 132, 255, 0.4)", // Deep shadow effect
                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                >
                  <Card className="p-6">
                    <CardContent className="space-y-4 pt-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 200 },
            textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)", // Subtle Glow Effect
            color: "#2563EB", // Slightly brighter color on hover
          }}
        >
          How It Works
        </motion.h2>
      </motion.div>

      <motion.section
        className="py-3 bg-blue-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {howItWorksData.map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative overflow-hidden p-6 bg-white rounded-lg shadow-md transition-all duration-20"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 40 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 200 },
                boxShadow: "0px 15px 30px rgba(0, 132, 255, 0.4)",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
              }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 transition-all duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 transition-all duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 200 },
              textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)", // Subtle Glow Effect
              color: "#2563EB", // Slightly brighter color on hover
            }}
          >
            What Our Users Says
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 },
                  visible: { opacity: 1, x: 0, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 200 },
                    boxShadow: "0px 15px 30px rgba(0, 132, 255, 0.4)",
                    backgroundColor: "#f0f9ff", // Light blueish effect
                    rotate: 2, // Slight rotation for cool effect
                  }}
                >
                  <Card className="p-6">
                    <CardContent className="pt-4">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-semibold text-white mb-4 gradient-title text-4xl md:text-5xl sm:text-3xl">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with WealthSync
          </p>
          <Link href="/dashboard">
            <Button
              onClick={handleClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="animate-spin inline-block w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full mr-2"></span>
                  Loading...
                </>
              ) : (
                "Start Free Trial"
              )}
            </Button>
          </Link>
        </div>
      </section>
      <FAQSection />
    </div>
  );
};

export default LandingPage;
