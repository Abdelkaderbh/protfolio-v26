import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          Projects
        </h2>
        <h4 className="text-center">
          The list of my latest contributed project "you can visit the link of
          the project by clicking on project name when hovering the card"
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-20 gap-x-8 lg:gap-x-12 place-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="h-[25rem] w-full flex items-center justify-center"
            >
              <PinContainer title={project.title} href={project.href}>
                <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 w-[24rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                    {project.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      {project.description}
                    </span>
                  </div>
                  <div
                    className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`}
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
