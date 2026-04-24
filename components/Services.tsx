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
    <section id="services" className="py-4 sm:py-5 md:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 md:mb-6 mt-1 sm:mt-2 md:mt-3">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 relative z-10 py-1 sm:py-2 md:py-3">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
