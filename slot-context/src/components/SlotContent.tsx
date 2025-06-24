import { useMyContext } from "../hooks/useMyContext";

const SlotContent = () => {
  const { setValue } = useMyContext();

  return (
    <button onClick={() => setValue("new value")}>Update context value</button>
  );
};

export default SlotContent;
