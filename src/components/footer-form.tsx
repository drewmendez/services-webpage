"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function FooterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);

    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setCheck(false);
    }, 2000);
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <input
        className="w-full border-b border-b-black py-1 outline-none"
        type="email"
        value={email}
        required
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex items-start gap-2">
        <input
          className="cursor-pointer accent-black"
          id="check"
          checked={check}
          required
          type="checkbox"
          onChange={() => setCheck(!check)}
        />
        <label className="cursor-pointer text-justify text-xs" htmlFor="check">
          By providing Julie Hansen Partnership your contact information, you
          acknowledge and agree to our{" "}
          <Link
            className="border-b border-b-black"
            href="https://hansenpartners.net/terms-and-conditions"
          >
            Privacy Policy
          </Link>{" "}
          and consent to receiving marketing communications, including through
          automated calls, texts, and emails, some of which may use artificial
          or prerecorded voices. This consent isn&apos;t necessary for
          purchasing any products or services and you may opt out at any time.
          To opt out from texts, you can reply, &apos;stop&apos; at any time. To
          opt out from emails, you can click on the unsubscribe link in the
          emails. Message and data rates may apply.
        </label>
      </div>
      {isSubmitted ? (
        <p className="py-4 text-lg italic md:text-center">Email Submitted!</p>
      ) : (
        <button className="border-2 border-black px-10 py-4 text-sm font-semibold tracking-widest transition duration-300 hover:bg-black hover:text-white md:w-full">
          SUBSCRIBE
        </button>
      )}
    </form>
  );
}
