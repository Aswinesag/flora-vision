import Image from "next/image";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { HeroBanner } from "./components/HeroBanner";
import { Navbar } from "./components/Navbar";
import { PlantCard, TrendPlantCard } from "./components/PlantCard";
import { SectionTitle } from "./components/SectionTitle";
import { TestimonialCard } from "./components/TestimonialCard";
import { asset, reviews, topSellingPlants } from "./data";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#101a0f] text-white">
      <div className="absolute inset-x-0 top-0 h-[2450px]">
        <Image
          src={asset("hero-bg.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101a0f]/10 via-[#101a0f]/25 to-[#101a0f]/82" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <HeroBanner />

        <section className="mx-auto max-w-[1640px] px-5 py-20 md:px-10">
          <SectionTitle>Our Trendy plants</SectionTitle>
          <div className="space-y-20">
            <TrendPlantCard image="desk-plant-1.png" price="Rs. 599/-" />
            <TrendPlantCard image="desk-plant-2.png" price="Rs. 399/-" reverse />
          </div>
        </section>

        <section className="mx-auto max-w-[1640px] px-5 py-20 md:px-10">
          <SectionTitle>Our Top Selling Plants</SectionTitle>
          <div className="grid gap-x-8 gap-y-20 pt-16 md:grid-cols-2 xl:grid-cols-3">
            {topSellingPlants.map((plant) => (
              <PlantCard key={plant.name} plant={plant} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1640px] px-5 py-20 md:px-10">
          <SectionTitle>Customer Review</SectionTitle>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1640px] px-5 py-24 md:px-10">
          <SectionTitle>Our Best o2</SectionTitle>
          <article className="grid min-h-[620px] items-center rounded-[56px] border border-white/25 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl md:grid-cols-[0.95fr_1fr] md:p-16">
            <div className="relative h-[460px] md:h-[620px]">
              <Image
                src={asset("hero-plant.png")}
                alt="Oxygen plant collection"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-semibold leading-tight text-white/80 md:text-5xl">
                We Have Small And Best O2 Plants Collection&apos;s
              </h2>
              <p className="mt-10 text-2xl leading-10 text-white/75">
                Oxygen-producing plants release oxygen into the atmosphere through
                photosynthesis. Many plants can also help filter pollutants and toxins
                from the air, making it cleaner and healthier to breathe.
              </p>
              <div className="mt-10 flex items-center gap-10">
                <Button>Explore</Button>
                <span className="text-xl font-bold text-white/75">01/04</span>
              </div>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
