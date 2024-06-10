import React from "react";
import { skills } from "@/app/HomePage";
const HomeSkills = () => {
  return (
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
              {Object.values(category)[0].map((skill: string, idx: any) => (
                <li key={idx} className="text-lg">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSkills;
