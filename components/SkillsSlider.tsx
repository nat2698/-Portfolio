import React, { JSX } from "react";
// import { IconType } from "react-icons";

// import {
//   SiGit,
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiJavascript,
//   SiTailwindcss,
// } from "react-icons/si";
import skills from "@/utils/skills";
import Image from "next/image";

// interface Skill {
//   name: string;
//   Icon: IconType;
// }

// const skills: Skill[] = [
//   { name: "React", Icon: SiReact },
//   { name: "Next JS", Icon: SiNextdotjs },
//   { name: "Javascript", Icon: SiJavascript },
//   { name: "Typescript", Icon: SiTypescript },
//   { name: "Tailwind", Icon: SiTailwindcss },
//   { name: "Git", Icon: SiGit },
// ];

export default function SkillsSlider(): JSX.Element {
  return (
    <div className="marquee-wrapper lg:w-[900px] w-[300px] py-6">
      <div className="animate-marquee gap-6">
        {[...skills, ...skills].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-3 
                     border-[#362e3a] border-[1px] relative px-6 py-4 rounded-lg 
                     cursor-pointer hover:scale-110 transition-all duration-200 hover:border-[#6E5779]"
          >
            <div
              className="absolute top-0 w-[90%] h-[1px] 
                          bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
            <div className="h-12 w-12 mt-2">
              <Image
                alt="img"
                src={item.img}
                width={100}
                height={100}
                className="w-12 object-cover "
                priority={false}
                loading="lazy"
              />
            </div>
            <span className="text-sm whitespace-nowrap mb-2">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
