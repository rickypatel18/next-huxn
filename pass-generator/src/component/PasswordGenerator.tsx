import usePasswordStore from "../store";

const PasswordGenerator = () => {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatePassword,
  } = usePasswordStore();

  const handleGeneratePassword = () => {
    generatePassword();
  };

  return (
    <div className="p-8 w-[40rem] mx-auto bg-white">
      <h1 className="text-2xl">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-700"
          >
            Password Length
          </label>
          <input
            type="text"
            id="length"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
            min={4}
            max={64}
            className="mt-1 block w-full px-3 py-2 border"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={toggleNumbers}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Number
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={toggleSymbols}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Symbols
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={toggleUppercase}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Uppercase
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={toggleLowercase}
          />
          <label htmlFor="" className="ml-2 text-sm">
            Include Lowercase
          </label>
        </div>

        <button
          onClick={handleGeneratePassword}
          className="mt-4 px-4 py-2 bg-blue-500 text-white"
        >
          Generate Password
        </button>

        {generatedPassword && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="text-lg break-all">{generatedPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
