"use client";
import React from "react";
import { PointerHighlight } from "./ui/pointer-highlight";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { motion } from "motion/react";
import Image from "next/image";
import myPic from "../src/images/MyImg.png";
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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        {/* Left side - Text content */}
        <div className="flex-1 w-full text-center lg:text-left">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">
            Hello my name is
          </div>
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          >
            <span className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Abdelkader Ben Hassan
            </span>
          </PointerHighlight>

          <motion.div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col items-center justify-start gap-1 text-center lg:items-start lg:text-left sm:flex-row">
            <span className="whitespace-nowrap mr-0 sm:mr-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
              I&apos;m a
            </span>
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
          <div className="flex gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 justify-center lg:justify-start">
            <Link
              href="https://www.linkedin.com/in/abdelkader-ben-hassen-bab946202"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </Link>

            <Link
              href="https://www.instagram.com/gadourbenhssen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </Link>

            <Link
              href="https://www.facebook.com/Gadour.BH"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 justify-center lg:justify-start">
            <button
              className="p-[2px] relative cursor-pointer"
              onClick={scrollToContact}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 py-2 sm:px-5 sm:py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm">
                Contact Me
              </div>
            </button>

            <button
              className="p-[2px] relative cursor-pointer"
              onClick={handleDownloadCV}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 py-2 sm:px-5 sm:py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-sm">
                Download CV
              </div>
            </button>
          </div>
        </div>

        {/* Right side - Image with circular background */}
        <div className="flex-1 flex justify-center lg:justify-end order-first lg:order-last mb-6 sm:mb-8 lg:mb-0">
          <div className="relative">
            {/* Circular background */}
            <div className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 shadow-xl sm:shadow-2xl"></div>

            {/* Image container - perfectly centered */}
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <Image
                src={myPic}
                alt="my-picture"
                className="w-full h-full object-cover object-center scale-90"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 448px, 512px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
