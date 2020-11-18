import React, { createContext, useState, useContext } from "react";
import marketData from "../components/data.json";

const DataContext = createContext();
export const useData = () => useContext(DataContext);
export function DataProvider({ children }) {
  const [data] = useState(marketData);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}
