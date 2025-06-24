import type { ReactNode } from "react";

const CardTitle = ({children}:{children: ReactNode}) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default CardTitle;
