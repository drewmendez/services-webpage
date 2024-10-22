"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const controlButton = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 700) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", controlButton);

    return () => window.removeEventListener("scroll", controlButton);
  }, []);

  return (
    <button
      className={`fixed right-5 z-20 rounded-full bg-[#1a1a1a] p-4 text-white transition-all ${show ? "bottom-5" : "-bottom-full"}`}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </button>
  );
}
