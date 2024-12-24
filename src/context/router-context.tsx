"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface HashFragment {
  hash: string;
  setHash: (hash: string) => void;
}

const HashFragmentContext = createContext<HashFragment | null>(null);

export default function HashFragmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [hash, setHash] = useState("#home");

  return (
    <HashFragmentContext.Provider value={{ hash, setHash }}>
      {children}
    </HashFragmentContext.Provider>
  );
}

export const useHash = () => {
  const context = useContext(HashFragmentContext);
  if (!context) throw new Error("useHash is used outside of its context");
  return context;
};
