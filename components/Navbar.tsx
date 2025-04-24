import items from "@/utils/items";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { JSX } from "react/jsx-runtime";
interface Props {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function Navbar({ setIsOpen, isOpen }: Props): JSX.Element {
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
        scrolled ? "bg-[#24243e]/40 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <div className={clsx("flex md:hidden", isOpen && "hidden")}>
        <button
          aria-label="Abrir menú"
          title="Abrir menú"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-1 cursor-pointer bg-[#24243e]   hover:scale-110  rounded-md shadow-md focus:outline-none"
        >
          <IoMdMenu size={24} className="text-[#EC4899]" />
        </button>
      </div>
      <div className="hidden md:flex max-w-[1100px] mx-auto px-4 py-3 justify-center items-center">
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
