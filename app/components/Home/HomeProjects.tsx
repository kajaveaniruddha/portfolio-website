import React from "react";
import {  ProjectCard } from "@/utils/types";
import {  projects } from "@/app/HomePage";
import CardProject from "../Cards/CardProject";
const HomeProjects = () => {
  return (
    <section className=" bg-orange w-full h-screen relative">
      <h2 className="text-shadow text-right text-lightYellow font-semibold text-6xl lg:text-7xl z-10 relative p-4 mr-[10%] pt-10">
        Projects
      </h2>
      <div className="w-[90%] max-sm:mx-auto pt-4 z-20 space-y-2 grid justify-items-end">
        {projects.map((proj) => {
          let projCard: ProjectCard = {
            id: proj?.id,
            title: proj?.title,
            subtitle: proj?.subtitle,
            date: proj?.date,
          };
          return <CardProject key={projCard.id} {...projCard} />;
        })}
      </div>
    </section>
  );
};

export default HomeProjects;
