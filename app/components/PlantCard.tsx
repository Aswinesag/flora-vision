import Image from "next/image";
import { img, type Plant } from "../data";
import { Button, CartButton } from "./Button";

export function PlantCard({ plant }: { plant: Plant }) {
  const card =
    "group relative mt-40 flex min-h-[470px] flex-col overflow-visible rounded-[34px] " +
    "border border-white/15 bg-white/[0.045] px-8 pb-8 pt-52 text-white " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_28px_70px_rgba(0,0,0,0.28)] " +
    "backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.075]";

  return (
    <article className={card}>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[34px] bg-gradient-to-br from-white/[0.08] via-white/[0.015] to-black/[0.08]" />
      <div className="absolute -top-40 left-1/2 z-10 h-96 w-[92%] -translate-x-1/2">
        <Image
          src={img(plant.image)}
          alt={plant.name}
          fill
          sizes="(max-width: 768px) 90vw, 33vw"
          className="object-contain drop-shadow-[0_36px_42px_rgba(0,0,0,0.5)] transition group-hover:scale-105"
        />
      </div>
      <h3 className="relative z-20 text-3xl text-white/85">{plant.name}</h3>
      <p className="mt-4 min-h-24 text-lg leading-7 text-white/65">{plant.text}</p>
      <div className="mt-auto flex items-center justify-between pt-8">
        <p className="text-3xl text-white/80">{plant.price}</p>
        <CartButton label={`Add ${plant.name} to cart`} />
      </div>
    </article>
  );
}

export function TrendPlantCard({
  reverse,
  image,
  price,
}: {
  reverse?: boolean;
  image: string;
  price: string;
}) {
  const imageSide = reverse
    ? "md:[&>div:first-child]:order-2 md:[&>div:first-child]:-mr-10"
    : "md:[&>div:first-child]:-ml-10";

  const card =
    "relative mt-20 grid min-h-[420px] items-center overflow-visible rounded-[56px] " +
    "border border-white/25 bg-white/[0.035] px-8 py-10 " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_35px_90px_rgba(0,0,0,0.28)] " +
    "backdrop-blur-sm md:grid-cols-2 md:px-16";

  return (
    <article className={`${card} ${imageSide}`}>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[56px] bg-gradient-to-br from-white/[0.08] via-white/[0.01] to-black/[0.08]" />
      <div className="relative z-10 h-80 -translate-y-16 md:h-[480px] md:-translate-y-20">
        <Image
          src={img(image)}
          alt="Desk decoration plant"
          fill
          sizes="(max-width: 768px) 90vw, 45vw"
          className="object-contain drop-shadow-[0_45px_55px_rgba(0,0,0,0.48)]"
        />
      </div>
      <div className="relative z-10 max-w-2xl text-white">
        <h3 className="text-3xl font-semibold">For Your Desks Decorations</h3>
        <p className="mt-7 text-lg leading-8 text-white/80">
          The greenery adds a touch of nature and serenity to your desk, making it feel
          more inviting and calming.
        </p>
        <p className="mt-8 text-3xl font-semibold">{price}</p>
        <div className="mt-6 flex items-center gap-6">
          <Button>Explore</Button>
          <CartButton label="Add desk plant to cart" />
        </div>
      </div>
    </article>
  );
}
