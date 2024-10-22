import Link from "next/link";
import React from "react";
import ContactForm from "./contact-form";

const navLinks = [
  "home",
  "meet the team",
  "search for homes",
  "our communities",
  "home valuation",
  "services",
  "home accross america",
  "testimonials",
];

export default function NavLinks({ bg }: { bg: string }) {
  return (
    <>
      {navLinks.map((navLink) => (
        <Link
          className={`relative after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 ${bg === "white" ? "after:bg-white" : "after:bg-black"} after:transition after:duration-300 after:content-[''] after:hover:scale-x-100`}
          href="/"
          key={navLink}
        >
          {navLink}
        </Link>
      ))}
      <ContactForm>
        <p
          className={`relative after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 ${bg === "white" ? "after:bg-white" : "after:bg-black"} after:transition after:duration-300 after:content-[''] after:hover:scale-x-100`}
        >
          CONTACT US
        </p>
      </ContactForm>
    </>
  );
}
