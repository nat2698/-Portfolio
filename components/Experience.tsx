import React, { JSX } from "react";
import Card from "./Card";
import experienceCard from "@/utils/experienceCard";
import bg from "@/public/images/bg.svg";
import Image from "next/image";

export default function Experience(): JSX.Element {
  return (
    <section
      data-aos="fade-up"
      id="experience"
      className="h-[100vh] relative flex items-center px-5 lg:px-0 py-20 flex-col"
    >
      <div className="h-px mb-10 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <Image
        alt="bg"
        src={bg}
        width={800}
        height={500}
        className="w-full h-[350px]  opacity-60 object-cover absolute  "
      />
      <h2 className="text-[#EC4899] font-bold text-2xl mt-10">Experiencia</h2>
      <div className="w-full lg:w-[900px] flex lg:flex-row flex-col gap-10 mt-20">
        {experienceCard.map((exp, index) => (
          <div key={index}>
            <Card
              date={exp.date ?? ""}
              charge={exp.charge ?? ""}
              content={exp.content ?? ""}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
