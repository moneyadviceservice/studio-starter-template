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
import { Layout } from "@/components";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllSubCategoryPageTemplatesWithSlug();
  return {
    paths: data?.map(({ fields }) => `/en/benefits/${fields.slug}`) ?? [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  draftMode = false,
}: GetStaticPropsContext) => {
  const data = await getSubCategoryPageTemplate(
    params?.slug as string,
    draftMode
  );

  return { props: { data } };
};

type Props = {
  data: SubCategoryPageTemplate;
};

const Page = ({ data }: Props) => {
  const livedata = useContentfulLiveUpdates(data);
  const inspectorProps = useContentfulInspectorMode({
    entryId: livedata?.sys?.id || "",
  });

  if (!livedata) {
    return (
      <Layout>
        <h1>Data not available</h1>
      </Layout>
    );
  }

  const {
    fields: { title },
  } = livedata;

  return (
    <Layout>
      <h1 {...inspectorProps({ fieldId: "title" })}>{title}</h1>
    </Layout>
  );
};

export default Page;
