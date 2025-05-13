import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export interface CtfTextProps {
  content: Document;
}

export const CtfText = ({ content }: CtfTextProps) => {
  return <div>{documentToReactComponents(content)}</div>;
};
