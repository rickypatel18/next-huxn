import type { ReactNode } from "react";

interface CardProps {
  cardTitle: ReactNode;
  cardContent: ReactNode;
}
const CardNamed = ({ cardTitle, cardContent }: CardProps) => {
  return (
    <div className="border">
      {cardTitle}
      {cardContent}
    </div>
  );
};

export default CardNamed;
