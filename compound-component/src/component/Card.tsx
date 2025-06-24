import CardContent from "./CardContent";
import CardTitle from "./CardTitle";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="border p-4">{children}</div>;
};

Card.title = CardTitle
Card.content = CardContent

export default Card;
