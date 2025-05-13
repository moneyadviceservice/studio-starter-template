import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Document } from "@contentful/rich-text-types";

import { RichText } from "@/app/_components/RichText";

export type CalloutBoxProps = {
  calloutTitle: string;
  description: Document;
  id: string;
};

export const CalloutBox = ({
  calloutTitle,
  id,
  description,
}: CalloutBoxProps) => {
  return (
    <div className="t-urgent-callout border-8 rounded-bl-3xl py-10 pl-6 pr-8 sm:p-10 flex border-yellow-200 mb-2">
      <div className="flex gap-3 sm:gap-6">
        <div>
          <div className={twMerge("text-pink-800", "sm:hidden", "-ml-8")}>
            <Image
              src="/arrow-brand-straight.svg"
              alt="Arrow Brand Straight"
              width={64}
              height={48}
            />{" "}
          </div>
          <div
            className={twMerge(
              "text-pink-800",
              "hidden sm:block",
              "-mt-12",
              "-ml-4"
            )}
          >
            <Image
              src="/arrow-brand-curved.svg"
              alt="Arrow Brand Curved"
              width={48}
              height={88}
            />
          </div>
        </div>
        <div>
          <h5 className="text-lg md:text-xl text-gray-800 font-bold mb-4">
            {calloutTitle}
          </h5>
          {description && <RichText content={description} />}
        </div>
      </div>
    </div>
  );
};
