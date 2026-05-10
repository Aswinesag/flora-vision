import Image from "next/image";
import { img, type Review } from "../data";
import { Stars } from "./Stars";

const cardShape =
  "relative min-h-72 overflow-hidden rounded-b-[34px] rounded-t-[38px] " +
  "border border-white/15 bg-white/[0.065] p-9 pt-12 backdrop-blur-xl";

const curve =
  "before:absolute before:-left-[8%] before:-right-[8%] before:-top-8 before:h-20 " +
  "before:rounded-b-[50%] before:border-b before:border-white/15 before:bg-[#101a0f]";

const glass =
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_26px_60px_rgba(0,0,0,0.28)] " +
  "after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-br " +
  "after:from-white/[0.07] after:via-white/[0.015] after:to-black/[0.08]";

export function TestimonialCard({ review }: { review: Review }) {
  return (
    <article className={`${cardShape} ${curve} ${glass}`}>
      <div className="relative z-10 flex items-center gap-7">
        <Image
          src={img(review.image)}
          alt={review.name}
          width={88}
          height={88}
          className="size-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-3xl font-semibold">{review.name}</h3>
          <Stars />
        </div>
      </div>
      <p className="relative z-10 mt-9 text-xl leading-8 text-white/70">{review.text}</p>
    </article>
  );
}
