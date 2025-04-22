import React, { JSX } from "react";

export default function Projects(): JSX.Element {
  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="px-5 lg:px-0 py-20 flex-col flex items-center justify-center overflow-hidden"
    >
      <div className="h-px  w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <h2 className="text-[#EC4899] font-semibold text-2xl md:text-3xl mt-30">
        Proyectos
      </h2>
    </section>
  );
}
