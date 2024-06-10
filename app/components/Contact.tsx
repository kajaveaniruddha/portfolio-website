import React from "react";
import Link from "next/link";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLeetcode,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="flex items-center gap-4 text-greenDarker absolute right-10 lg:right-20 top-10 hover:scale-105 transition-all">
      <Link
        href="https://www.linkedin.com/in/aniruddhakajave"
        target="_blank"
        passHref
        className=" hover:text-orange transition-colors"
      >
        <IconBrandLinkedin size={30} />
      </Link>
      <Link
        href="https://github.com/kajaveaniruddha"
        className=" hover:text-orange transition-colors"
        target="_blank"
        passHref
      >
        <IconBrandGithub size={30} />
      </Link>
      <Link
        href="mailto:aakajave@gmail.com"
        className=" hover:text-orange transition-colors"
        target="_blank"
        passHref
      >
        <IconMail size={30} />
      </Link>
      <Link
        href="https://leetcode.com/u/aakajave/"
        className=" hover:text-orange transition-colors"
        target="_blank"
        passHref
      >
        <IconBrandLeetcode size={30} />
      </Link>
    </div>
  );
};

export default Contact;
