interface IconData {
    icons: React.ReactNode;
    label: string;
  }


const CardIcon:React.FC<IconData> = ({icons, label}) => {
  return (
    <div className="w-[8.5rem] h-[9rem] bg-white rounded-[10px] flex justify-center items-center">
        <div className="mx-auto text-center">
            {icons}
            <p className="flex justify-center items-center mt-4 text-xs font-semibold text-[#6B7A99] ">{label}</p>
        </div>
    </div>
  )
}

export default CardIcon