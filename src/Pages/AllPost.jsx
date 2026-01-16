import { useContext, useState } from "react";
import add from "../assets/Icont/add1.svg";
import Drafts from "../Components/AllPost/Drafts";
import Published from "../Components/AllPost/Published";
import Trashed from "../Components/AllPost/Trashed";
import { PublishContext } from "../Context/Publish";
import { MyDeleteContext } from "../Context/Delete";
import { MyDraftContext } from "../Context/Draft";

const AllPost = () => {
  const [tab, setTab] = useState("publish");
  const { arrPublish, addPublish, UpdatePublish, deletePublish } =
    useContext(PublishContext);
  const { addTrashed, transh } = useContext(MyDeleteContext);
  const { draft } = useContext(MyDraftContext);
  const renderContext = () => {
    switch (tab) {
      case "publish":
        return <Published />;
      case "drafts":
        return <Drafts />;
      case "trashed":
        return <Trashed />;
      default:
        return null;
    }
  };
  return (
    <div className="px-5 flex flex-col">
      <h1 className="font-bold text-[1.3rem]">All Post</h1>
      <div className="flex justify-between">
        <div className="flex gap-4 ">
          <button
            onClick={() => setTab("publish")}
            className={`${
              tab === "publish"
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-500"
            } cursor-pointer`}
          >
            Published Trashed {"("}
            {arrPublish.length}
            {")"}
          </button>
          <button
            onClick={() => setTab("drafts")}
            className={`cursor-pointer ${
              tab === "drafts"
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            Drafts {"("}
            {draft.length}
            {")"}
          </button>
          <button
            onClick={() => setTab("trashed")}
            className={`cursor-pointer ${
              tab === "trashed"
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
          >
            Trashed {"("}
            {transh.length}
            {")"}
          </button>
        </div>
        {/* <div>
          <button className="bg-[#3376df] text-white py-2 px-4 rounded shadow flex items-center gap-2 cursor-pointer hover:bg-blue-500 active:bg-blue-500">
            <img src={add} alt="" />
            Add New Post
          </button>
        </div> */}
      </div>
      <div>
        {renderContext()}
        {/* <Published /> */}
        {/* <Trashed /> */}
        {/* <Drafts /> */}
      </div>
    </div>
  );
};

export default AllPost;
