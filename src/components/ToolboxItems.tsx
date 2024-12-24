import { ElementType, Fragment } from "react";
import { twMerge } from "tailwind-merge";

export default function ToolboxItems({
  items,
  className,
  itemsWrapperClassName,
}: {
  itemsWrapperClassName?: string;
  className?: string;
  items: { title: string; icon: ElementType }[];
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName,
        )}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
                  key={item.title}
                >
                  <Icon className="size-10 fill-[url(#tech-icon-gradient)]" />
                  <svg className="absolute size-0">
                    <linearGradient id="tech-icon-gradient">
                      <stop offset="0%" stopColor="rgb(110 231 183)" />
                      <stop offset="100%" stopColor="rgb(56 189 248)" />
                    </linearGradient>
                  </svg>
                  <span className="font-semibold">{item.title}</span>
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
