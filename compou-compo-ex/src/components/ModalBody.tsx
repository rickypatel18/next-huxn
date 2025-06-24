import type { ReactNode } from "react";

const ModalBody = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p className="text-lg">{children}</p>
    </div>
  );
};

export default ModalBody;
