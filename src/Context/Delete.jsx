import { createContext, useState } from "react";

export const MyDeleteContext = createContext();
export const MyDeleteProvider = ({ children }) => {
  const [transh, setTrashed] = useState([]);
  // ini di pake jika datanya saat di refress akan hilang
  const addTrashed = (data) => {
    setTrashed((prev) => [...prev, data]);
  };
  return (
    <MyDeleteContext.Provider value={{ transh, setTrashed, addTrashed }}>
      {children}
    </MyDeleteContext.Provider>
  );
};
