import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="relative z-10 overflow-clip rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:flex-row md:text-left">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="z-10 flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <a href="mailto:dorracodes@gmail.com">
                <button className="inline-flex h-12 w-max items-center gap-2 rounded-lg border border-gray-900 bg-gray-900 px-6 text-white">
                  <span className="font-semibold">Contact me</span>
                  <ArrowUpRightIcon className="size-6" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
