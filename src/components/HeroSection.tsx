"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import { TextRevealCard, TextRevealCardTitle } from "./ui/text-reveal-card";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const fileUrl = `${process.env.NEXT_BASE_URL}/Resume.pdf`;
// console.log(fileUrl)
const HeroSection = () => {
  
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "Website",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div>
      <div className="h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.05] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex p-4 max-w-7xl mx-auto relative z-10  w-full pt-1 md:pt-0 flex-col-reverse">
          <div className="mt-4 ml-2 font-normal text-base text-neutral-300 max-w-lg ">
            <TextRevealCardTitle className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              <span className="text-indigo-500">Kshitij</span> Kumar
            </TextRevealCardTitle>
            <TextRevealCard
              className="bg-transparent border-0 hover:bg-transparent text-gray-200"
              text="Student"
              revealText="Full Stack Developer"
            ></TextRevealCard>
            <TypewriterEffectSmooth words={words} />

            <a href={fileUrl} download>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Resume
              </Button>
            </a>
          </div>

          <div className="">
            <img
              className="h-96 md:h-full w-80 rounded-md absolute top-7 md:top-2 z-20 md:right-3 "
              src="https://res.cloudinary.com/dbse94uff/image/upload/v1707652599/pp4a0nltj3ne0ousehdu.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
