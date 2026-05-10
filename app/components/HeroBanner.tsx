import Image from "next/image";
import { img } from "../data";
import { Button } from "./Button";
import { Stars } from "./Stars";

export function HeroBanner() {
  const heroCard =
    "relative mt-24 min-h-[620px] overflow-visible rounded-[44px] border border-white/25 " +
    "bg-white/[0.04] p-10 pt-72 backdrop-blur-sm md:mt-0 " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_35px_90px_rgba(0,0,0,0.3)]";

  return (
    <section className="mx-auto grid min-h-[860px] max-w-[1640px] items-center gap-12 px-5 pb-20 pt-20 md:grid-cols-[1fr_560px] md:px-10">
      <div>
        <h1 className="max-w-5xl text-6xl font-semibold leading-none text-white/80 drop-shadow-2xl md:text-8xl lg:text-[118px]">
          Earth&apos;s Exhale
        </h1>
        <p className="mt-7 max-w-3xl text-xl font-medium leading-8 text-white/75 md:text-2xl">
          &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s natural
          environment and its essential role in sustaining life.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button>Buy Now</Button>
          <button
            type="button"
            aria-label="Play live demo"
            className="grid size-[70px] place-items-center rounded-full border border-white/70 bg-white/5"
          >
            <span className="ml-1 block h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-white" />
          </button>
          <span className="text-2xl text-white">Live Demo...</span>
        </div>

        <aside className="mt-32 max-w-md rounded-[45px] border border-white/50 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-7">
            <Image
              src={img("avatar-ronnie.png")}
              alt="Ronnie Hamill"
              width={64}
              height={64}
              className="size-16 rounded-full object-cover"
            />
            <div>
              <p className="text-xl">Ronnie Hamill</p>
              <Stars />
            </div>
          </div>
          <p className="mt-6 text-base leading-7 text-white/75">
            I can&apos;t express how thrilled I am with my new natural plants! They bring
            such fresh and vibrant energy to my home.
          </p>
        </aside>
      </div>

      <article className={heroCard}>
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[44px] bg-gradient-to-br from-white/[0.08] via-white/[0.015] to-black/[0.08]" />
        <div className="absolute -top-28 left-1/2 h-[430px] w-[88%] -translate-x-1/2">
          <Image
            src={img("hero-plant.png")}
            alt="Aglaonema plant"
            fill
            priority
            sizes="560px"
            className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
          />
        </div>
        <p className="text-2xl text-white/75">Indoor Plant</p>
        <h2 className="mt-2 text-4xl text-white/80">Aglaonema plant</h2>
        <div className="mt-8 flex items-center justify-between">
          <Button>Buy Now</Button>
          <span className="text-2xl text-white/70">...</span>
        </div>
      </article>
    </section>
  );
}
