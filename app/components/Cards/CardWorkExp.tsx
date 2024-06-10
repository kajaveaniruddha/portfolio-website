import Link from "next/link";
import { WorkCard } from "@/utils/types";

const CardWorkExp: React.FC<WorkCard> = ({
  company,
  role,
  start_date,
  end_date,
}) => {
  return (
    <>
      <Link
        href={`/work-experience/#${company}`}
        className="text-shadow-small custom-shadow-box bg-white backdrop-blur-lg bg-opacity-40 text-greenDarker w-[95%] md:w-1/2 lg:w-1/3 p-3 flex flex-col gap-2 border-white/40 rounded border font-semibold hover:scale-[1.02] transition-all"
      >
        <div className="text-xl">{company}</div>
        <div className="font-bold text-2xl text-center text-white">{role}</div>
        <div className="text-right text-white">{`${start_date} ~ ${end_date}`}</div>
      </Link>
    </>
  );
};

export default CardWorkExp;
