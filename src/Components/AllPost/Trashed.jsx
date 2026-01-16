import { useContext } from "react";
import { MyDeleteContext } from "../../Context/Delete";
const Trashed = () => {
  const { transh, setTrashed, addTrashed } = useContext(MyDeleteContext);
  //   console.log(Trashed);
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
            {/* <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody className="text-center ">
          {transh.map((item, i) => (
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {item.title}
              </th>
              <td>{item.category}</td>

              {/* <td className="flex gap-3 justify-center h-full items-center mt-2.5  ">
                  <button className="cursor-pointer ">
                    <img src={update} alt="" />
                  </button>
                  <button className="cursor-pointer">
                    <img src={hapus} alt="" />
                  </button>
                </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trashed;
