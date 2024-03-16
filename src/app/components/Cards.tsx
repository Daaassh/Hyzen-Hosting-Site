import React from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface CardsProps {
  title: string;
  content: string;
  emoji: React.ReactNode; 
}
const Cards: React.FC<CardsProps> = ({ title, content, emoji }) => {
  return (
    <Card className="w-[300px] h-[250px] shadow-medium shadow-blue-700/40 text-white bg-transparent ">
      <CardHeader className="flex">
        <div className="flex items-center justify-center">
          {emoji}
          <p className="ml-4 font-bold text-[23px]">
            {title}
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};

export default Cards;