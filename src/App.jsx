import React, { useState, createContext } from "react";
import B from "./Components/B";
import C from "./Components/C";


export const MyContext = createContext(null);



export default function App() {
  const [x,setX] = useState(10)
  const [y,setY] = useState(10)
  return (
    <MyContext.Provider value={{ x, y, setY, setX }}>
      <B />
      <C />
    </MyContext.Provider>
  );
}
