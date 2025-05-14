import Image from "next/image";

export type CtfImageProps = {
  fields: {
    title: string;
    file: {
      contentType: string;
      fileName: string;
      url: string;
    };
  };
};

type ContentfulImageProps = {
  src: CtfImageProps;
};

export const CtfImage = ({ src }: ContentfulImageProps) => {
  console.log("CtfImage", src);
  return (
    <Image
      src={`https:${src.fields.file.url}`}
      alt={src.fields.title}
      width={100}
      height={100}
      className="object-contain w-full"
    />
  );
};
