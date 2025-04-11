import { createContext, useState } from "react";

export const ColorContext = createContext({
  color: "",
  handleColorChange: () => {},
});

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState("white");

  const handleColorChange = (c) => {
    setColor(c);
  };

  return (
    <ColorContext.Provider value={{ color, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};
