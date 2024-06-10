import Link from "next/link";
import { ProjectCard } from "@/utils/types";
import { title } from "process";
const CardProject: React.FC<ProjectCard> = ({ title, subtitle, date }) => {
  return (
    <>
      <Link
        href={`/work-experience/#${title}`}
        className=" text-shadow-small custom-shadow-box bg-white backdrop-blur-lg bg-opacity-40 text-white w-[95%] md:w-1/2 lg:w-1/3 p-3 flex flex-col gap-2 border-white/40 rounded border font-semibold hover:scale-[1.02] transition-all"
      >
        <div className=" text-xl">{subtitle}</div>
        <div className=" font-bold text-2xl text-center text-greenDarker">
          {title}
        </div>
        <div className=" text-right text-white">{date}</div>
      </Link>
    </>
  );
};

export default CardProject;
