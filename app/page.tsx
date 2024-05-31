import Image from "next/image";
import { Divider } from "@mantine/core";
import Sphere from "./components/Spehere";
import Cards from "./components/Cards";
import { WorkCard, ProjectCard, SkillCategory } from "../utils/types";
import { IconArrowDown } from "@tabler/icons-react";
import { work_experience, projects, skills } from "@/app/HomePage";
import ScrollButton from "./components/ScrollButton";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="container mx-auto w-full pt-20 md:pt-24">
      <section className=" w-full h-[40%] ">
        <div className=" flex max-sm:flex-col items-center ">
          <div className=" w-1/4 pl-2">
            <Sphere />
          </div>
          <div className="w-full text-left pl-8">
            <h1 className="text-7xl font-semibold">Aniruddha Kajave</h1>
            <h2 className="text-3xl font-medium text-red-600">
              Full-Stack Developer{" "}
              <sub className=" text-sm text-white z-0">MERN</sub>
            </h2>
            <h5 className=" max-w-[75%] mt-8 text-xs ">
              Full stack developer with expertise in front-end and back-end
              development, experience in working with cross-functional teams.
            </h5>
            <Contact />
          </div>
        </div>
      </section>
      <Divider
        mt={50}
        mb={30}
        size={5}
        label="Work Experience"
        labelPosition="center"
      />
      {/* Work Experience */}
      <section className=" max-sm:w-[95%] mx-auto h-1/2">
        <h2 className=" font-semibold text-3xl text-red-600">
          Work Experience
        </h2>
        <div className=" mt-6 grid grid-cols-3 max-sm:grid-cols-1 gap-4">
          {work_experience.map((card, index) => (
            <Cards key={index} card={card} />
          ))}
        </div>
      </section>
      <Divider my={30} size={5} label="Projects" labelPosition="center" />
      {/* Projects */}
      <section className=" max-sm:w-[95%] mx-auto  h-1/2">
        <h2 className=" font-semibold text-3xl text-red-600">Projects </h2>
        <div className="mt-6 grid grid-cols-3 max-sm:grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <Cards key={index} card={project} />
          ))}
        </div>
      </section>
      <Divider my={30} size={5} label="Skills" labelPosition="center" />
      {/* Skills */}
      <section className="  max-sm:w-[95%] mx-auto h-1/2 mb-10">
        <h2 className=" font-semibold text-3xl text-red-600">Skills</h2>
        <div className=" mt-3 grid grid-cols-4 max-sm:grid-cols-2 gap-y-4">
          {skills.map((skillCategory, index) => (
            <div key={index}>
              {Object.entries(skillCategory).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-2xl underline pb-1">
                    {category}
                  </h3>
                  <ul className=" text-xl">
                    {skills.map((skill: string, idx: any) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <ScrollButton />
    </main>
  );
}
