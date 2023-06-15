import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Page } from "../Page";
import { mainDecorator } from "@services/storybook/decorators";

export default {
  title: "Demo/Layout/Pages/Basic",
  component: Page,
  decorators: [mainDecorator],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const BasicPage = Template.bind({});
