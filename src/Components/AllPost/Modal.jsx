import { useContext, useState } from "react";
import { PublishContext } from "../../Context/Publish";

import { MyDraftContext } from "../../Context/Draft";
import { MyPrevContext } from "../../Context/Preview";

const Modal = ({ data, onClose }) => {
  const { UpdatePublish, deletebyid } = useContext(PublishContext);
  const { addDraft } = useContext(MyDraftContext);
  const { preview, addPreview } = useContext(MyPrevContext);
  const [form, setForm] = useState({
    id: data.id,
    title: data.title,
    Content: data.Content || "",
    category: data.category,
    status: data.status || "publish",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSave = () => {
  //   onClose();
  // };

  const handleDraft = () => {
    addDraft({
      ...data,
      status: "Draft",
    });

    // 2. HAPUS dari publish berdasarkan ID
    deletebyid(data.id);
    onClose();
  };

  const handlePublish = () => {
    UpdatePublish(form);
    alert("telah di Publish silakan lihat di preview");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-120 bg-white rounded-xl shadow-2xl p-6 z-10">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Update Post</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-500">Edit Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Content</label>
            <textarea
              name="Content"
              value={form.Content}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
              rows={4}
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Edit Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2"
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={handleDraft}
            className="px-5 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
          >
            Draft
          </button>

          <button
            onClick={handlePublish}
            className="px-5 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
          >
            Publish
          </button>

          {/* <button
            onClick={handleSave}
            className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
          >
            Simpan
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
