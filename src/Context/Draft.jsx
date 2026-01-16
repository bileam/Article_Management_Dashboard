import { createContext, useState } from "react";

export const MyDraftContext = createContext();
export const MyDraftProvider = ({ children }) => {
  const [draft, setDraft] = useState([]);
  // ini di pake jika datanya saat di refress akan hilang

  const addDraft = (data) => {
    setDraft((prev) => [...prev, data]);
  };

  const deleteDraft = (id, moveToTrash) => {
    setDraft((prev) => {
      const target = prev.find((item) => item.id === id);

      if (target && moveToTrash) {
        moveToTrash(target);
      }

      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <MyDraftContext.Provider value={{ draft, setDraft, deleteDraft, addDraft }}>
      {children}
    </MyDraftContext.Provider>
  );
};
