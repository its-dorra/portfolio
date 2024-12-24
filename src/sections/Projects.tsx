import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import wildOasis from "@/assets/images/wild-oasis.png";
import brainWave from "@/assets/images/brain-wave.png";
import carePulse from "@/assets/images/care-pulse.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Care Pulse",
    year: "2024",
    title: "Medical Appointment Platform",
    results: [
      { title: "Reduced appointment booking time by 60%" },
      { title: "Increased patient satisfaction rate by 45%" },
      { title: "Streamlined doctor scheduling by 30%" },
    ],
    link: "https://dorra-codes-carepulse.vercel.app/",
    image: carePulse,
  },
  {
    company: "Brainwave",
    year: "2024",
    title: "AI Platform Dark Theme",
    results: [
      { title: "Achieved 95% user accessibility score" },
      { title: "Reduced eye strain by implementing smart contrast" },
      { title: "Increased user engagement time by 55%" },
    ],
    link: "https://dorra-codes-brainwave.vercel.app/",
    image: brainWave,
  },
  {
    company: "Wild Oasis",
    year: "2024",
    title: "Hotel Management System",
    results: [
      { title: "Automated 70% of booking processes" },
      { title: "Reduced check-in time by 65%" },
      { title: "Improved staff efficiency by 40%" },
    ],
    link: "https://dorra-codes-the-wild-oasis.vercel.app",
    image: wildOasis,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 md:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Project"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              className="sticky top-16 px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              key={project.title}
              style={{
                top: `calc(64px + ${index * 45}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="pb-16">
                  <div className="flex">
                    <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a target="_blank" href={project.link}>
                    <button className="mt-8 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-fit">
                      <span>Visit live site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="-mb-4 rounded-tl-lg md:mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
