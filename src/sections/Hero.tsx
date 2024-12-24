import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <section
      className="md:48 relative overflow-x-clip py-32 lg:py-60"
      id="home"
    >
      <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="hero-ring size-[640px]" />
        <div className="hero-ring size-[840px]" />
        <div className="hero-ring size-[1040px]" />
        <div className="hero-ring size-[1240px]" />
        <HeroOrbit
          shouldOrbit
          orbitDuration="30s"
          rotation={0}
          size={430}
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          rotation={75}
          size={440}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          rotation={-45}
          size={520}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/5" />
        </HeroOrbit>
        <HeroOrbit
          rotation={180}
          size={530}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          rotation={20}
          size={550}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          rotation={95}
          size={590}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          rotation={-10}
          size={680}
          shouldOrbit
          orbitDuration="54s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/5" />
        </HeroOrbit>
        <HeroOrbit
          rotation={150}
          size={710}
          shouldOrbit
          orbitDuration="58s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          rotation={80}
          size={720}
          shouldOrbit
          orbitDuration="62s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/5" />
        </HeroOrbit>

        <HeroOrbit
          shouldSpin
          spinDuration="6s"
          rotation={-72}
          size={810}
          shouldOrbit
          orbitDuration="66s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="absolute inset-0 animate-ping-large rounded-full bg-green-500" />
            </div>
            <p className="text-sm font-medium">Available for new projects</p>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="z-30 mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <a href="#projects">
            <button className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-6">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex h-12 items-center gap-2 rounded-lg border border-white bg-white px-6 text-gray-900">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s connect</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
