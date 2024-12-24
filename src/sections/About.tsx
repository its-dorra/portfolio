"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import DrizzleIcon from "@/assets/icons/drizzle.svg";
import ExpressIcon from "@/assets/icons/express-js.svg";
import FramerMotionIcon from "@/assets/icons/framer-motion.svg";
import GraphqlIcon from "@/assets/icons/graphql.svg";
import Mongodb from "@/assets/icons/mongodb.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import NodejsIcon from "@/assets/icons/node-js.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import mapImage from "@/assets/images/map.png";
import smileMmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CSSIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Nextjs",
    icon: NextjsIcon,
  },
  {
    title: "Framer Motion",
    icon: FramerMotionIcon,
  },
  {
    title: "Nodejs",
    icon: NodejsIcon,
  },
  {
    title: "Express js",
    icon: ExpressIcon,
  },
  {
    title: "Graphql",
    icon: GraphqlIcon,
  },
  {
    title: "Mongodb",
    icon: Mongodb,
  },
  {
    title: "Postgresql",
    icon: PostgresqlIcon,
  },
  {
    title: "Drizzle Orm",
    icon: DrizzleIcon,
  },
];

const hobbies = [
  {
    title: "Movies",
    emoji: "🍿",
    left: "50%",
    top: "5%",
  },
  {
    title: "Volley ball",
    emoji: "🏐",
    left: "35%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "10%",
    top: "15%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "8%",
    top: "50%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who i am, what I do, and what inspires me"
        />
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="col-span-full h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives"
            />
            <div className="mx-auto mt-2 w-40 md:mt-0">
              <Image src={bookImage} alt="Book image" />
            </div>
          </Card>
          <Card className="col-span-full h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
            />
            <ToolboxItems
              items={toolboxItems}
              itemsWrapperClassName="animate-move-left [animation-duration:45s] "
            />
            <ToolboxItems
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              items={toolboxItems}
            />
          </Card>
          <Card className="col-span-full flex h-[320px] flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  drag
                  className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-2"
                  key={hobby.title}
                  style={{
                    top: hobby.top,
                    left: hobby.left,
                  }}
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="relative col-span-full h-[320px] md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
              <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]" />
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400" />
              <Image src={smileMmoji} alt="smile memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
