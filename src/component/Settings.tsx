import { PiDotsThree } from "react-icons/pi";
import { LuArrowRight } from "react-icons/lu";

const Settings = () => {
  return (
    <div className="flex w-full text-sm mt-10 flex-col">
      <div className="flex w-full justify-between items-center">
        <p className="font-semibold">Settings</p>
        <PiDotsThree className="" />
      </div>

      {card.map((item) => (
        <div className="flex gap-4 pt-2 items-center" key={item.id}>
          <div className="bg-white w-8 h-8 my-auto rounded-full flex border flex-col">
            <LuArrowRight className="m-auto" />
          </div>
          <p className="text-xs font-semibold">{item.type}</p>
        </div>
      ))}

      <div className="h-[200px] w-full bg-[#FEB35F] mt-5 rounded-md">

      </div>
    </div>
  );
};

export default Settings;

const card = [
  {
    id: 1,
    type: "Personal information",
  },
  {
    id: 2,
    type: "Documents and References",
  },
  {
    id: 3,
    type: "Security & Codes",
  },
  {
    id: 4,
    type: "Account settings",
  },
];
