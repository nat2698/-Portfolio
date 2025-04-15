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
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Mi Portafolio</div>
        <ul className="flex gap-6 text-sm font-medium">
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("about")}
          >
            Acerca de mi
          </li>
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("projects")}
          >
            Experiencia
          </li>
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("contact")}
          >
            Habilidades
          </li>
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("contact")}
          >
            Proyectos
          </li>
          <li
            className="cursor-pointer hover:text-purple-600"
            onClick={() => scrollToSection("contact")}
          >
            Contacto
          </li>
        </ul>
      </div>
    </nav>
  );
}
