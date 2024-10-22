import FooterForm from "@/components/footer-form";
import { Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="container 2xl:max-w-[1200px]">
        <div className="flex md:flex-col">
          <div className="flex-1">
            <h3 className="mb-5 text-3xl">Julie Hansen Partnership</h3>
            <p className="max-w-[500px]">
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
            <div className="mt-16 flex justify-between md:mt-10 md:flex-col">
              <div>
                <p className="mb-2 font-semibold">ADDRESS</p>
                <p>4733 Chabot Drive #100</p>
                <p>Pleasanton, CA 94588</p>
                <p className="mt-4">Julie Hansen-Orvis | CA DRE# 00934447</p>
              </div>
              <div className="space-y-2 md:mt-6">
                <p className="font-semibold">CONTACT INFORMATION</p>
                <p>(925) 553-6707</p>
                <p>luxuryhomesinwc@icloud.com</p>
              </div>
            </div>
          </div>

          <div className="flex-1 md:mt-28">
            <div className="pl-32 md:pl-0">
              <h3 className="mb-5 text-3xl">Newsletter</h3>
              <p className="max-w-[270px] text-lg">
                Subscribe to our Newsletter for latest news and updates. Stay
                tuned!
              </p>
              <FooterForm />
            </div>
          </div>
        </div>

        <div className="mt-16 flex md:flex-col-reverse">
          <div className="flex-1 space-x-3 md:mt-4">
            <button className="rounded-full bg-black p-3 text-white transition hover:opacity-60">
              <Facebook className="size-5" />
            </button>
            <button className="rounded-full bg-black p-3 text-white transition hover:opacity-60">
              <Linkedin className="size-5" />
            </button>
          </div>

          <div className="flex-1">
            <div className="flex h-[40px] items-center gap-7 pl-32 md:pl-0">
              <div className="h-full">
                <img
                  className="h-full"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu"
                  alt="realtor"
                />
              </div>
              <div className="h-full">
                <img
                  className="h-full"
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa"
                  alt="equal housing"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo"
                  alt="sereno"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex md:flex-col">
          <p className="flex-1">
            Website Designed & Developed by{" "}
            <Link
              className="border-b border-b-black pb-1 transition-all hover:border-opacity-0"
              href="https://www.luxurypresence.com/"
              target="_blank"
            >
              Luxury Presence
            </Link>
          </p>
          <div className="flex-1 md:mt-4">
            <p className="pl-32 md:pl-0">
              Copyright 2024 |{" "}
              <Link href="https://hansenpartners.net/terms-and-conditions">
                Privacy Policy
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
