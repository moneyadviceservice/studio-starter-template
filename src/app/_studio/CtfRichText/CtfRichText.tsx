import { CtfText } from "@/app/_components/CtfText";
import { Document } from "@contentful/rich-text-types";
import { twMerge } from "tailwind-merge";

export type RichTextProps = {
  content: Document;
  type: "default" | "intro";
};

export const CtfRichText = ({ content, type }: RichTextProps) => {
  return (
    <div
      className={twMerge(
        type === "intro" &&
          "t-tool-intro border-l-[6px] border-teal-300 pl-6 text-lg text-gray-800 font-normal leading-[26px] mb-8"
      )}
    >
      <CtfText content={content} />
    </div>
  );
};
