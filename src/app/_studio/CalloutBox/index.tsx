import { ComponentDefinition } from "@contentful/experiences-sdk-react";

export * from "./CalloutBox";

export const CalloutBoxDefinition: ComponentDefinition = {
  id: "calloutBox",
  name: "Callout Box",
  category: "Custom Components",
  variables: {
    calloutTitle: {
      type: "Text",
      displayName: "Title",
      defaultValue: "inline",
      group: "content",
    },
    id: {
      type: "Text",
      displayName: "Id",
      group: "content",
    },
    description: {
      type: "RichText",
      displayName: "Description",
      group: "content",
    },
  },
};
