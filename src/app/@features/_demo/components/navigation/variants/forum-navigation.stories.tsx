import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { mainDecorator } from "@services/storybook/decorators";
import { ForumNavigation } from "./ForumNavigation";

export default {
  title: "Demo/Layout/Navigation/Forum",
  component: ForumNavigation,
  decorators: [mainDecorator],
} as Meta<typeof ForumNavigation>;

export const Navigation: StoryObj<typeof ForumNavigation> = {
  render: () => {
    return (
      <>
        <ForumNavigation />
      </>
    );
  },
};
