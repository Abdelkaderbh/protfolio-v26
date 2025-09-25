"use client";
import React from "react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { motion } from "motion/react";
import Image from "next/image";
import myPic from "../src/images/1.png";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/CV_Abdelkader_Ben_Hassan.pdf";
    link.download = "Abdelkader_Ben_Hassan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 text-xl sm:text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-center lg:text-left">
          <div>Hello my name is</div>
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10">Abdelkader Ben Hassan</span>
          </PointerHighlight>
          <motion.div className="relative mt-8 sm:mt-12 flex flex-col items-center justify-start gap-1 text-center lg:items-start lg:text-left sm:flex-row">
            <span className="whitespace-nowrap mr-0 sm:mr-2">I'm a</span>
            <div className="min-w-0 mt-1 sm:mt-0">
              <LayoutTextFlip
                text=""
                words={[
                  "Software Engineer",
                  "Full Stack Js Developer",
                  "WordPress Developer",
                ]}
              />
            </div>
          </motion.div>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
            <Link
              href="https://www.linkedin.com/in/abdelkader-ben-hassen-bab946202"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>

            <Link
              href="https://www.instagram.com/gadourbenhssen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>

            <Link
              href="https://www.facebook.com/Gadour.BH"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>
          </div>
        </div>

        {/* Right side - Image with circular background */}
        <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0">
          <div className="relative">
            {/* Circular background */}
            <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 shadow-2xl"></div>
            {/* Image container - perfectly centered */}
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <Image
                src={myPic}
                alt="my-picture"
                className="w-90 h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>

  <button className="p-[3px] relative mr-5 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Contact Me
        </div>
      </button>
  <button className="p-[3px] relative cursor-pointer" onClick={handleDownloadCV}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Download CV
        </div>
      </button>
    </section>
  );
};

export default Hero;
