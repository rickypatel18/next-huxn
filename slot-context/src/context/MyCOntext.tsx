import React, { createContext, useState } from "react";

interface MyContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState("Hello from context");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
