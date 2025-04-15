// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import AboutMe from "@/components/AboutMe";
import PageLayout from "@/layouts/PageLayout";
import { useRef } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (ref.current) {
      ref.current.style.setProperty("--x", `${x}px`);
      ref.current.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen  bg-[#08070f] text-white flex items-center bg-opacity-50 justify-center pb-20">
        <div className="max-w-[1100px] w-full ">
          <div className="pt-20">
            <section id="about">
              <AboutMe />
            </section>
            <section
              id="projects"
              className="h-screen flex items-center justify-center"
            >
              <h1 className="text-4xl font-bold">My Projects</h1>
            </section>
            <section
              id="contact"
              className="h-screen flex items-center justify-center"
            >
              <h1 className="text-4xl font-bold">Contact Me</h1>
            </section>
          </div>
          <div className="relative flex items-center justify-center min-h-screen bg-black">
            <div
              ref={ref}
              onMouseMove={handleMouseMove}
              className="group relative w-[720px] rounded-xl p-[2px] transition-all"
              style={
                {
                  "--x": "50%",
                  "--y": "50%",
                } as React.CSSProperties
              }
            >
              <div className="absolute inset-0 rounded-xl z-10 pointer-events-none">
                <div
                  className="w-full h-full rounded-xl"
                  style={{
                    background: `
                radial-gradient(
                  120px at var(--x) var(--y),
                  rgba(236, 72, 153, 0.9),
                  rgba(139, 92, 246, 0.7),
                  rgba(14, 165, 233, 0.5),
                  transparent 80%
                )
              `,
                    maskImage:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskImage:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "2px",
                    borderRadius: "0.75rem",
                  }}
                />
              </div>

              <div
                className="absolute inset-0 z-0 rounded-xl pointer-events-none"
                style={{
                  background: `radial-gradient(400px at var(--x) var(--y), rgba(236,72,153,0.2), rgba(139,92,246,0.15), transparent)`,
                  filter: "blur(60px)",
                  opacity: 1,
                }}
              />

              <div className="relative z-20 rounded-xl bg-[#0f172a] p-6 text-white backdrop-blur">
                <div className="text-sm text-cyan-400 text-right">
                  May 2022 - Feb 2024
                </div>
                <h3 className="text-pink-500 text-xl font-semibold mt-2">
                  Senior React Developer
                </h3>
                <p className="text-white font-bold">Getaround</p>
                <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                  I led the development of new product features from start to
                  finish, including research, documentation, refinement and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
