"use client";

import { useHash } from "@/context/router-context";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface HeaderLinkProps {
  href: string;
  content: string;
}

export default function HeaderLink({ href, content }: HeaderLinkProps) {
  const { hash } = useHash();

  return (
    <a
      className={`relative rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-300`}
      href={href}
    >
      {hash === href && (
        <motion.div
          layoutId="header-link"
          className={`absolute inset-0 -z-10 rounded-full ${hash === href ? "bg-white hover:bg-white/70" : "text-white/70 hover:bg-white/10"}`}
        />
      )}
      <motion.span
        className={`${hash === href ? "text-gray-900 hover:bg-white/70" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
      >
        {content}
      </motion.span>
    </a>
  );
}
