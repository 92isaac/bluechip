import { eight, five, four, one, seven, six, three, two } from "../assets"
import { TfiWorld, TfiHeart, TfiWallet } from "react-icons/tfi";
import { GoDeviceMobile } from "react-icons/go";
import { IoGameControllerOutline, IoBusOutline } from "react-icons/io5";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { BsAirplaneEngines } from "react-icons/bs";
import { PiVideoLight, PiSuitcaseSimple, PiUsersThree } from "react-icons/pi";
import { FaIdCard, FaRegUser } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { GiHouse } from "react-icons/gi";


interface IconData {
    icon: React.ReactNode;
    name: string;
    id: number;
  }

export const navItems = [
    {   
        id:1,
        name:"Dashboard",
    },
    {   
        id:2,
        name:"About Us",
    },
    {   
        id:3,
        name:"News",
    },
    {   
        id:4,
        name:"User Policy",
    },
    {   
        id:5,
        name:"Contact",
    },
]

export const chosenPeople = [
    {   
        id:1,
        name:"Benjamin Steele",
        img:one,
    },
    {   
        id:2,
        name:"Callie Wilkerson",
        img:two,
    },
    {   
        id:3,
        name:"Vincent Wong",
        img:three,
    },
    {   
        id:4,
        name:"Lou Nunez",
        img:four,
    },
    {   
        id:5,
        name:"Theresa Jacobs",
        img:five,
    },
    {   
        id:6,
        name:"Henrietta Green",
        img:six,
    },
    {   
        id:7,
        name:"Stanley Cohen",
        img:seven,
    },
    {   
        id:8,
        name:"Cory Wheeler",
        img:eight,
    },
    // {   
    //     id:9,
    //     name:"Theresa Jacobs",
    //     img:two,
    // },
    // {   
    //     id:10,
    //     name:"Theresa Jacobs",
    //     img:two,
    // },
]



export const iconsData: IconData[] = [
    {
      id: 1,
      name: "Internet",
      icon: <TfiWorld className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 2,
      name: "Mobile",
      icon: <GoDeviceMobile className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 3,
      name: "Game Services",
      icon: <IoGameControllerOutline className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 4,
      name: "Video Content",
      icon: <HiOutlineHandThumbUp className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 5,
      name: "Travels",
      icon: <BsAirplaneEngines className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 6,
      name: "Video Content",
      icon: <PiVideoLight className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 7,
      name: "From card to card",
      icon: <FaIdCard className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 8,
      name: "Payment of bills",
      icon: <CgFileDocument className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 9,
      name: "SWIFT",
      icon: <PiSuitcaseSimple className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 10,
      name: "Transport",
      icon: <IoBusOutline className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 11,
      name: "Utilities",
      icon: <GiHouse className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 12,
      name: "Charity",
      icon: <TfiHeart className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 13,
      name: "Myself",
      icon: <FaRegUser className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 14,
      name: "People",
      icon: <PiUsersThree className="text-4xl text-[#3361FF] mx-auto" />,
    },
    {
      id: 15,
      name: "Money Request",
      icon: <TfiWallet className="text-4xl text-[#3361FF] mx-auto" />,
    },
  ];