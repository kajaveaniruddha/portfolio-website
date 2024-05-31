import React from "react";
import Link from "next/link";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <div className="flex items-center space-x-4 pt-6 ">
      <Link
        href="https://www.linkedin.com/in/aniruddhakajave"
        target="_blank"
        passHref
        className=" hover:text-red-600 transition-colors"
      >
        <IconBrandLinkedin size={24} />
      </Link>
      <Link
        href="https://github.com/kajaveaniruddha"
        className=" hover:text-red-600 transition-colors"
        target="_blank"
        passHref
      >
        <IconBrandGithub size={24} />
      </Link>
      <Link
        href="mailto:aakajave@gmail.com"
        className=" hover:text-red-600 transition-colors"
        target="_blank"
        passHref
      >
        <IconMail size={24} />
      </Link>
    </div>
  );
};

export default Contact;
