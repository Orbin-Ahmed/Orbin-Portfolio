type ChipsProps = {
  title: string;
  active: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const Chips = ({ title, active, onClick }: ChipsProps) => {
  return (
    <div
      className={`relative grid select-none items-center whitespace-nowrap rounded-lg py-1.5 px-3 text-xs font-bold m-1 cursor-pointer transition-all duration-300 ${
        active
          ? "bg-button-primary text-white"
          : "bg-primary-200/10 text-primary-100"
      }`}
      onClick={onClick}
    >
      <span className="">{title}</span>
    </div>
  );
};

export default Chips;
