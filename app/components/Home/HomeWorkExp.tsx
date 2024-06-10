import React from "react";
import { work_experience } from "@/app/HomePage";
import { WorkCard} from "@/utils/types";
import CardWorkExp from "../Cards/CardWorkExp";
const HomeWorkExp = () => {
  return (
    <section className="bg-greenDark w-full h-screen relative">
      <div className="circle w-96 aspect-square bg-orange absolute -top-4 -left-20 z-0" />
      <h2 className="text-shadow text-lightYellow font-semibold text-6xl lg:text-7xl z-10 relative p-4">
        Work Experience
      </h2>
      <div className=" w-[90%] mx-auto pt-4 relative z-20 space-y-2">
        {work_experience.map((we) => {
          let weCard: WorkCard = {
            id: we?.id,
            company: we?.company,
            role: we?.role,
            start_date: we?.start_date,
            end_date: we?.end_date,
          };
          return <CardWorkExp key={weCard.id} {...weCard} />;
        })}
      </div>
    </section>
  );
};

export default HomeWorkExp;
