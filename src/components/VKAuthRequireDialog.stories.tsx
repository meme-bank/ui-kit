import type { Meta, StoryObj } from "@storybook/react";
import { VKAuthRequireDialog } from "./VKAuthRequireDialog";

type VKAuthRequireDialogType = typeof VKAuthRequireDialog;

const meta: Meta<VKAuthRequireDialogType> = {
  component: VKAuthRequireDialog,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<VKAuthRequireDialogType>;

export const Default: Story = {};
