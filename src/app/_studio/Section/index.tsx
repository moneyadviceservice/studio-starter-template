import { ComponentDefinition } from "@contentful/experiences-sdk-react";

export * from "./Section";

export const SectionDefinition: ComponentDefinition = {
  id: "section",
  name: "Section",
  category: "Custom Components",
  variables: {
    content: {
      type: "RichText",
      displayName: "Content",
      defaultValue: {
        nodeType: "document",
        data: {},
        content: [
          {
            nodeType: "paragraph",
            data: {},
            content: [
              {
                nodeType: "text",
                value: "Placeholder text",
                data: {},
                marks: [],
              },
            ],
          },
        ],
      },
      validations: {
        bindingSourceType: ["manual"],
      },
      group: "content",
    },
    image: {
      type: "Media",
      displayName: "Image",
      validations: {
        bindingSourceType: ["asset"],
      },
      group: "content",
    },
  },
};
