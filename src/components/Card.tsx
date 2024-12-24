import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...other}
      className={twMerge(
        "relative z-0 overflow-clip rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
        className,
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      {children}
    </div>
  );
}
