import { useContext, useState } from "react";
import { MyPrevContext } from "../Context/Preview";
import { PublishContext } from "../Context/Publish";

const Preview = () => {
  const { preview } = useContext(MyPrevContext);
  const { arrPublish, addPublish, UpdatePublish, deletePublish } =
    useContext(PublishContext);

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(arrPublish.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPosts = arrPublish.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full px-3 sm:px-6 py-4">
      <h1 className="font-bold text-lg sm:text-xl mb-4">Preview</h1>

      {/* LIST */}
      <div className="flex flex-col gap-3 sm:min-w-120   px-2">
        {currentPosts.map((item) => (
          <div
            key={item.id}
            className="
              w-full bg-white rounded-xl shadow
              p-4 sm:p-6
              transition hover:shadow-md
              min-w-0 overflow-hidden
            "
          >
            {/* HEADER */}
            <div
              className="
              flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-2 mb-2
              min-w-0
            "
            >
              <h2
                className="
                text-base sm:text-lg font-semibold text-gray-800
                wrap-break-word truncate
                min-w-0
              "
              >
                {item.title}
              </h2>

              <span
                className="
                shrink-0 text-xs px-3 py-1 rounded-full
                bg-blue-100 text-blue-600 font-medium
              "
              >
                {item.category}
              </span>
            </div>

            {/* CONTENT – FIXED */}
            <p
              className="
                text-gray-600 text-sm leading-relaxed
                wrap-break-word
                overflow-hidden
                text-ellipsis
                line-clamp-2
                sm:line-clamp-3
                lg:line-clamp-4
                min-w-0
              "
            >
              {item.Content}
            </p>

            {/* FOOTER */}
            <div className="text-xs text-gray-400 mt-2">
              Dipublish pada {item.createdAt}
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div
          className="
          flex flex-wrap justify-center items-center
          gap-2 mt-6
        "
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 rounded border text-sm disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`
                px-3 py-1 rounded border text-sm
                ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : ""
                }
              `}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 rounded border text-sm disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Preview;
