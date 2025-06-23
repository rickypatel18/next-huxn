import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = "";

    if (!name && !age) {
      newError = "All fields are required";
    } else if (!name) {
      newError = "Name is required";
    } else if (!age) {
      newError = "Age is required";
    } else if (name.length <= 2) {
      newError = "Name must be more than 2 characters";
    }

    setError(newError);

    // Only clear and log if there are no errors
    if (!newError) {
      console.log(name, age);
      setName("");
      setAge("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        <input
          value={name}
          type="text"
          className="border"
          name="name"
          placeholder="name here"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={age}
          type="number"
          className="border"
          name="age"
          placeholder="age here"
          onChange={(e) => setAge(e.target.value)}
          min="1"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Controlled;
