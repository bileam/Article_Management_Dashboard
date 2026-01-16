import { createContext, useState } from "react";

export const MyPrevContext = createContext();
export const MyPrevProvider = ({ children }) => {
  const [preview, setPreview] = useState([]);
  // ini di pake jika datanya saat di refress akan hilang

  const addPreview = (data) => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    setPreview((prev) => [
      ...prev,
      {
        ...data,
        createdAt: formattedDate,
      },
    ]);
  };
  return (
    <MyPrevContext.Provider value={{ preview, setPreview, addPreview }}>
      {children}
    </MyPrevContext.Provider>
  );
};
