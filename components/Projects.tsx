import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          Projects
        </h2>
        <h4 className="text-center text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed">
          The list of my latest contributed projects. You can visit the project
          link by clicking on the project name when hovering over the card.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 sm:gap-y-14 md:gap-y-16 lg:gap-y-20 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-[22rem] sm:h-[24rem] md:h-[25rem] lg:h-[26rem] w-full flex items-center justify-center"
            >
              <PinContainer title={project.title} href={project.href}>
                <div className="flex basis-full flex-col p-4 sm:p-5 md:p-6 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] md:w-[24rem] h-[18rem] sm:h-[19rem] md:h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base sm:text-lg md:text-xl text-slate-100 leading-tight">
                    {project.title}
                  </h3>
                  <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 leading-relaxed">
                      {project.description}
                    </span>
                  </div>
                  <div
                    className={`flex flex-1 w-full rounded-lg mt-3 sm:mt-4 bg-gradient-to-br ${project.gradient}`}
                  />
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
