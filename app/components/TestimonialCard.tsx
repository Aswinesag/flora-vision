import Image from "next/image";
import { asset, type Testimonial } from "../data";
import { Stars } from "./Stars";

export function TestimonialCard({ review }: { review: Testimonial }) {
  return (
    <article className="min-h-72 rounded-[32px] border border-white/15 bg-white/[0.07] p-9 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-7">
        <Image
          src={asset(review.image)}
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
      <p className="mt-9 text-xl leading-8 text-white/70">{review.text}</p>
    </article>
  );
}
