import allpost from "../assets/Icont/post.svg";
import preview from "../assets/Icont/preview.svg";
import addnew from "../assets/Icont/addbew.svg";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const baseClass =
    "flex gap-2 py-3 items-center cursor-pointer rounded-r transition duration-300 hover:bg-[#e6ecf8] hover:text-[#3376df]";

  const activeClass =
    "bg-[#e6ecf8] text-[#3376df] shadow scale-105 border-l-4 border-blue-500";
  return (
    <div className="flex flex-col text-[0.9rem] gap-2 bg-[#fafafa] shadow w-50   py-4 px-2">
      <div className="flex gap-2   py-3 rounded-r w-full justify-center font-bold text-[1.2rem]">
        <h1>Dashboard</h1>
      </div>
      <NavLink
        to="/all-post"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : ""}`
        }
      >
        <img src={allpost} alt="" className="pl-3" />
        <h1>All Post</h1>
      </NavLink>
      <NavLink
        to="/add-new"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : ""}`
        }
      >
        <img src={addnew} alt="" className="pl-3" />
        <h1>Add New</h1>
      </NavLink>
      <NavLink
        to="/preview"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : ""}`
        }
      >
        <img src={preview} alt="" className="pl-3" />
        <h1>Preview</h1>
      </NavLink>
    </div>
  );
};

export default Sidebar;
