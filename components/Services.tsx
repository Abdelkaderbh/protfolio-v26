"use client";

import React from "react";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { Feature } from "./ui/features";

const Services = () => {
  const features = [
    {
      title: "Full Stack Web Development",
      description:
        "Building responsive and modern web applications with both frontend and backend expertise.",
      icon: <IconTerminal2 />,
    },
    {
      title: "API Creation & Integration",
      description:
        "Designing secure and scalable RESTful APIs, tailored to your business needs.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress themes, plugins, and website optimization for seamless performance.",
      icon: <IconCloud />,
    },
    {
      title: "Bug Fixing & Optimization",
      description:
        "Troubleshooting and enhancing websites or apps to ensure smooth functionality.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Clear & Quick Communication",
      description:
        "I keep you updated at every stage of the project, ensuring full transparency.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Unlimited Demonstrations",
      description:
        "Regular demos and revisions until the product matches your vision.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Post-Delivery Support",
      description:
        "Ongoing assistance and maintenance to keep your product running flawlessly.",
      icon: <IconHelp />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your satisfaction is my priority — I adapt to your goals and provide long-term value.",
      icon: <IconHeart />,
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 mt-4 sm:mt-6 md:mt-8">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10 py-6 sm:py-8 md:py-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
