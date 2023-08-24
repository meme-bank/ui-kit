import type { Meta, StoryObj } from '@storybook/react';
import { VKAuthButton } from './vk-auth-button';

type VKAuthButtonType = typeof VKAuthButton

const meta: Meta<VKAuthButtonType> = {
    component: VKAuthButton,
    tags: ['autodocs'],
    args: {}
}

export default meta;

type Story = StoryObj<VKAuthButtonType>;

export const Default: Story = {};
export const Loading: Story = {
    args: {
        IsLoading: true
    }
};
export const Registration: Story = {
    args: {
        actionType: "register"
    }
};