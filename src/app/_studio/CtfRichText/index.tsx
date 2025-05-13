import { ComponentDefinition } from "@contentful/experiences-sdk-react";

export * from "./CtfRichText";

export const CtfRichTextDefinition: ComponentDefinition = {
  id: "ctfRichText",
  name: "Rich Text",
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
                value: "Rich text component",
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
    type: {
      type: "Text",
      displayName: "Type",
      defaultValue: "default",
      validations: {
        in: [
          { value: "default", displayName: "No style" },
          { value: "intro", displayName: "Intro section" },
        ],
      },
      group: "style",
    },
  },
};
