import { CtfImage, CtfImageProps } from "@/app/_components/CtfImage/CtfImage";
import { CtfText } from "@/app/_components/CtfText";
import { Document } from "@contentful/rich-text-types";

export type SectionProps = {
  content: Document;
  image?: CtfImageProps;
};

export const Section = ({ content, image }: SectionProps) => {
  return (
    <section className="mb-2 items-start gap-12 grid grid-cols-1 md:grid-cols-2 pt-16">
      <CtfText content={content} />

      {image && (
        <div className="border-1 border-gray-400">
          <CtfImage src={image} />
        </div>
      )}
    </section>
  );
};
