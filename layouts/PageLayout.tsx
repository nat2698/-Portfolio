import React, { JSX, useState } from "react";
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <header>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
