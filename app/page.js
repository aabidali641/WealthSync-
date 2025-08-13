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
import HeroSection from "@/components/hero";
import Link from "next/link";
import AnimateLogo from "@/components/AnimateLogo";
import CustomScroll from "@/components/CustomScroll";
import Footer from "@/components/Footer";

export function Page() {
  return <CustomScroll />;
}

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      <AnimateLogo />

      {/* Stats Section */}
      <motion.div
        className="container mx-auto px-4 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 200 },
            textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)",
            color: "#2563EB",
          }}
        >
          Your Reliable Finance Partner – Proven & Trusted
        </motion.h2>
      </motion.div>

      <section className="py-20 bg-blue-50 w-full">
        <div className="container mx-auto px-4 w-full">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full"
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
                  textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)",
                  color: "#2563EB",
                }}
              >
                <motion.div
                  className="text-4xl font-bold text-blue-600 mb-2"
                  whileHover={{ scale: 1.2, color: "#1E40AF" }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-gray-600"
                  whileHover={{ scale: 1.1, color: "#2563EB" }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 w-full">
        <div className="container mx-auto px-4 w-full">
          <motion.h2
            className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 200 },
              textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)",
              color: "#2563EB",
            }}
          >
            Everything you need to manage your finances
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                    y: 50,
                  },
                  visible: { opacity: 1, x: 0, y: 0 },
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 2,
                    boxShadow: "0px 15px 30px rgba(0, 132, 255, 0.4)",
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
        className="container mx-auto px-4 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 200 },
            textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)",
            color: "#2563EB",
          }}
        >
          How It Works
        </motion.h2>
      </motion.div>

      <motion.section
        className="py-3 bg-blue-50 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 w-full">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }}
          >
            {howItWorksData.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative overflow-hidden p-6 bg-white rounded-lg shadow-md transition-all duration-20 w-full"
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
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 w-full">
        <div className="container mx-auto px-4 w-full">
          <motion.h2
            className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 200 },
              textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)",
              color: "#2563EB",
            }}
          >
            What Our Users Says
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4"
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
                    backgroundColor: "#f0f9ff",
                    rotate: 2,
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
      <section className="py-20 bg-blue-600 w-full">
        <div className="container mx-auto px-4 text-center w-full">
          <h2 className="font-semibold text-white mb-4 text-4xl md:text-5xl sm:text-3xl px-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto px-4">
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
      <Footer />
    </div>
  );
};

export default LandingPage;
