import Image from "next/image";
import { Amatic_SC } from "next/font/google";
import { img, navItems } from "../data";

const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-[1640px] items-center justify-between px-5 py-8 md:px-10">
        <a href="#" className="flex items-center gap-3" aria-label="FloraVision home">
          <Image
            src={img("logo-plant.png")}
            alt=""
            width={48}
            height={48}
            className="drop-shadow-2xl"
          />
          <span className="text-xl font-black text-white/80 md:text-3xl">FloraVision.</span>
        </a>

        <div
          className={`${amatic.className} hidden items-center gap-12 text-2xl font-bold text-white md:flex`}
        >
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-white/70">
              {item}
            </a>
          ))}
        </div>

        <div className={`${amatic.className} flex items-center gap-6`}>
          <button type="button" aria-label="Search" className="hidden md:block">
            <Image src={img("search.png")} alt="" width={26} height={26} />
          </button>
          <button type="button" aria-label="Cart" className="hidden md:block">
            <Image src={img("bag.png")} alt="" width={26} height={26} />
          </button>
          <button type="button" aria-label="Menu" className="space-y-2">
            <span className="block h-0.5 w-8 bg-white" />
            <span className="ml-2 block h-0.5 w-6 bg-white" />
          </button>
        </div>
      </nav>
    </header>
  );
}
