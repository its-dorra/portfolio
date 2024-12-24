import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sam-dorra/",
  },
  {
    title: "Facebook",
    href: "https://web.facebook.com/islam.dorra.9",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/_its_dorra/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
          <p className="text-white/40">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <nav className="flex flex-col items-center gap-8 md:flex-row md:gap-6">
            {footerLinks.map(({ title, href }) => (
              <a
                className="inline-flex items-center gap-1.5"
                key={href}
                href={href}
                target="_blank"
              >
                <span className="font-semibold">{title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
