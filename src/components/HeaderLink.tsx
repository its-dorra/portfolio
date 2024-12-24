"use client";

import { useHash } from "@/context/router-context";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderLinkProps {
  href: string;
  content: string;
}

export default function HeaderLink({ href, content }: HeaderLinkProps) {
  const { hash, setHash } = useHash();

  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return (
    <a
      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-300 ${hash === href ? "bg-white text-gray-900 hover:bg-white/70" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
      href={href}
    >
      {content}
    </a>
  );
}
