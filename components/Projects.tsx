"use client";

import React, { useMemo, useState } from "react";
import { projects } from "@/data/projects";

const Projects = () => {
  const PROJECTS_PER_PAGE = 3;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const visibleProjects = useMemo(() => {
    const start = page * PROJECTS_PER_PAGE;
    return projects.slice(start, start + PROJECTS_PER_PAGE);
  }, [page]);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <section id="projects" className="py-2 sm:py-3 md:py-4 lg:py-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4">
          Projects
        </h2>
        <h4 className="text-center text-xs sm:text-sm md:text-sm text-gray-600 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4 max-w-3xl mx-auto leading-relaxed">
          The list of my latest contributed projects. You can visit the project
          link by clicking the open project button inside each card.
        </h4>

        <div className="mb-2 sm:mb-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={page === 0}
            className="rounded-md border border-white/20 bg-black/40 px-3 py-1.5 text-xs sm:text-sm text-white transition hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            {page + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="rounded-md border border-white/20 bg-black/40 px-3 py-1.5 text-xs sm:text-sm text-white transition hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {visibleProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_16px_42px_rgba(0,0,0,0.45)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-25 transition-opacity duration-300 group-hover:opacity-40">
                <div
                  className={`h-full w-full bg-gradient-to-br ${project.gradient}`}
                />
              </div>

              <div className="relative z-10 flex h-full min-h-[12rem] flex-col justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-slate-200/85 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/20"
                >
                  Open project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
