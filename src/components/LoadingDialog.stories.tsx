import type { Meta, StoryObj } from '@storybook/react';
import { LoadingDialog } from "./LoadingDialog";

type LoadingDialogType = typeof LoadingDialog

const meta: Meta<LoadingDialogType> = {
    component: LoadingDialog,
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<LoadingDialogType>;

export const Default: Story = {
};