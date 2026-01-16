import { useContext, useState } from "react";
import update from "../../assets/Icont/Update.svg";
import hapus from "../../assets/Icont/delete.svg";
import Modal from "./Modal";
import { PublishContext } from "../../Context/Publish";
import { MyDeleteContext } from "../../Context/Delete";

const Published = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const { arrPublish, addPublish, UpdatePublish, deletePublish } =
    useContext(PublishContext);
  const { addTrashed } = useContext(MyDeleteContext);
  const handleHapus = (id) => {
    deletePublish(id, addTrashed);
    alert("data dimasukkan ke thrash");
  };
  return (
    <div className="mt-6 max-h-99 overflow-y-auto">
      <table className="w-full text-[0.8rem] rtl:text-center text-body text-stars ">
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b ">
          <tr className="bg-[#fafafa] rounded">
            <th scope="col" className="px-6 py-3 font-medium">
              Title
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Category
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {arrPublish.map((item, i) => (
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {item.title}
              </th>
              <td>{item.category}</td>

              <td className="flex gap-3 justify-center h-full items-center mt-2.5  ">
                <button
                  onClick={() => setEditData(item)}
                  //   onClick={() => setOpenModal(true)}
                  className="cursor-pointer "
                >
                  <img src={update} alt="" />
                </button>
                <button
                  onClick={() => handleHapus(item.id)}
                  className="cursor-pointer"
                >
                  <img src={hapus} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editData && <Modal data={editData} onClose={() => setEditData(null)} />}

      {/* {openModal && <Modal onClose={() => setOpenModal(false)} />} */}
    </div>
  );
};

export default Published;
