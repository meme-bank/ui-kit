import { StoryObj, Meta } from "@storybook/react";
import { TF2CodeInput } from "./tf2-code-input";

type TF2CodeInputType = typeof TF2CodeInput;

const QrCodeMeta: Meta<TF2CodeInputType> = {
  component: TF2CodeInput,
  tags: ["autodocs"],
  args: {
    valueLength: 6,
    value: "",
  },
};

export default QrCodeMeta;

type Story = StoryObj<TF2CodeInputType>;

export const Default: Story = {};
