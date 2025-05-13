import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export interface RichTextProps {
  content: Document;
}

export const RichText = ({ content }: RichTextProps) => {
  console.log("RichText", content);
  return (
    <div>
      <h1>RichText</h1>
      <p>{documentToReactComponents(content)}</p>
    </div>
  );
};
