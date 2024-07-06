import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div className="bg-white rounded-full hidden xl:flex items-center py-2 px-4 md:hidden">
        <CiSearch /> <input type="search" name="" className="border-0 px-2 text-sm" id="" title="search" placeholder="Search Transactions and Documents" />
    </div>
  )
}
