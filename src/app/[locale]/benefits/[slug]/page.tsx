import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import {
  getAllSubCategoryPageTemplatesWithSlug,
  getSubCategoryPageTemplate,
  SubCategoryPageTemplate,
} from "@/lib/contentful/api";
import { Layout } from "@/app/_components";
import Studio from "@/app/_studio/studio";
import { MODE } from "@/lib/constants";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await getAllSubCategoryPageTemplatesWithSlug();
//   return {
//     paths: data?.map(({ fields }) => `/en/benefits/${fields.slug}`) ?? [],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({
//   params,
//   draftMode = false,
// }: GetStaticPropsContext) => {
//   const data = await getSubCategoryPageTemplate(
//     params?.slug as string,
//     draftMode
//   );

//   return { props: { data } };
// };

type Props = {
  data: SubCategoryPageTemplate;
};

const Page = ({
  params,
  searchParams,
  data,
}: Props & {
  params: { locale: string; slug: string };
  searchParams: { mode: MODE };
}) => {
  // const livedata = useContentfulLiveUpdates(data);
  // const inspectorProps = useContentfulInspectorMode({
  //   entryId: livedata?.sys?.id || "",
  // });

  // if (!livedata) {
  //   return (
  //     <Layout>
  //       <h1>Data not available</h1>
  //     </Layout>
  //   );
  // }

  // const {
  //   fields: { title },
  // } = livedata;

  const { mode } = searchParams;
  const { locale, slug } = params;

  return (
    <Layout>
      {/* <Studio slug={slug} locale={locale} mode={mode} /> */}
      <p>Test page</p>
    </Layout>
  );
};

export default Page;
