"use client";

import { useEffect, useState } from "react";

const LINES = [
  "> initializing profile...",
  "> role: Manual QA & Test Engineer",
  "> focus: functional / regression / defect lifecycle",
  "> status: PASS — ready for production teams",
];

export default function TerminalTyping() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [rendered, setRendered] = useState<string[]>([]);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;

    const current = LINES[lineIndex];

    if (charIndex <= current.length) {
      const timeout = setTimeout(() => {
        setRendered((prev) => {
          const next = [...prev];
          next[lineIndex] = current.slice(0, charIndex);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, 22);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 260);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="font-mono text-[13px] sm:text-sm leading-relaxed">
      {rendered.map((line, i) => (
        <div key={i} className={i === 3 ? "text-pass" : "text-muted"}>
          {line}
        </div>
      ))}
      {lineIndex < LINES.length && (
        <span className="inline-block w-2 h-4 bg-pass align-middle animate-blink" />
      )}
    </div>
  );
}
