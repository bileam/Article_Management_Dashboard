import { useContext, useState } from "react";
import { PublishContext } from "../Context/Publish";
import { MyDraftContext } from "../Context/Draft";

const Addpost = () => {
  const { addPublish } = useContext(PublishContext);
  const { addDraft } = useContext(MyDraftContext);

  const [form, setForm] = useState({
    title: "",
    Content: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({ title: "", Content: "", category: "" });
  };

  const handlePublish = (e) => {
    e.preventDefault();

    addPublish({
      id: Date.now(),
      ...form,
      status: "publish",
    });

    alert("data berhasil di publish");
    resetForm();
  };

  const handleDraft = () => {
    addDraft({
      id: Date.now(),
      ...form,
      status: "draft",
    });
    alert("data di masukkan ke draf");

    resetForm();
  };

  return (
    <div className="px-5 flex flex-col gap-4">
      <h1 className="font-bold text-[1.3rem]">Add New Post</h1>

      <form onSubmit={handlePublish} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Enter post title..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea
            name="Content"
            value={form.Content}
            onChange={handleChange}
            rows="6"
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Write your content..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="Enter category..."
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleDraft}
            className="px-6 py-2 border rounded-lg"
          >
            Draft
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-[#3376df] text-white rounded-lg"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addpost;
