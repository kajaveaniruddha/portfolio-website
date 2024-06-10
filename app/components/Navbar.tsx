import React from "react";
import TransitionLink from "./TransitionLink";
import Link from "next/link";
import {
  IconHome2,
  IconBriefcase,
  IconPaperclip,
  IconCode,
} from "@tabler/icons-react"; // Import appropriate icons
import { Tooltip } from "@mantine/core";
const Navbar = () => {
  return (
    <div className="w-fit px-4 shadow-lg transition-transform border hover:scale-105 hover:shadow-xl border-black/50 mx-auto h-10 bg-greenDarker fixed right-1/2 translate-x-1/2 rounded top-4 z-[300] flex space-x-4 items-center">
      <TransitionLink href="/" tool_tip="Home" icon={<IconHome2 size={24} />} />

      <TransitionLink
        href="/work-experience"
        tool_tip="Work Experience"
        icon={<IconBriefcase size={24} />}
      />
      <TransitionLink
        href="/projects"
        tool_tip="Projects"
        icon={<IconCode size={24} />}
      />
      <Tooltip
        offset={20}
        label="Resume"
        withArrow
        transitionProps={{ duration: 200 }}
      >
        <Link
          target="_blank"
          href={
            "https://drive.google.com/file/d/10KwyY-vFs4flIs9HBV2iN4ATaszAuL-f/view?usp=drive_link"
          }
          className="text-xl text-lightYellow transition-all hover:text-orange"
        >
          <IconPaperclip size={24} />
        </Link>
      </Tooltip>
    </div>
  );
};

export default Navbar;
