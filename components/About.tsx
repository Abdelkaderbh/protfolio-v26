"use client";

import React from "react";
import Image from "next/image";
import MyPic from "../src/images/MyImg.png";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/Abdelkader_Ben_Hassan_CV.pdf";
    link.download = "Abdelkader_Ben_Hassan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section id="about" className="relative py-4 sm:py-5 md:py-6 lg:py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-7">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left side - Big picture */}
          <div className="flex justify-center lg:justify-start order-first lg:order-first">
            <div className="relative w-full max-w-[12rem] sm:max-w-[13rem] md:max-w-[15rem] lg:max-w-[17rem] xl:max-w-[19rem]">
              {/* Simple background */}
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-xl sm:rounded-2xl transform -rotate-2 scale-105"></div>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl w-full border-2 border-white dark:border-gray-800">
                <Image
                  src={MyPic}
                  alt="Abdelkader Ben Hassan - Profile Picture"
                  className="w-full h-auto object-contain md:object-cover object-top hover:scale-[1.02] transition-transform duration-300 rounded-xl sm:rounded-2xl"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                  priority
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                Hello, I&apos;m Abdelkader Ben Hassan
              </h3>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                user-friendly applications that solve real-world problems.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                With years of experience in frontend and backend development, I
                specialize in React, Next.js, TypeScript, and modern web
                frameworks. I&apos;m always eager to learn new technologies and
                take on challenging projects.
              </p>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge with the developer community.
              </p>
            </div>

            {/* Skills or highlights */}
            <div className="space-y-1.5 sm:space-y-2">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-gray-900 dark:text-white">
                What I bring to the table:
              </h4>
              
              <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-xs sm:text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-300">
                <li>Full-stack web development</li>
                <li>Modern JavaScript frameworks</li>
                <li>UI/UX design principles</li>
                <li>Problem-solving mindset</li>
                <li>Continuous learning approach</li>
              </ul>
              
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={handleDownloadCV}
                  className="relative inline-flex h-10 sm:h-11 md:h-12 lg:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer w-full sm:w-auto"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 sm:px-6 md:px-8 py-2 text-xs sm:text-sm md:text-base font-medium text-white backdrop-blur-3xl">
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
