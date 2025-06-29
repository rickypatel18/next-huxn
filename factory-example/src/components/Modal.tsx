import type { ModalProps } from "../utils/types";

const Modal = ({ header, content, footer }: ModalProps) => {
  return (
    <div>
      <h2>{header}</h2>
      <p>{content}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default Modal;
