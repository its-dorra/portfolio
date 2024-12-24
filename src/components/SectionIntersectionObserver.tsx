"use client";

import { useHash } from "@/context/router-context";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

export default function SectionIntersectionObserver({
  hash,
  children,
}: PropsWithChildren<{ hash: string }>) {
  const { setHash } = useHash();

  const { ref } = useInView({
    threshold: 0,
    rootMargin: "-75% 0px -75% 0px",
    onChange: (inView, entry) => {
      if (inView && entry.isIntersecting) setHash(hash);
    },
  });

  return <div ref={ref}>{children}</div>;
}
