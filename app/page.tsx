import Sphere from "./components/Spehere";
import { WorkCard, ProjectCard } from "../utils/types";
import { work_experience, projects, skills } from "@/app/HomePage";
import ScrollToSkills, { ScrollTop } from "./components/ScrollToSkills";
import Contact from "./components/Contact";
import CardWorkExp from "./components/Cards/CardWorkExp";
import CardProject from "./components/Cards/CardProject";

export default function Home() {
  return (
    <main>
      <section className="bg-lightYellow relative h-screen flex max-md:flex-col gap-10 max-sm:gap-12 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" absolute max-sm:top-0 sm:hidden"
        >
          <path
            fill="#606c3850"
            fill-opacity="1"
            d="M0,224L6.2,234.7C12.3,245,25,267,37,266.7C49.2,267,62,245,74,229.3C86.2,213,98,203,111,213.3C123.1,224,135,256,148,272C160,288,172,288,185,272C196.9,256,209,224,222,213.3C233.8,203,246,213,258,186.7C270.8,160,283,96,295,106.7C307.7,117,320,203,332,213.3C344.6,224,357,160,369,160C381.5,160,394,224,406,240C418.5,256,431,224,443,208C455.4,192,468,192,480,186.7C492.3,181,505,171,517,192C529.2,213,542,267,554,293.3C566.2,320,578,320,591,304C603.1,288,615,256,628,256C640,256,652,288,665,288C676.9,288,689,256,702,229.3C713.8,203,726,181,738,181.3C750.8,181,763,203,775,229.3C787.7,256,800,288,812,256C824.6,224,837,128,849,106.7C861.5,85,874,139,886,165.3C898.5,192,911,192,923,181.3C935.4,171,948,149,960,122.7C972.3,96,985,64,997,58.7C1009.2,53,1022,75,1034,112C1046.2,149,1058,203,1071,197.3C1083.1,192,1095,128,1108,133.3C1120,139,1132,213,1145,224C1156.9,235,1169,181,1182,154.7C1193.8,128,1206,128,1218,112C1230.8,96,1243,64,1255,96C1267.7,128,1280,224,1292,229.3C1304.6,235,1317,149,1329,128C1341.5,107,1354,149,1366,149.3C1378.5,149,1391,107,1403,101.3C1415.4,96,1428,128,1434,144L1440,160L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
          ></path>
        </svg>
        <div className=" w-1/4 max-md:w-1/2">
          <Sphere />
        </div>
        <div className=" w-[95%] flex flex-col -translate-y-10 text-shadow-heading tracking-tight text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem]">
          <h1 className="uppercase text-greenDarker font-extrabold">
            <span className="text-[7rem] md:text-[8rem] lg:text-[12rem]">
              A
            </span>
            niruddha
          </h1>
          <h1 className="uppercase -mt-10 lg:-mt-20 text-greenDarker font-extrabold">
            Kajave
          </h1>
          <h3 className="text-[2rem] lg:text-[2.7rem] text-right w-[90%] tracking-normal">
            Software Developer
          </h3>
          <Contact />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="z-0 absolute -bottom-12 max-md:-bottom-0"
        >
          <path
            fill="#606C38"
            fill-opacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,160C840,149,960,171,1080,192C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/* Work Experience */}
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
            return <CardWorkExp {...weCard} />;
          })}
        </div>
      </section>
      {/* Projects */}
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
            return <CardProject {...projCard} />;
          })}
        </div>
      </section>
      {/* Skills */}
      <section className=" bg-lightYellow min-h-screen relative flex flex-col justify-center w-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" absolute top-0"
        >
          <path
            fill="#DDA15E"
            fill-opacity="1"
            d="M0,192L9.2,186.7C18.5,181,37,171,55,176C73.8,181,92,203,111,192C129.2,181,148,139,166,128C184.6,117,203,139,222,133.3C240,128,258,96,277,106.7C295.4,117,314,171,332,186.7C350.8,203,369,181,388,181.3C406.2,181,425,203,443,224C461.5,245,480,267,498,240C516.9,213,535,139,554,90.7C572.3,43,591,21,609,26.7C627.7,32,646,64,665,80C683.1,96,702,96,720,85.3C738.5,75,757,53,775,74.7C793.8,96,812,160,831,181.3C849.2,203,868,181,886,181.3C904.6,181,923,203,942,208C960,213,978,203,997,186.7C1015.4,171,1034,149,1052,160C1070.8,171,1089,213,1108,234.7C1126.2,256,1145,256,1163,218.7C1181.5,181,1200,107,1218,112C1236.9,117,1255,203,1274,213.3C1292.3,224,1311,160,1329,133.3C1347.7,107,1366,117,1385,144C1403.1,171,1422,213,1431,234.7L1440,256L1440,0L1430.8,0C1421.5,0,1403,0,1385,0C1366.2,0,1348,0,1329,0C1310.8,0,1292,0,1274,0C1255.4,0,1237,0,1218,0C1200,0,1182,0,1163,0C1144.6,0,1126,0,1108,0C1089.2,0,1071,0,1052,0C1033.8,0,1015,0,997,0C978.5,0,960,0,942,0C923.1,0,905,0,886,0C867.7,0,849,0,831,0C812.3,0,794,0,775,0C756.9,0,738,0,720,0C701.5,0,683,0,665,0C646.2,0,628,0,609,0C590.8,0,572,0,554,0C535.4,0,517,0,498,0C480,0,462,0,443,0C424.6,0,406,0,388,0C369.2,0,351,0,332,0C313.8,0,295,0,277,0C258.5,0,240,0,222,0C203.1,0,185,0,166,0C147.7,0,129,0,111,0C92.3,0,74,0,55,0C36.9,0,18,0,9,0L0,0Z"
          ></path>
        </svg>
        <h2 className="text-shadow text-center text-greenDark font-semibold text-6xl lg:text-7xl z-10 relative p-4 items-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 relative">
          {skills.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-greenDarker">
                {Object.keys(category)[0]}
              </h3>
              <ul className="list-disc list-inside text-greenDarker">
                {Object.values(category)[0].map((skill:string, idx:any) => (
                  <li key={idx} className="text-lg">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <ScrollToSkills />
      <ScrollTop />
    </main>
  );
}
