"use client";

import { useParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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

  const params = useParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params, setHash]);

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
