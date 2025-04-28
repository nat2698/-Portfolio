import Image from "next/image";
import React, { JSX } from "react";
import bg from "@/public/images/bg.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://github.com/nat2698",
    label: "GitHub",
    icon: <FaGithub className="text-2xl" />,
  },
  {
    href: "https://www.linkedin.com/in/nataliasalazaraguirre/",
    label: "LinkedIn",
    icon: <FaLinkedin className="text-2xl" />,
  },
  {
    href: "/cv/Natalia-Salazar.pdf",
    label: "CV",
    icon: <IoMdDownload className="text-xl" />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const cardClasses =
  "w-fit flex items-center gap-3 py-2 px-3 rounded-lg border border-[#6E5779] bg-white/20 backdrop-blur transition-colors hover:text-[#EC4899] hover:bg-white/0 hover:border-[#EC4899] hover:border-[1px]";

export default function Main(): JSX.Element {
  return (
    <section className="flex flex-col justify-center items-center w-full lg:h-[100vh] relative px-5 lg:px-0">
      <Image
        alt="Background"
        src={bg}
        width={1500}
        height={500}
        loading="lazy"
        className="w-full lg:h-[700px] object-cover absolute top-[-120px] z-0"
      />
      <div className="relative z-10 flex flex-col">
        <h1 className="text-3xl font-bold text-white">
          Hola, <span className="text-[#EC4899]">Soy Natalia Salazar</span>
        </h1>
        <span className="font-medium text-cyan-400">
          Desarrolladora Frontend
        </span>

        <div className="flex flex-wrap items-center gap-3 mt-5">
          {socialLinks.map(({ href, label, icon, target, rel }) => (
            <Link
              key={label}
              href={href}
              target={target}
              rel={rel}
              className={cardClasses}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
