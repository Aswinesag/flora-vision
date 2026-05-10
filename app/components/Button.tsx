import Image from "next/image";
import { asset } from "../data";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export function Button({ children, className = "", type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-12 rounded-xl border-2 border-white/70 px-8 text-base font-medium text-white/90 transition hover:bg-white/15 ${className}`}
    >
      {children}
    </button>
  );
}

export function CartButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid size-12 place-items-center rounded-xl border border-white/55 bg-white/5 transition hover:bg-white/15"
    >
      <Image src={asset("bag.png")} alt="" width={24} height={24} className="opacity-80" />
    </button>
  );
}
