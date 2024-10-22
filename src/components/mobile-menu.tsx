"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "./nav-links";
import { useDisableScroll } from "@/hooks/useDisableScroll";

export default function MobileMenu({ pyControl }: { pyControl: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  useDisableScroll(isOpen);

  return (
    <>
      <button className="text-white" onClick={() => setIsOpen(true)}>
        <Menu />
      </button>
      <aside
        className={`fixed inset-y-0 w-3/4 bg-white transition-all duration-150 ${isOpen ? "right-0" : "-right-full"} shadow-2xl`}
      >
        <div className={`container flex ${pyControl ? "py-8" : "py-16"}`}>
          <button className="ml-auto" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <nav className="mt-16 flex flex-col items-start gap-6 px-14 text-2xl font-semibold uppercase text-black sm:px-8 sm:text-sm lg:text-xl">
          <NavLinks bg="black" />
        </nav>
      </aside>
    </>
  );
}
