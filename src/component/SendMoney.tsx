/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Select from "react-select";
import { card2, debitcard } from "../assets";
import { PiDotsThree } from "react-icons/pi";
import { IoIosSwap } from "react-icons/io";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    paddingLeft: "1.3rem",
    border: "none",
    backgroundColor: "#fff",
    color: "#8A7575",
    outline: "none",
  }),
  option: (provided: any) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
};

const SendMoney = () => {
  const [activeTab, setActiveTab] = useState("Card-2-Card");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const moneyCard = [
    {
      id: 1,
      text: "5677 9899",
      img: debitcard,
    },
    {
      id: 2,
      text: "5677 0571",
      img: card2,
    },
    {
      id: 3,
      text: "5677 673",
      img: debitcard,
    },
  ];

  const selectOptions = moneyCard.map((card: any) => ({
    value: `Your bank ${card.text}`,
    label: (
      <div className="flex justify-between items-center text-[#6B7A99]">
        <p className="text-sm font-bold">
          Your bank <span className="ml-5">{card.text}</span>
        </p>
        <img
          src={card.img}
          alt="Card"
          className="w-6 ml-5"
          style={{ marginRight: 10 }}
        />
      </div>
    ),
  }));
  const ToBankCard = moneyCard.map((card: any) => ({
    value: `To Bank Card ${card.text}`,
    label: (
      <div className="flex justify-between items-center text-[#6B7A99] ">
        <p className="text-sm font-bold">
          To Bank Card <span className="ml-5">{card.text}</span>
        </p>
        <img
          src={card.img}
          alt="Card"
          className="w-6 ml-5"
          style={{ marginRight: 10 }}
        />
      </div>
    ),
  }));

  return (
    <div className="rounded-t-lg bg-white text-[#6B7A99]">
      <Tabs
        defaultValue="Card-2-Card"
        className="w-full rounded-b-lg text-[#6B7A99] "
        onValueChange={handleTabChange}
      >
        <TabsList className="flex w-full justify-between items-center px-4 border-b-2 pt-4">
          <div className="bg-white w-8 h-8 my-auto rounded-full flex border flex-col">
            <IoIosSwap className="m-auto text-[#8833ff] rounded-full " />
          </div>
          <TabsTrigger
            value="Card-2-Card"
            className={`px-4 py-3 text-xs font-bold  ${
              activeTab === "Card-2-Card"
                ? "border-b-2 text-[#8833ff] border-[#8833ff] font-bold"
                : ""
            }`}
          >
            Card 2 Card
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className={`px-4 py-3 text-xs font-bold ${
              activeTab === "account"
                ? "border-b-2 text-[#8833ff] border-[#8833ff] font-bold"
                : ""
            }`}
          >
            Receipts to the account
          </TabsTrigger>
          <div className="bg-white w-8 h-8 my-auto rounded-full flex border flex-col">
            <PiDotsThree className="m-auto text- rounded-full " />
          </div>
        </TabsList>
        <TabsContent value="Card-2-Card">
          <Select
            className="select-container border-2 rounded  mx-4 my-4"
            classNamePrefix="select-category"
            defaultValue={selectOptions[0]}
            name="category"
            options={selectOptions}
            styles={customStyles}
            onChange={(selectedOption: any) => console.log(selectedOption)}
          />
          <Select
            className="select-container border-2 rounded mx-4 my-4"
            classNamePrefix="select-category"
            defaultValue={ToBankCard[1]}
            name="category"
            options={ToBankCard}
            styles={customStyles}
            onChange={(selectedOption: any) => console.log(selectedOption)}
          />

          <div className="border-2 rounded-md mx-4 h-[45px] flex justify-center items-center">
            <p className=" my-auto text-sm font-bold">
              Amount, from 1 to 5000 $
            </p>
          </div>
        </TabsContent>
        <TabsContent value="account" className="px-4 pt-2">
            <p className="text-xs text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt sit numquam ab fugiat? At aspernatur fugiat consequuntur nisi dicta necessitatibus impedit, incidunt, animi minus itaque cum, similique doloremque earum. Adipisci corrupti nihil deserunt commodi nulla optio odit in aperiam consectetur quidem maxime laborum obcaecati porro veritatis est et facilis laudantium, cupiditate, corporis, ratione neque sapiente tenetur! Debitis ducimus corporis minus quibusdam, eveniet repudiandae ipsa totam porro ratione cum vero cupiditate aperiam placeat veniam repellendus quod, incidunt dolore odio? Ea mollitia optio nostrum veniam eveniet, laboriosam placeat asperiores eaque cupiditate incidunt quae dicta distinctio, consectetur maxime expedita sed voluptatem esse omnis.</p>
        </TabsContent>
        <button className="bg-[#8833ff] mt-5 w-full rounded-b-lg text-white text-sm h-[3rem]">
          Send Money
        </button>
      </Tabs>
    </div>
  );
};

export default SendMoney;
