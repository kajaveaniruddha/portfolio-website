import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className=" border-b  border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className=" hover:scale-[1.02] transition mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className=" w-full lg:w-1/4"
            >
              <img
                className=" mb-6 rounded-lg"
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className=" w-full max-w-xl lg:3/4 hover:-translate-y-1"
            >
              <h6 className=" font-semibold mb-2">{project.title}</h6>
              <ul className="mb-4 text-neutral-400 list-disc">
                {project.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
