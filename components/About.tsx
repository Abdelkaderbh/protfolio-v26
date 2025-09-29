"use client";

import React from "react";
import Image from "next/image";
import MyPic from "../src/images/MyImg.png";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/CV_Abdelkader_Ben_Hassan.pdf";
    link.download = "Abdelkader_Ben_Hassan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section id="about" className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left side - Big picture */}
          <div className="flex justify-center lg:justify-start order-first lg:order-first">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Simple background */}
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-xl sm:rounded-2xl transform -rotate-2 scale-105"></div>
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl w-full border-2 sm:border-4 border-white dark:border-gray-800">
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
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                Hello, I&apos;m Abdelkader Ben Hassan
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                user-friendly applications that solve real-world problems.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                With years of experience in frontend and backend development, I
                specialize in React, Next.js, TypeScript, and modern web
                frameworks. I&apos;m always eager to learn new technologies and
                take on challenging projects.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge with the developer community.
              </p>
            </div>

            {/* Skills or highlights */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold text-gray-900 dark:text-white">
                What I bring to the table:
              </h4>
              
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-600 dark:text-gray-300">
                <li>Full-stack web development</li>
                <li>Modern JavaScript frameworks</li>
                <li>UI/UX design principles</li>
                <li>Problem-solving mindset</li>
                <li>Continuous learning approach</li>
              </ul>
              
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={handleDownloadCV}
                  className="relative inline-flex h-12 sm:h-14 md:h-16 lg:h-14 xl:h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer w-full sm:w-auto"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 sm:px-8 md:px-12 lg:px-10 xl:px-12 py-2 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium text-white backdrop-blur-3xl">
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
