import Image from "next/image";
import { img } from "../data";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto grid max-w-[1640px] gap-12 px-5 py-24 text-white md:grid-cols-[1.2fr_0.7fr_1.1fr] md:px-10">
      <div>
        <div className="flex items-center gap-5">
          <Image src={img("logo-plant.png")} alt="" width={78} height={78} />
          <span className="text-4xl font-black text-white/80">FloraVision.</span>
        </div>
        <p className="mt-10 max-w-xl text-2xl leading-10">
          &quot;From lush indoor greens to vibrant outdoor blooms, our plants are crafted
          to thrive and elevate your living environment.&quot;
        </p>
        <div className="mt-20 flex gap-14 text-2xl font-extrabold">
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">LI</a>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold">Quick Link&apos;s</h2>
        <div className="mt-10 grid gap-6 text-2xl underline">
          <a href="#">Home</a>
          <a href="#">Type&apos;s Of plant&apos;s</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-extrabold">For Every Update.</h2>
        <form className="mt-10 flex min-h-[74px] overflow-hidden rounded-lg border-2 border-white">
          <input
            aria-label="Email address"
            placeholder="Enter Email"
            className="min-w-0 flex-1 bg-transparent px-7 text-2xl text-white placeholder:text-white/70 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white px-8 text-sm font-bold uppercase text-[#132010]"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-40 text-2xl">FloraVision all right reserve</p>
      </div>
    </footer>
  );
}
