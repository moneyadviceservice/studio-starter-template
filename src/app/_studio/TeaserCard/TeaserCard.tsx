import { twMerge } from "tailwind-merge";
import { CtfText } from "@/app/_components/CtfText";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

type TeaserProps = {
  type: "inline" | "stacked";
  variant: string;
  title: string;
  description: Document;
  image?: string;
  actionButtonTitle?: string;
  actionButtonUrl: string;
};

export const TeaserCard = ({
  variant,
  type = "inline",
  title,
  description,
  image,
  actionButtonTitle,
  actionButtonUrl,
}: TeaserProps) => {
  const classes = type === "inline" ? "flex flex-row" : "flex flex-col";
  const TeaserContent = () => {
    return (
      <>
        {image && (
          <div
            className={twMerge(
              "relative",
              "scale-x-100",
              "w-full",
              "min-h-[200px]",
              "min-w-[200px]",
              "sm:flex-1"
            )}
          >
            <Image
              src={`https:${image}`}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
            />
          </div>
        )}

        <div className={twMerge(`py-4 space-y-3 pr-8 px-6`, !image && "pl-4")}>
          <h5 className="text-pink-900 font-bold text-2xl">{title}</h5>
          <CtfText content={description} />
          {actionButtonTitle && (
            <Link href={actionButtonUrl}>{actionButtonTitle}</Link>
          )}
        </div>
      </>
    );
  };

  return (
    <div
      className={twMerge(
        "border-2 border-gray-200 rounded-lg shadow-md",
        "font-roobert",
        variant === "whiteStyle" ? "bg-white" : "bg-gray-100"
      )}
    >
      {!actionButtonTitle ? (
        <Link
          href={actionButtonUrl}
          className={twMerge(
            "content-between",
            "gap-x-12",
            "hover:border-2",
            "border-2",
            "rounded-lg",
            "border-gray-200",
            "hover:border-pink-500",
            "hover:cursor-pointer",
            classes
          )}
        >
          <TeaserContent />
        </Link>
      ) : (
        <div className="teaser grid grid-cols-2 gap-4">
          <TeaserContent />
        </div>
      )}
    </div>
  );
};
