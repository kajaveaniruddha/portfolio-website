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
    <main className="h-screen w-full pt-20 md:pt-24">
      <section className=" w-full h-[40%]">
        <div className=" flex max-sm:flex-col items-center ">
          <div className=" w-1/4 ml-2">
            <Sphere />
          </div>
          <div className="w-full text-left ml-8">
            <h1 className="text-4xl md:text-7xl font-semibold">
              Aniruddha Kajave
            </h1>
            <h2 className="text-xl md:text-3xl font-medium text-red-600">
              Full-Stack Developer{" "}
              <sub className=" text-xs md:text-sm text-white z-0">MERN</sub>
            </h2>
            <h5 className=" max-w-[75%] mt-4 md:mt-8 max-sm:text-xs ">
              Full stack developer with expertise in front-end and back-end
              development, experience in working with cross-functional teams.
            </h5>
            <Contact/>
          </div>
        </div>
      </section>
      <Divider
        mt={50}
        mb={20}
        size={5}
        label="Work Experience"
        labelPosition="center"
      />
      {/* Work Experience */}
      <section className=" container mx-auto h-1/2">
        <h2 className=" font-semibold text-3xl text-red-600">
          Work Experience
        </h2>
        <div className=" mt-6 grid grid-cols-3 max-sm:grid-cols-1 gap-4">
          {work_experience.map((card, index) => (
            <Cards key={index} card={card} />
          ))}
        </div>
      </section>
      <Divider my={20} size={5} label="Projects" labelPosition="center" />
      {/* Projects */}  
      <section className=" container mx-auto h-1/2">
        <h2 className=" font-semibold text-3xl text-red-600">Projects </h2>
        <div className="mt-6 grid grid-cols-3 max-sm:grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <Cards key={index} card={project} />
          ))}
        </div>
      </section>
      <Divider my={20} size={5} label="Skills" labelPosition="center" />
      {/* Skills */}
      <section className=" container mx-auto h-1/2">
        <h2 className=" font-semibold text-3xl text-red-600">Skills</h2>
        <div className=" mt-6 grid grid-cols-4 max-sm:grid-cols-2">
          {skills.map((skillCategory, index) => (
            <div key={index}>
              {Object.entries(skillCategory).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-2xl underline pb-1">{category}</h3>
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
