import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import HashFragmentProvider from "@/context/router-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dorra | Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in React, Node.js. View my projects, skills, and professional experience.",
  keywords: [
    "full stack developer",
    "web development",
    "React",
    "Node.js",
    "TypeScript",
    "portfolio",
    "software engineer",
  ],
  authors: [
    {
      name: "Dorra",
      url: "https://dorra-codes.vercel.app/",
    },
  ],
  openGraph: {
    title: "Dorra | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer with expertise in modern web technologies",
    type: "website",
    url: "https://dorra-codes.vercel.app/",
    images: [
      {
        url: "/screen-shot.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 font-sans text-white antialiased",
        )}
      >
        <HashFragmentProvider>{children}</HashFragmentProvider>
      </body>
    </html>
  );
}
