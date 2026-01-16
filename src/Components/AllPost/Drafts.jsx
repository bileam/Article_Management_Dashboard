import update from "../../assets/Icont/Update.svg";
import hapus from "../../assets/Icont/delete.svg";
import { MyDraftContext } from "../../Context/Draft";
import { useContext } from "react";
import { MyDeleteContext } from "../../Context/Delete";
import { PublishContext } from "../../Context/Publish";

const Drafts = () => {
  const { draft, deleteDraft } = useContext(MyDraftContext);
  const { addTrashed } = useContext(MyDeleteContext);
  const { addPublish } = useContext(PublishContext);
  // console.log(draft);
  const handleDraft = (id) => {
    deleteDraft(id, addTrashed);
    alert("data dimasukkan ke thrash");
  };

  const handlePublish = (id) => {
    deleteDraft(id, addPublish);
    alert("Data di Publish");
  };
  return (
    <div className="mt-6 max-h-99 overflow-y-auto">
      <table className="w-full text-[0.8rem] rtl:text-center text-body text-stars">
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
          {draft.map((item, i) => (
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
                  onClick={() => handlePublish(item.id)}
                  className="cursor-pointer text-blue-600 hover:border-b"
                >
                  Publish{" "}
                </button>{" "}
                {" ||"}
                <button
                  onClick={() => handleDraft(item.id)}
                  className="cursor-pointer text-red-500 hover:border-b"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Drafts;
