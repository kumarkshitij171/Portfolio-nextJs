'use client';
import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >

      <HeroSection />
      <AboutMe/>
      <ProjectSection />

      <ContactMe/>

    </motion.div>
  );
}
