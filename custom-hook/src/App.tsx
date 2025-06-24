// import MyForm from "./component/MyForm";
// import WithCustomHooks from "./component/WithCustomHooks";
// import ThemeToggle from "./component/ThemeToggle";
// import Modal from "./component/Modal";
// import { useModal } from "./hooks/useModal";
import React, { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { usePrevious } from "./hooks/usePrevious";

const App = () => {
  // const { isOpen, openModal, closeModal } = useModal();

  const [inputvalue, setInputvalue] = useState("");
  const debounceInput = useDebounce(inputvalue, 500);
  const prevValue = usePrevious(inputvalue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputvalue(e.target.value);
  };

  return (
    <div>
      {/* <WithCustomHooks /> */}
      {/* <MyForm/> */}
      {/* <ThemeToggle /> */}
      {/* <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} /> */}
      <div className="mt-5">
        <h2>Debounce example</h2>
        <input
          type="text"
          className="border p-2 rounded-2xl"
          value={inputvalue}
          onChange={handleInputChange}
          placeholder="Type to debounce"
        />

        <p>Debounced Value :{debounceInput}</p>
        <p>Prevoius value : {prevValue}</p>
      </div>
    </div>
  );
};

export default App;
