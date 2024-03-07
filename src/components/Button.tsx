import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 m-2 border rounded-3xl font-semibold transition-all ease duration-300 md:m-4 md:p-4",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
