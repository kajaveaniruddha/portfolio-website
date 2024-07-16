import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className=" mx-2 w-10 flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" /> */}
        <svg
          id="logo"
          width="294"
          height="50"
          viewBox="0 0 294 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M208.548 189V149.703L216.387 142.44L254.857 191.169L255.908 192.5H257.604H278.911H286.149L281.655 186.827L234.079 126.772L277.991 82.3702L283.886 76.4091H275.502H254.763H253.296L252.267 77.4562L208.548 121.956V43.5455V40.0455H205.048H188.286H184.786V43.5455V189V192.5H188.286H205.048H208.548V189Z"
            stroke="white"
            strokeWidth="7"
          />
          <path
            d="M33.4744 192.5H35.9459L36.7728 190.171L54.2248 141.009H122.809L140.261 190.171L141.088 192.5H143.56H166.642H171.656L169.928 187.794L103.166 5.97542L102.324 3.68182H99.8807H77.1534H74.7101L73.8679 5.97542L7.10652 187.794L5.37838 192.5H10.392H33.4744ZM88.517 44.4076L113.391 114.477H63.6431L88.517 44.4076Z"
            stroke="white"
            strokeWidth="7"
          />
        </svg>
      </div>
      <div className="m-8 flex items-center justify-center text-2xl gap-4">
        <a target="_blank" href="https://linkedin.com/in/aniruddhakajave">
          <FaLinkedin className="hover:text-blue-600 hover:-translate-y-[1px] transition-all " />
        </a>
        <a target="_blank" href="https://github.com/kajaveaniruddha">
          <FaGithub className="hover:text-white hover:-translate-y-[1px] transition-all " />
        </a>
        <a target="_blank" href="https://leetcode.com/u/aakajave/">
          <SiLeetcode className="hover:text-yellow-500 hover:-translate-y-[1px] transition-all " />
        </a>
        {/* <a target="_blank" href="https://www.codechef.com/users/aniii1802">
          <SiCodechef className="hover:text-white hover:-translate-y-[1px] transition-all " />
        </a> */}
        {/* <a target="_blank" href="https://codeforces.com/profile/Aniii_1802">
          <SiCodeforces className="hover:text-red-500 bg-clip-text hover:-translate-y-[1px] transition-all " />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
