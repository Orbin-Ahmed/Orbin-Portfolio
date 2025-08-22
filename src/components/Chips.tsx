type ChipsProps = {
  title: string;
  active: boolean;
  onClick?: () => void;
};

const Chips = ({ title, active, onClick }: ChipsProps) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    className={`relative inline-flex select-none items-center whitespace-nowrap rounded-full py-1.5 px-4 text-xs font-semibold transition-all
      ${
        active
          ? "bg-button-primary text-white shadow-sm"
          : "bg-primary-200/10 text-primary-100 hover:bg-primary-200/20"
      }`}
  >
    {title}
  </button>
);

export default Chips;
