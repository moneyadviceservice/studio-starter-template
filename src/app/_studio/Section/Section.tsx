import { CtfText } from "@/app/_components/CtfText";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";

export type SectionProps = {
  content: Document;
  image?: string;
};

export const Section = ({ content, image }: SectionProps) => {
  console.log("Section", content, image);
  return (
    <section className="mb-2 items-start gap-12 grid grid-cols-1 md:grid-cols-2 pt-16">
      <CtfText content={content} />

      {image && (
        <div className="border-1 border-gray-400">
          <Image
            alt=""
            src={`https:${image}`}
            width={100}
            height={100}
            className="object-contain w-full"
          />
        </div>
      )}
    </section>
  );
};
