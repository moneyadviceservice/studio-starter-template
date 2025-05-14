import { MODE } from "@/lib/constants";
import Studio from "@/app/_studio/studio";

export default async function BenefitsPage({
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
          {slug?.split("-")?.join(" ")?.toUpperCase()}
        </h1>
      </div>
      <div className="container p-4">
        <main className="py-4">
          <Studio slug={slug} locale={locale} mode={mode} />
          <p>Hello world</p>
        </main>
      </div>
    </>
  );
}
