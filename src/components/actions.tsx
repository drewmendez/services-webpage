import { Mail, Phone } from "lucide-react";

export default function Actions() {
  return (
    <div
      className={`fixed bottom-20 right-5 z-20 hidden flex-col gap-1 transition-all md:flex`}
    >
      <button className="rounded-full bg-[#1a1a1a] p-4 text-white">
        <Mail />
      </button>
      <button className="rounded-full bg-[#1a1a1a] p-4 text-white">
        <Phone />
      </button>
    </div>
  );
}
