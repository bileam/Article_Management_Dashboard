import { createContext, useEffect, useState } from "react";
import { DataPublish } from "./datas";
// import { json } from "stream/consumers";

export const PublishContext = createContext();
export const PublishPorvider = ({ children }) => {
  const [arrPublish, setArrPublish] = useState(DataPublish);

  const addPublish = (datas) => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setArrPublish((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...datas,
        createdAt: formattedDate,
      },
    ]);
  };

  // Add & Update produk
  const UpdatePublish = (datas) => {
    setArrPublish((prev) => {
      const exist = prev.find((item) => item.id === datas.id);

      if (exist) {
        return prev.map((item) =>
          item.id === datas.id ? { ...item, ...datas } : item
        );
      }

      return [...prev, datas];
    });
  };

  const deletePublish = (id, moveToTrash) => {
    setArrPublish((prev) => {
      const target = prev.find((item) => item.id === id);

      if (target && moveToTrash) {
        moveToTrash(target);
      }

      return prev.filter((item) => item.id !== id);
    });
  };
  const deletebyid = (id) => {
    setArrPublish((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PublishContext.Provider
      value={{
        deletebyid,
        arrPublish,
        addPublish,
        UpdatePublish,
        deletePublish,
      }}
    >
      {children}
    </PublishContext.Provider>
  );
};
