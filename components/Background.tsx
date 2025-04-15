import React, { JSX } from "react";

export default function Background(): JSX.Element {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-30 animate-floaty bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23EC4899' fill-opacity='0.3' d='M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,149.3C840,139,960,85,1080,96C1200,107,1320,181,1380,218.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    />
  );
}
