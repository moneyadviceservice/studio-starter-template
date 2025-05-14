import { ComponentDefinition } from "@contentful/experiences-sdk-react";

export * from "./Divider";

export const DividerDefinition: ComponentDefinition = {
  id: "divider",
  name: "Divider",
  category: "Custom Components",
  variables: {
    width: {
      type: "Text",
      displayName: "Width",
      defaultValue: "100",
      group: "style",
    },
  },
};
