import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AnimateLogo = () => {
  return (
    <div className="relative flex justify-center py-10 px-4">
      {/* Text on GIF */}
      <motion.h2
        className="absolute font-bold bg-opacity-50 mb-[-10px] gradient-title leading-tight 
  text-4xl md:text-5xl sm:text-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 200 },
          textShadow: "0px 0px 10px rgba(0, 132, 255, 0.6)", // Glow Effect
          color: "#2563EB", // Brighter color on hover
        }}
      >
        Where Motion Meets Meaning
      </motion.h2>
      {/* GIF */}
      <Image
        src="/logo4.gif"
        width={1000}
        height={420}
        alt="Animated Logo"
        className="mx-auto w-full max-w-[1000px] h-auto"
        priority
        
      />
    </div>
  );
};

export default AnimateLogo;
