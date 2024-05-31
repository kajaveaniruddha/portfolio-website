"use client";
import React from "react";
import { WorkCard, ProjectCard } from "../../utils/types";
import { IconBriefcase, IconComponents } from "@tabler/icons-react";
import { Text, Group, HoverCard } from "@mantine/core";

interface CardsProps {
  card: WorkCard | ProjectCard;
}

const Cards: React.FC<CardsProps> = ({ card }) => {
  return (
    <Group justify="center">
      <HoverCard shadow="md">
        <HoverCard.Target>
          <div className="w-full border-2 bg-white bg-opacity-[0.05] p-3 h-[12rem] flex flex-col justify-around rounded shadow-md hover:cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all ">
            <div className=" h-[4rem] ">
              {card?.icon === "IconComponents" ? (
                <IconComponents />
              ) : (
                <IconBriefcase />
              )}
            </div>
            <div className=" h-full">
              <h2 className="font-semibold text-2xl text-red-600">
                {"company" in card ? card.company : card.title}
              </h2>
              <h3 className="text-md font-light text-yellow-400 ">
                {"role" in card ? card.role : card.subtitle}
              </h3>
            </div>
            <p className="text-xs text-right bottom-0">
              {"start_date" in card
                ? `${card.start_date} - ${card.end_date}`
                : card.date}
            </p>
          </div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="md" w={300} fw={600} c="blue">
            {card.introduction.map((intro, idx) => (
              <p key={idx}>{intro}</p>
            ))}
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
};

export default Cards;
