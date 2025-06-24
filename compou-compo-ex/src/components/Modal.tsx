import type { ReactNode } from "react";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg">{children}</div>
    </div>
  );
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
