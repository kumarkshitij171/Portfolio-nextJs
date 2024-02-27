"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const AboutMe = () => {

    const About = `I am a passionate and dedicated B.Tech student pursuing Information Technology at Maharaja Surajmal Institute of Technology. With a strong foundation in programming languages such as C++, Java, and JavaScript, I have honed my skills in data structures and algorithms, making me adept at solving complex problems and contributing to innovative solutions.`

  return (
    <div className="my-3">
        <h3 className="mt-4 ml-2 text-3xl md:text-5xl font-bold    text-black dark:text-neutral-300 text-center">About Me</h3> 
       
      <TextGenerateEffect className="mx-8 text-center" words={About} />
    </div>
  )
}

export default AboutMe
