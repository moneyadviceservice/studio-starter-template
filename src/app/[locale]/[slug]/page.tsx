import { MODE } from "@/lib/constants";
import Studio from "@/app/_studio/studio";
import { capitiliseFirstletter } from "@/utils/utils";

export default async function Home({
  params,
  searchParams,
}: {
  params: { locale: string; slug: string };
  searchParams: { mode: MODE };
}) {
  const { mode } = searchParams;
  const { locale, slug } = params;

  return (
    <>
      <div className="stripes">
        <h1 className="text-3xl container px-4 font-bold py-8 mb-8">
          {capitiliseFirstletter(slug?.split("-")?.join(" "))}
        </h1>
      </div>
      <div className="container">
        <Studio slug={slug} locale={locale} mode={mode} />
      </div>
    </>
  );
}
