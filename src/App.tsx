import { CiMenuBurger } from "react-icons/ci";
import Sidebar from "./component/Sidebar";
import { Navigation } from "./component/Navigation";
import { Search } from "./component/Search";
import { Account } from "./component/Account";
import SendMoney from "./component/SendMoney";
import CardFeatures from "./component/CardFeatures";
import { PiDotsThree } from "react-icons/pi";
import { chosenPeople, iconsData } from "./helpers/data";
import CardIcon from "./component/CardIcon";
import UserDetail from "./component/UserDetail";
import AccountCard from "./component/AccountCard";
import Settings from "./component/Settings";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { LuArrowRight } from "react-icons/lu";

function App() {
  const isTabletOrPhone = useMediaQuery({ query: "(max-width: 769px)" });
  const sliceStart = isTabletOrPhone ? 0 : 3;
  const [sidebarState, setSidebarState] = useState(true);
  return (
    <section className="min-h-screen bg-[#f7f8fa]">
      <nav className="h-[75px] border-b-2 flex gap-10 items-center mx-auto px-5">
        <div
          className="bg-white w-8 h-8 my-auto rounded-full flex border flex-col"
          onClick={() => {
            setSidebarState(!sidebarState);
          }}
        >
          <CiMenuBurger className="m-auto" />
        </div>
        <div className="flex justify-between items-center w-full">
          <Navigation />
          <Search />
          <Account />
        </div>
      </nav>
      <section className="flex">
        {sidebarState && <Sidebar />}
        <main className="w-full flex flex-col gap-4 items-center my-5 px-4">
          <div className="w-full lg:flex justify-between gap-4 items-center">
            <div className="flex-1">
              <SendMoney />
              <div className="lg:flex justify-between mt-6 w-full hidden">
                {iconsData.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex ">
                    <CardIcon icons={item.icon} label={item.name} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 md:flex gap-4 justify-between items-center">
              <CardFeatures
                label="Chosen people"
                icons={
                  <div className="bg-white w-8 h-8 my-auto rounded-full flex border flex-col">
                    <PiDotsThree className="m-auto text- rounded-full " />
                  </div>
                }
              >
                {chosenPeople.map((people) => (
                  <div
                    key={people.id}
                    className="flex gap-5 justify-between lg:justify-start font-semibold py-1 px-6 text-xs items-center"
                  >
                    <img
                      src={people.img}
                      alt=""
                      className="w-11 h-11 rounded-full"
                    />
                    <p>{people.name}</p>
                    <div className="bg-white w-8 h-8 my-auto rounded-full flex lg:hidden border flex-col">
                      <LuArrowRight className="m-auto" />
                    </div>
                  </div>
                ))}
              </CardFeatures>
              <CardFeatures
                label="Favourite companies"
                icons={
                  <div className="bg-white w-8 h-8 my-auto rounded-full flex border flex-col">
                    <PiDotsThree className="m-auto text- rounded-full " />
                  </div>
                }
              >
                {chosenPeople.map((people) => (
                  <div
                    key={people.id}
                    className="flex gap-5 justify-between text-xs lg:justify-start font-semibold py-1 px-6 items-center"
                  >
                    <img
                      src={people.img}
                      alt=""
                      className="w-11 h-11 rounded-full"
                    />
                    <p>{people.name}</p>
                    <div className="bg-white w-8 h-8 my-auto rounded-full flex lg:hidden border flex-col">
                      <LuArrowRight className="m-auto" />
                    </div>
                  </div>
                ))}
              </CardFeatures>
            </div>
          </div>
          <div className="flex justify-between gap-5 flex-wrap mt-6 w-full ">
            {iconsData.slice(sliceStart, iconsData.length).map((item) => (
              <div key={item.id} className="flex ">
                <CardIcon icons={item.icon} label={item.name} />
              </div>
            ))}
          </div>
        </main>
        <aside className="w-[300px] border-l-2 hidden px-4 text-[#6B7A99] py-5 xl:flex flex-col justify-between">
          <UserDetail />
          <AccountCard />
          <Settings />
        </aside>
      </section>
    </section>
  );
}

export default App;
