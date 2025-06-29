interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="bg-white p-[20px] border">
        <span
          className="flex justify-end text-[red] cursor-pointer"
          onClick={onClose}
        >
          X
        </span>
        <h2>Modal Title</h2>
        <p>This is a Modal paragraph</p>
      </div>
    </div>
  );
};

export default Modal;
