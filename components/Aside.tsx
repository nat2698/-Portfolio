import items from "@/utils/items";
import React, { JSX } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export default function Aside({ setIsOpen, isOpen }: Props): JSX.Element {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(!isOpen);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex md:hidden">
      <div
        className={`fixed inset-0 bg-black bg-opacity-0 transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-30 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-[#24243e]/10 backdrop-blur shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {isOpen && (
          <div className="flex items-center justify-end p-5">
            <button
              onClick={toggleSidebar}
              className=" left-4 z-50 p-2 cursor-pointer rounded-md shadow-md focus:outline-none"
            >
              <IoMdClose
                size={24}
                className="text-[#EC4899] hover:opacity-50"
              />
            </button>
          </div>
        )}
        <nav className="w-full mt-10 px-5">
          <ul className="space-y-4 text-white">
            {items.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-[#EC4899] transition-all duration-200"
                onClick={() => scrollToSection(item.id)}
              >
                {"> "}
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
