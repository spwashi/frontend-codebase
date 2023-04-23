import { LogAppReduxState } from "@core/dev/components/Log";
import { mainDecorator } from "../../storybook/decorators";

export default {
  title: "Dev/AppState",
  component: LogAppReduxState,
  decorators: [mainDecorator],
};

export const State = { args: { open: true, style: "json" } };
