import type { ReactNode } from "react";

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-4 justify-end">
      <p className="text-lg">{children}</p>
    </div>
  );
};

export default ModalFooter;
