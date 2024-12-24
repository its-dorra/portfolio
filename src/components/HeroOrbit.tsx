import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface HeroOrbitProps extends PropsWithChildren {
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
}

export default function HeroOrbit({
  children,
  size,
  rotation,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
  shouldOrbit = false,
}: HeroOrbitProps) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(!!shouldOrbit && "animate-spin")}
        style={{
          ...(shouldOrbit && {
            animationDuration: orbitDuration,
          }),
        }}
      >
        <div
          style={{
            height: `${size}px`,
            width: `${size}px`,
            rotate: `${rotation}deg`,
          }}
        >
          <div
            className={twMerge("w-fit", shouldSpin && "animate-spin")}
            style={{
              ...(shouldSpin && {
                animationDuration: spinDuration,
              }),
            }}
          >
            <div className="w-fit" style={{ rotate: `${-1 * rotation}deg` }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
