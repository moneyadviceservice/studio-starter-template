import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import style from "./CtfText.module.css";
import { twMerge } from "tailwind-merge";

export interface CtfTextProps {
  content: Document;
}

export const CtfText = ({ content }: CtfTextProps) => {
  return (
    <div className={`text space-y-6 whitespace-normal leading-6 ${style.text}`}>
      {documentToReactComponents(content)}
    </div>
  );
};
