import Image from "next/image";
import React from "react";

const AnimateLogo = () => {
  return (
    <div className="relative flex justify-center py-10 px-4">
      {/* Text on GIF */}
      <p
        className="absolute font-bold bg-opacity-50 mb-[-10px] gradient-title leading-tight 
        text-4xl md:text-5xl sm:text-3xl animate-text"
      >
        Where Motion Meets Meaning
      </p>

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
