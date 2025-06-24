import type { CardProps } from "../utils/types";

const Card = ({ title, content, footer }: CardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default Card;
