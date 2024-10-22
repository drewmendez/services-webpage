"use client";

import { useDisableScroll } from "@/hooks/useDisableScroll";
import { Map, Phone, X } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

const inputs = ["Name", "Phone", "Email", "Message"];

export default function ContactForm({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useDisableScroll(isOpen);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{children}</button>
      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-black bg-opacity-70 px-5 py-10 md:pt-[200px] ${isOpen ? "block" : "hidden"} grid place-content-center`}
      >
        <div className="z-50 flex justify-end">
          <button className="z-50 -mb-12" onClick={() => setIsOpen(false)}>
            <X className="z-50 size-12 text-black" />
          </button>
        </div>
        <div className="z-40 flex w-full max-w-[1000px] text-base font-normal normal-case md:flex-col-reverse">
          <div className="flex flex-1 flex-col items-center gap-10 bg-black p-10 text-white">
            <div className="flex flex-col items-center gap-5">
              <Phone />
              <p>(925) 553-6707</p>
            </div>
            <p>luxuryhomesinwc@icloud.com</p>
            <div className="flex flex-col items-center gap-5">
              <Map />
              <p className="max-w-[400px] text-center">
                4337 Chabot Drive, Pleasanton, CA 94588Julie Hansen-Orvis | CA
                DRE# 00934447
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-10 bg-white p-10 text-black">
            <h3 className="text-center text-3xl font-bold text-black">
              Submit A Message
            </h3>
            <div className="flex flex-col gap-8">
              {inputs.map((input) => (
                <ContactInput key={input} placeholder={input} />
              ))}
            </div>
            <div className="flex items-start gap-2">
              <input
                className="cursor-pointer accent-black"
                id="check"
                required
                type="checkbox"
              />
              <label
                className="cursor-pointer text-justify text-xs"
                htmlFor="check"
              >
                By providing Julie Hansen Partnership your contact information,
                you acknowledge and agree to our{" "}
                <Link
                  className="border-b border-b-black"
                  href="https://hansenpartners.net/terms-and-conditions"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receiving marketing communications, including
                through automated calls, texts, and emails, some of which may
                use artificial or prerecorded voices. This consent isn’t
                necessary for purchasing any products or services and you may
                opt out at any time. To opt out from texts, you can reply,
                ‘stop’ at any time. To opt out from emails, you can click on the
                unsubscribe link in the emails. Message and data rates may
                apply.
              </label>
            </div>
            <button className="w-full bg-black py-4 font-bold text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactInput({ placeholder }: { placeholder: string }) {
  return (
    <input
      className="w-full border-b border-b-slate-400 pb-1 outline-none"
      type="text"
      placeholder={placeholder}
    />
  );
}
