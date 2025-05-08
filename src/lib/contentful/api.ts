import { Entry, createClient, EntrySys } from "contentful";

type SubCategoryPageTemplateFields = {
  slug: string;
  title: string;
};

export type SubCategoryPageTemplate = {
  contentTypeId: "subCategoryPageTemplate";
  fields: SubCategoryPageTemplateFields;
  sys: EntrySys;
};

const clientDelivery = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const clientPreview = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: "preview.contentful.com",
});

async function fetchEntry(
  query: object,
  draftMode = false
): Promise<Entry<SubCategoryPageTemplate>> {
  const client = draftMode ? clientPreview : clientDelivery;
  const entries = await client.getEntries<SubCategoryPageTemplate>(query);
  return entries.items[0];
}

async function fetchEntries(
  query: object,
  draftMode = false
): Promise<Entry<SubCategoryPageTemplate>[]> {
  const client = draftMode ? clientPreview : clientDelivery;
  const entries = await client.getEntries<SubCategoryPageTemplate>(query);
  return entries.items;
}

export async function getSubCategoryPageTemplate(
  slug: string,
  draftMode = false
): Promise<Entry<SubCategoryPageTemplate>> {
  const entry = await fetchEntry(
    {
      "fields.slug": slug,
      content_type: "subCategoryPageTemplate",
    },
    draftMode
  );
  return entry;
}

export async function getAllSubCategoryPageTemplatesWithSlug(): Promise<
  Entry<SubCategoryPageTemplate>[]
> {
  const entries = await fetchEntries({
    "fields.slug[exists]": true,
    content_type: "subCategoryPageTemplate",
  });
  return entries;
}
