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
        "flex-1 border border-border-100 bg-white rounded-2xl md:p-8 p-5 text-center",
        className,
      )}
    >
      <div className="flex justify-center mb-2">
        <img src={icon} alt="icon" className="w-16 h-auto" />
      </div>

      <p
        className={
          className
            ? "font-medium text-lg md:text-xl"
            : "font-bold text-2xl md:text-3xl"
        }
      >
        {header}
      </p>

      <p
        className={
          className
            ? "text-base md:text-lg text-primary-200 mt-1"
            : "text-lg md:text-xl text-primary-200 mt-1"
        }
      >
        {subHeader}
      </p>

      <div className="flex items-center justify-center mt-1">
        <p
          className={
            className
              ? "text-sm md:text-base text-primary-200"
              : "text-base md:text-lg text-primary-200"
          }
        >
          {title}
        </p>
        {arrowRight ? (
          <span className="ml-1 mt-0.5">
            <ArrowLongRightIcon className="w-5 h-auto" />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
