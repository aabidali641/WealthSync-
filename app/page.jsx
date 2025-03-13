"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/Data/landing";
import HeroSection from "@/components/Hero";
import Link from "next/link";
import AnimateLogo from "@/components/AnimateLogo";

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // 1 sec ke baad normal text
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      <AnimateLogo />

      {/* Stats Section */}
       <div className="container mx-auto px-4">
          <h2 className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title">
            Your Reliable Finance Partner – Proven & Trusted
          </h2>
          </div>
      <section className="py-20 bg-blue-50">
       
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="font-semibold text-center mb-12 text-4xl md:text-5xl sm:text-3xl gradient-title">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6" key={index}>
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div className="container mx-auto px-4">
          <h2 className="font-semibold text-center mb-8 gradient-title text-4xl md:text-5xl sm:text-3xl">
            How It Works
          </h2>
          </div>
      <section className="py-3 bg-blue-50">
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-semibold text-center mb-16 gradient-title text-4xl md:text-5xl sm:text-3xl">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
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
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
    </div>
  );
};

export default LandingPage;
