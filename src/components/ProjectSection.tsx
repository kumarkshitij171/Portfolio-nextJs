import React from "react";
import { ProjectCards } from "./ProjectCards";

const ProjectSection = () => {
  return (
    <div className="h-[90vh] pt-2">
      <h3 className="mt-4 ml-2 text-3xl md:text-5xl font-bold  text-neutral-300 text-center">
        Projects
      </h3>
      <ProjectCards/>
    </div>
  );
};

export default ProjectSection;
