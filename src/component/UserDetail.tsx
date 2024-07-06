import { FaRegUser } from "react-icons/fa";
import { PiDotsThree } from "react-icons/pi";
import { nine } from "../assets";

const UserDetail = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between items-center">
        <FaRegUser className="text-[#6B7A99]" />
        <PiDotsThree className="" />
      </div>
      <div className="w-[7rem] h-[7rem] mx-auto rounded-full flex mt-8 justify-center items-center">
        <div className="mx-auto text-center">
          <img src={nine} alt="" className="w-full" />
          <p className="flex justify-center items-center mt-4 text- font-semibold text-[#6B7A99] ">
            Clayton Santos
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
