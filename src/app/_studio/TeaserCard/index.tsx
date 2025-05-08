import {
  CONTENTFUL_COMPONENTS,
  ComponentDefinition,
} from "@contentful/experiences-sdk-react";

export * from "./TeaserCard";

export const TeaserDefinition: ComponentDefinition = {
  id: "teaserCard",
  name: "Teaser Card",
  category: "Custom Components",
  variables: {
    type: {
      type: "Text",
      displayName: "Type",
      defaultValue: "inline",
      validations: {
        in: [
          { value: "inline", displayName: "Inline" },
          { value: "stacked", displayName: "Stacked" },
        ],
      },
      group: "style",
    },
    variant: {
      type: "Text",
      displayName: "Variant",
      defaultValue: "default",
      validations: {
        in: [
          { value: "whileStyle", displayName: "White style" },
          { value: "greyStyle", displayName: "Grey Style" },
        ],
      },
      group: "style",
    },
    title: {
      type: "Text",
      displayName: "Title",
      defaultValue: "Teaser Card Title",
      group: "content",
    },
    actionButtonUrl: {
      type: "Text",
      displayName: "Action Button URL",
      defaultValue: "/",
      group: "content",
    },
    actionButtonTitle: {
      type: "Text",
      displayName: "Action Button Title",
      defaultValue: "Action Button Title",
      group: "content",
    },
    description: {
      type: "Text",
      displayName: "Description",
      defaultValue: "Teaser Card Description",
      group: "content",
    },
    image: {
      type: "Media",
      displayName: "Image",
      defaultValue: "",
      group: "content",
    },
  },
};
