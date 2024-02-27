'use client';
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

const ContactMe = () => {
  return (
    <div className=''>
        <h3 className="mt-4 mb-2 ml-2 text-3xl md:text-5xl font-bold  text-neutral-300 text-center">Contact Me</h3>
        <div className="h-96 relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(transparent,white)] opacity-15 pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
    </div>
  )
}

export default ContactMe
