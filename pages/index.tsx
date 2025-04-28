// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import PageLayout from "@/layouts/PageLayout";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-[#0b0b25] text-white flex items-center bg-opacity-50 justify-center pb-20">
        <div className="max-w-[1100px] w-full">
          <div className="">
            <Main />
            <AboutMe />
            <Experience />
            <Skills />
            <Projects />
            <section
              id="contact"
              className="h-screen flex items-center justify-center"
            >
              <h1 className="text-4xl font-bold">Contact Me</h1>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
