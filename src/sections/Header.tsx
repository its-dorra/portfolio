import { headerLinks } from "@/assets";
import HeaderLink from "@/components/HeaderLink";

export const Header = () => {
  return (
    <header className="fixed top-3 z-10 flex w-full items-center justify-center">
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        {headerLinks.map((link) => (
          <HeaderLink
            content={link.content}
            key={link.content}
            href={link.href}
          />
        ))}
      </nav>
    </header>
  );
};
