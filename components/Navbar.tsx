import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconHeartHandshake,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Services",
      icon: (
        <IconHeartHandshake className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 transform -translate-x-1/2">
      <FloatingDock items={navItems} />
    </div>
  );
};

export default Navbar;
