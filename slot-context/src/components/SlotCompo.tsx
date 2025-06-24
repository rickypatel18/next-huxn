import type { ReactNode } from "react";
import { useMyContext } from "../hooks/useMyContext";

const SlotCompo = ({ children }: { children: ReactNode }) => {
  const { value } = useMyContext();

  return (
    <div>
      COntext vlaue : {value}
      <div>{children}</div>
    </div>
  );
};

export default SlotCompo;
