import { CiBellOn } from "react-icons/ci";
import { FaSearch, FaUser } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

export const Account = () => {
  return (
    <div className="flex justify-between items-center gap-3">
      <div className="bg-white w-5 h-5 my-auto rounded-full flex border flex-col">
        <FaUser className="m-auto text-[#c3cad9] text-xs " />
      </div>
      <h2 className="text-sm hidden text-[#6B7A99] md:flex">Clayton Santos</h2>
      <div className="bg-white w-8 h-8 my-auto rounded-full xl:hidden hidden md:flex border flex-col">
        <FaSearch className="m-auto text-[#c3cad9] font-thin bg-white rounded-full " />
      </div>
      <div className="bg-white w-8 h-8 my-auto relative rounded-full hidden md:flex border flex-col">
        <CiBellOn className="m-auto bg-[] rounded-full" />
        <div className=" absolute right-0 w-2 h-2 rounded-full bg-red-500"></div>
      </div>
      <div className="bg-white w-8 h-8 my-auto rounded-full hidden md:flex border flex-col">
        <LiaTimesSolid className="m-auto bg-[#c3cad9] text-white rounded-full " />
      </div>
      <div className="bg-white w-8 h-8 my-auto rounded-full xl:hidden md:hidden lg:flex hidden  border flex-col">
        <FaUser className="m-auto bg-[#c3cad9] text-white rounded-full " />
      </div>
      <div className="bg-white w-8 h-8 my-auto rounded-full lg:hidden  hidden md:flex border flex-col">
        <LiaTimesSolid className="m-auto text-[#c3cad9] bg-white rounded-full " />
      </div>
    </div>
  );
};
