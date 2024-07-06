interface IconData {
  icons: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const CardFeatures: React.FC<IconData> = ({ label, icons, children }) => {
  return (
    <div className="border-2  mt-5 lg:mt-0 rounded-lg flex-1 bg-white text-[#6B7A99]">
      <div className="flex justify-between text-xs font-semibold items-center border-b-2 py-3 px-6">
        <p>{label}</p>
        {icons}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardFeatures;
