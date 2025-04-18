import React, { JSX } from "react";
import { IconType } from "react-icons";

import {
  SiGit,
  SiFigma,
  SiSketch,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

interface Skill {
  name: string;
  Icon: IconType;
}

const skills: Skill[] = [
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
  { name: "Sketch", Icon: SiSketch },
  { name: "React", Icon: SiReact },
  { name: "Next JS", Icon: SiNextdotjs },
  { name: "Typescript", Icon: SiTypescript },
  { name: "Javascript", Icon: SiJavascript },
  { name: "Tailwind", Icon: SiTailwindcss },
];

export default function SkillsSlider(): JSX.Element {
  return (
    <div className="marquee-wrapper bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] py-6">
      <div className="animate-marquee gap-6">
        {[...skills, ...skills].map(({ name, Icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-[#1c1c2b] px-6 py-4 rounded-lg shadow-md text-white hover:bg-[#2a2a3d] transition-all duration-300 mx-2"
          >
            <Icon className="text-3xl mb-2" />
            <span className="text-sm whitespace-nowrap">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
