import Image from "next/image";
import React, { JSX } from "react";
import bg from "@/public/images/bg.svg";
import SkillsSlider from "./SkillsSlider";

export default function Skills(): JSX.Element {
  return (
    <section
      data-aos="fade-up"
      id="skills"
      className="h-[100vh] flex items-center px-5 lg:px-0 py-20 flex-col"
    >
      <div className="h-px mb-10 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <Image
        alt="bg"
        src={bg}
        width={800}
        height={500}
        className="w-full h-[350px]  opacity-60 object-cover absolute  "
      />
      <h2 className="text-[#EC4899] font-bold text-2xl mt-10 mb-20">
        Habilidades
      </h2>
      <SkillsSlider />
    </section>
  );
}
