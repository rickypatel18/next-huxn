import { useRef, type FormEvent } from "react";

const Uncontrolled = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const hairColorInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (nameInput.current && ageInput.current && hairColorInput.current) {
      console.log(
        nameInput.current.value,
        ageInput.current.value,
        hairColorInput.current.value
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameInput}
        type="text"
        className="border"
        name="name"
        placeholder="name here"
      />
      <input
        ref={ageInput}
        type="number"
        className="border"
        name="age"
        placeholder="age here"
      />
      <input
        ref={hairColorInput}
        type="text"
        className="border"
        name="hairColor"
        placeholder="hair color"
      />
      <input
        type="submit"
        name="submit"
        placeholder="Submit"
        className="border p-2"
      />
    </form>
  );
};

export default Uncontrolled;
