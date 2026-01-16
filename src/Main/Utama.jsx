import { Outlet } from "react-router-dom";
import AllPost from "../Pages/AllPost";
import Sidebar from "../Pages/Sidebar";

const Utama = () => {
  return (
    <div className="flex flex-col ">
      <div className="px-5 py-2 bg-[#334a6a] text-white flex justify-between sticky w-full top-0">
        <div>
          <h1 className="text-[1.2rem]">Tes FrontEnd sharing Vision</h1>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src=""
            alt=""
            className="border w-3 h-3 rounded-full items-center"
          />

          <div className="flex items-center justify-center gap-2">
            <img
              src=""
              alt=""
              className="w-5 h-5 rounded-full border-black border-4"
            />
            <h1>admin</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <Sidebar />
        </div>
        <div className="py-5 shadow w-full">
          {/* <AllPost /> */}
          <Outlet />
          {/* jika di tekan all post maka akan ke halaman all post */}
        </div>
      </div>
    </div>
  );
};

export default Utama;
