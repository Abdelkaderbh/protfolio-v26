"use client";

import React from "react";
import Image from "next/image";
import MyPic from "../src/images/2.png";

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
    <section id="about" className="relative py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Big picture */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full">
                <Image
                  src={MyPic}
                  alt="Abdelkader Ben Hassan - Profile Picture"
                  className="w-full h-auto object-contain md:object-cover object-top hover:scale-[1.02] transition-transform duration-300 rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Hello, I'm Abdelkader Ben Hassan
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                user-friendly applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With years of experience in frontend and backend development, I
                specialize in React, Next.js, TypeScript, and modern web
                frameworks. I'm always eager to learn new technologies and take
                on challenging projects.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>

            {/* Skills or highlights */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                What I bring to the table:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Full-stack web development</li>
                <li>Modern JavaScript frameworks</li>
                <li>UI/UX design principles</li>
                <li>Problem-solving mindset</li>
                <li>Continuous learning approach</li>
              </ul>
              <button
                onClick={handleDownloadCV}
                className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-12 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
