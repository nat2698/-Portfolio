import items from "@/utils/items";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full text-white shadow z-50 transition-all duration-300",
        scrolled ? "bg-[#24243e]/10 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex justify-end items-center">
        <ul className="flex gap-6 text-sm font-medium">
          {items.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#EC4899] transition-all duration-200"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
