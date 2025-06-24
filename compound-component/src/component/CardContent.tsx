import type { ReactNode } from "react";

const CardContent = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default CardContent;
