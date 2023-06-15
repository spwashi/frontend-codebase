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
  title: "Demo/Layout/Pages/Home",
  component: StandardPage,
  decorators: [mainDecorator],
} as Meta<typeof StandardPage>;

export const HomePage: StoryObj<typeof StandardPage> = {
  render: () => {
    return (
      <>
        <StandardPage />
      </>
    );
  },
};
