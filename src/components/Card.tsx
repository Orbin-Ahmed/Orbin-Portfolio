import { twMerge } from "tailwind-merge";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

type CardProps = {
  icon: string;
  header: string;
  subHeader: string;
  title: string;
  arrowRight?: boolean;
  className?: string;
};

const Card = ({
  icon,
  header,
  subHeader,
  title,
  className,
  arrowRight = false,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        "flex-1 border border-border-100 bg-white rounded-2xl md:p-8 p-4 text-center",
        className
      )}
    >
      <div className="flex justify-center">
        <img src={icon} alt="icon" className="w-12 h-auto" />
      </div>
      <p
        className={
          className
            ? "font-medium text-base md:text-lg"
            : "font-bold text-xl md:text-2xl"
        }
      >
        {header}
      </p>
      <p
        className={
          className
            ? "text-sm md:text-base text-primary-200 mt-1"
            : "text-base md:text-lg text-primary-200 mt-1"
        }
      >
        {subHeader}
      </p>
      <div className="flex items-center justify-center">
        <p
          className={
            className
              ? "text-xs md:text-sm text-primary-200 mt-1"
              : "text-base md:text-lg text-primary-200 mt-1"
          }
        >
          {title}
        </p>
        {arrowRight ? (
          <p className="mt-1 ml-1">
            <ArrowLongRightIcon className="w-4 h-auto" />
          </p>
        ) : undefined}
      </div>
    </div>
  );
};

export default Card;
