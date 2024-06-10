"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";
import { Tooltip } from "@mantine/core";
interface Props {
  href: string;
  tool_tip: string;
  icon: React.ReactNode; // Accept an icon component as a prop
}

const TransitionLink = ({ href, tool_tip, icon }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <Tooltip label={tool_tip} withArrow transitionProps={{ duration: 200 }} offset={20}>
      <button
        className="text-xl text-lightYellow transition-all hover:text-orange"
        onClick={handleClick}
      >
        {icon}
      </button>
    </Tooltip>
  );
};

export default TransitionLink;
