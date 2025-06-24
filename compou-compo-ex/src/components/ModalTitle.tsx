import type { ReactNode } from "react";

const ModalTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2 className="text-xl ">{children}</h2>
    </div>
  );
};

export default ModalTitle;
