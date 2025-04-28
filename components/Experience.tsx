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
      className="flex items-center px-5 lg:px-0 py-20 flex-col overflow-hidden"
    >
      <div className="h-px mb-10 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <Image
        alt="bg"
        src={bg}
        width={800}
        height={500}
        loading="lazy"
        className="w-full h-[350px]  opacity-60 object-cover absolute"
      />
      <div className=" flex items-center justify-center  flex-col ">
        <h2 className="text-[#EC4899] font-semibold text-2xl md:text-3xl mt-30">
          Experiencia
        </h2>
        <div className="w-full lg:w-[900px] flex md:flex-row flex-col gap-8 md:mt-20 mt-7">
          {experienceCard.map((exp, index) => (
            <div key={index} className="lg:w-1/2 w-full">
              <Card
                date={exp.date ?? ""}
                charge={exp.charge ?? ""}
                company={exp.company ?? ""}
                content={exp.content ?? []}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
