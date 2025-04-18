import Image from "next/image";
import React, { JSX, useEffect } from "react";
import photo from "@/public/images/photo.webp";
import bg from "@/public/images/bg.svg";
import Aos from "aos";

export default function AboutMe(): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="flex justify-center items-center w-full mt-10 lg:h-[80vh] relative px-5 lg:px-0"
      data-aos="fade-up"
      id="about"
    >
      <Image
        alt="bg"
        src={bg}
        width={1500}
        height={500}
        className="w-full lg:h-[700px] object-cover absolute top-[-120px] "
      />
      <div className="w-full max-w-2xl z-10 bg-opacity-10">
        <div className="lg:w-52 lg:h-52 w-32 h-32 rounded-full overflow-hidden shape-circle float-right ml-6 mb-4">
          <Image
            alt="photo"
            src={photo}
            width={500}
            height={500}
            className="w-full h-full object-cover  grayscale brightness-110 contrast-125 mix-blend-screen"
          />
        </div>
        <div className="lg:border-l-2 border-cyan-400 lg:pl-5">
          <h2 className="text-2xl text-[#EC4899] font-bold mb-2">
            Acerca de mí
          </h2>
          <p className="lg:text-md text-sm mb-3">
            Desarrolladora frontend con más de 2 años de experiencia en HTML,
            CSS, JavaScript, React.js, Next.js, TypeScript, Material-UI,
            Tailwind. Interesada en el desarrollo web y en mantener soluciones
            con una excelente experiencia de usuario.
          </p>
          <p className="lg:text-md text-sm">
            Orientada a resultados, con habilidades para el trabajo en equipo,
            aprendizaje rápido y continuo, autonomía, resolución de problemas y
            organización. Responsable, disciplinada y con una actitud positiva.
          </p>
        </div>
      </div>
    </section>
  );
}
