"use client";
import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState("hello nextjs");


  

  return (
    <MyContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
