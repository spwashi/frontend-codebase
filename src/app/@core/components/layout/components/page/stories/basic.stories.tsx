import React from "react";
import {
  ComponentMeta,
  ComponentStory,
  Meta,
  StoryObj,
} from "@storybook/react";
import { StandardPage } from "../StandardPage";
import { mainDecorator } from "@services/storybook/decorators";

export default {
  title: "Demo/Layout/Pages/Basic",
  component: StandardPage,
  decorators: [mainDecorator],
} as Meta<typeof StandardPage>;

export const BasicPage: StoryObj<typeof StandardPage> = {
  render: () => {
    return (
      <>
        <StandardPage />
      </>
    );
  },
};
