type CardProps = {
  icon: string;
  header: string;
  subHeader: string;
  title: string;
};

const Card = ({ icon, header, subHeader, title }: CardProps) => {
  return (
    <div className="flex-1 border border-border-100 bg-white rounded-2xl md:p-8 p-4 text-center">
      <div className="flex justify-center">
        <img src={icon} alt="icon" className="w-12 h-auto" />
      </div>
      <p className="font-bold text-xl md:text-2xl">{header}</p>
      <p className="text-base md:text-lg text-primary-200">{subHeader}</p>
      <p className="md:text-base text-sm text-primary-200">{title}</p>
    </div>
  );
};

export default Card;
