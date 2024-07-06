import { navItems } from "../helpers/data"
import { PiDotsThree } from "react-icons/pi";

export const Navigation = () => {
  return (
    <div className="flex gap-3 items-center px-6 ">
        <h1 className="font-bold">Constructor</h1>
        <ul className="lg:flex gap-4 font-normal ml-6 hidden">
            {navItems.map((item)=>(
                <li className="text-[#6B7A99] font-semibold text-xs" key={item.id}>{item.name}</li>
            ))}
        </ul>
        <PiDotsThree className="hidden lg:block"/>
    </div>
  )
}
