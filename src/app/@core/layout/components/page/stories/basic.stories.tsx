import React from "react";
import {
  ComponentMeta,
  ComponentStory,
  Meta,
  StoryObj,
} from "@storybook/react";
import { Page } from "../Page";
import { mainDecorator } from "@services/storybook/decorators";

export default {
  title: "Demo/Layout/Pages/Basic",
  component: Page,
  decorators: [mainDecorator],
} as Meta<typeof Page>;

export const BasicPage: StoryObj<typeof Page> = {
  render: () => {
    return (
      <>
        <Page />
      </>
    );
  },
};
