import { StoryObj, Meta } from "@storybook/react";
import { QrCode } from "./qr-code";

type QrCodeType = typeof QrCode;

const QrCodeMeta: Meta<QrCodeType> = {
  component: QrCode,
  tags: ["autodocs"],
  args: {
    text: "Hello World!",
  },
};

export default QrCodeMeta;

type Story = StoryObj<QrCodeType>;

export const Default: Story = {};
