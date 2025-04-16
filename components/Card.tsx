import React, { JSX, useRef } from "react";

interface Props {
  date: string;
  charge: string;
  content: string;
}

export default function Card({ date, charge, content }: Props): JSX.Element {
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
    <div className="relative flex items-center justify-center  cursor-pointer">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="group relative w-full rounded-xl p-[2px] transition-all"
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
            filter: "blur(10px)",
            opacity: 1,
          }}
        />

        <div className="relative z-20 rounded-xl bg-gradient-to-br from-[#0f051d] to-[#1c0f32] p-6 text-white backdrop-blur">
          <div className="text-sm text-cyan-400 text-right">{date}</div>
          <h3 className="text-pink-500 text-xl font-semibold mt-2">{charge}</h3>
          <p className="text-white font-bold">{content}</p>
        </div>
      </div>
    </div>
  );
}
