import { twMerge } from "tailwind-merge";

type Props = {
  width?: number;
};

export const Divider = ({ width }: Props) => {
  const customWidth = width ? `${width}px` : "w-full";
  return (
    <hr
      className={twMerge(
        "block",
        customWidth,
        `w-[1280px] h-[1px] border border-gray-200 my-4`
      )}
    />
  );
};
