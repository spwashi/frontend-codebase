import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { mainDecorator } from "@services/storybook/decorators";
import { MainNavigation } from "./MainNavigation";

export default {
  title: "Demo/Layout/Navigation/Main",
  component: MainNavigation,
  decorators: [mainDecorator],
} as Meta<typeof MainNavigation>;

export const Navigation: StoryObj<typeof MainNavigation> = {
  render: () => {
    return (
      <>
        <MainNavigation />
      </>
    );
  },
};
