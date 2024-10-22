import ContactForm from "@/components/contact-form";
import { ArrowRight, Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-hero relative h-[600px] bg-cover bg-center after:absolute after:inset-0 after:bg-black after:bg-opacity-20 after:bg-gradient-to-b after:from-black after:to-transparent">
      <div className="container grid h-full place-content-center">
        <h1 className="z-10 text-6xl tracking-widest text-white md:text-4xl">
          Services
        </h1>
      </div>

      <div className="absolute bottom-0 z-10 w-full bg-[#525252] text-white">
        <div className="container flex justify-between gap-6 py-4">
          <div className="flex w-full max-w-[700px] items-center gap-2">
            <Search />
            <input
              className="w-full border-b bg-transparent text-white outline-none"
              type="text"
              placeholder="Search by Address or Area"
            />
          </div>

          <ContactForm>
            <p className="flex items-center gap-2 text-sm font-semibold transition hover:opacity-75">
              <span className="lg:hidden">BOOK AN APPOINTMENT</span>{" "}
              <ArrowRight />
            </p>
          </ContactForm>
        </div>
      </div>
    </section>
  );
}
