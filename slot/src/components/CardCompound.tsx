import type { ReactNode } from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";

const CardCompound = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

CardCompound.Title = CardTitle;
CardCompound.Content = CardContent;

export default CardCompound;
