import { PiDotsThree } from "react-icons/pi";
import { LuArrowRight } from "react-icons/lu";
import { debitcard } from "../assets";

const AccountCard = () => {
  return (
    <div className="flex w-full text-sm mt-10 flex-col">
      <div className="flex w-full justify-between items-center">
        <p className="">Accounts and Cards</p>
        <PiDotsThree className="" />
      </div>

      {
        card.map((item)=>(
        <div className="flex justify-between pt-2 items-center" key={item.id}>
        <img src={debitcard} alt="" className="w-10" />
        <div>
          <p className="text-xs font-semibold">{item.type}</p>
          <p className="text-xs font-semibold">{item.price} $</p>
        </div>
        <div className="bg-white w-8 h-8 my-auto rounded-full flex border flex-col">
          <LuArrowRight className="m-auto" />
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default AccountCard;


const card = [
    {
        id:1,
        type:'Master Card',
        price:"1,856",
        img:debitcard
    },
    {
        id:2,
        type:'Master Card',
        price:"2,456",
        img:debitcard
    },
    {
        id:3,
        type:'Master Card',
        price:"600",
        img:debitcard
    },
]