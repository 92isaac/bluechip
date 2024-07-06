import {
  PiCompassDuotone,
  PiStarDuotone,
  PiMessengerLogoDuotone,
  PiPlus,
  PiChartBar,
} from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import { MdShowChart } from "react-icons/md";
import { eight, five, one, three } from "../assets";

const Sidebar = () => {
  return (
    <aside className="h- hidden xl:flex flex-col justify-between w-[4.7rem] border-r-2 ">
      <div className="flex flex-col mt-5">
        <ul className="flex gap-4 flex-col">
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
            <PiCompassDuotone />
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
            <PiStarDuotone />
          </li>
          <li className="flex justify-center items-center relative bg-white w-8 h-8 mx-auto rounded-full">
            <PiMessengerLogoDuotone />
            <div className=" absolute right-0 top-0 w-2 h-2 rounded-full bg-red-500"></div>
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
            <MdShowChart />
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
            <GiWorld />
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
            <PiChartBar />
          </li>
        </ul>
      </div>
      <div className="flex flex-col mb-5">
        <ul className="flex gap-4 flex-col">
          <li className="flex justify-center relative items-center bg-white w-8 h-8 mx-auto rounded-full">
            <img src={three} alt="" className="w-full rounded-full" />
            <div className=" absolute right-0 top-0 w-2 h-2 rounded-full bg-[#3361FF]"></div>
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
            <img src={one} alt="" className="w-full rounded-full" />
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
          <img src={five} alt="" className="w-full rounded-full" />
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
          <img src={eight} alt="" className="w-full rounded-full" />
          </li>
          <li className="flex justify-center items-center bg-white w-8 h-8 mx-auto rounded-full">
          <PiPlus className="w-full rounded-full" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
