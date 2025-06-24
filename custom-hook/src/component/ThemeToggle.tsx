import { useLocalStorage } from "../hooks/useLocalStorage";
// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState<string>("light");

//   useEffect(() => {
//     const storedTheme = window.localStorage.getItem("theme");
//     if (storedTheme) {
//       setTheme(JSON.parse(storedTheme));
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     window.localStorage.setItem("theme", JSON.stringify(newTheme));
//   };

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#FFF" : "#333",
//         color: theme === "light" ? "#333" : "#FFF",
//         padding: "20px",
//       }}
//     >
//       <h1>Current Theme : {theme}</h1>
//       <button onClick={toggleTheme} style={{ background: "red" }}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;
const ThemeToggle = () => {
  const [storedValue, setValue] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setValue((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: storedValue === "light" ? "#FFF" : "#2d2d2d",
        color: storedValue === "light" ? "#2d2d2d" : "#FFF",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <h1>Current Theme: {storedValue}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
