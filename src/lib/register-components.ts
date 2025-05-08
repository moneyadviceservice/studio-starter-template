import {
  defineBreakpoints,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../studio.config";
import { SiteButtonDefinition, SiteButtonComponent } from "@studio/SiteButton";
import {
  ExternalVideoComponent,
  ExternalVideoDefinition,
} from "@studio/ExternalVideo";
import { Button } from "@/app/_components/Button/Button";
import { TeaserCard, TeaserDefinition } from "@/app/_studio/TeaserCard";

defineComponents([
  {
    component: SiteButtonComponent,
    definition: SiteButtonDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: ExternalVideoComponent,
    definition: ExternalVideoDefinition,
  },
  {
    component: Button,
    definition: {
      id: "custom-button",
      name: "Custom Button 2",
      category: "Custom Components",
      variables: {
        text: {
          displayName: "Text",
          type: "Text",
          defaultValue: "Click me",
        },
        variant: {
          displayName: "Variant",
          type: "Text",
          defaultValue: "primary",
          group: "style",
          validations: {
            in: [
              { value: "primary", displayName: "Primary" },
              { value: "secondary", displayName: "Secondary" },
            ],
          },
        },
      },
    },
  },
  {
    component: TeaserCard,
    definition: TeaserDefinition,
  },
  /*
   * After a new folder is created in '/_components' you need to register it below in a JSON format
   */
]);
defineBreakpoints([
  {
    id: "desktop",
    query: "*",
    displayName: "All Sizes",
    previewSize: "100%",
  },
  {
    id: "tablet",
    query: "<992px",
    displayName: "Tablet",
    previewSize: "820px",
  },
  {
    id: "mobile",
    query: "<576px",
    displayName: "Mobile",
    previewSize: "390px",
  },
]);
/*
 * Primary colors are defined in the studio.config.js file, because we feed these to the EB design tokens, and tailwind!
 */
defineDesignTokens({
  color: {
    Primary: StudioConfig.colors.primary["400"],
    Secondary: StudioConfig.colors.secondary["400"],
    Tertiary: StudioConfig.colors.tertiary["400"],
    Warning: StudioConfig.colors.warning["400"],
    Info: StudioConfig.colors.info["400"],
    Success: StudioConfig.colors.success["400"],
  },
});
