import type { Meta, StoryObj } from '@storybook/react';
import { Logotype } from './logotype';

type LogotypeType = typeof Logotype

const meta: Meta<LogotypeType> = {
    component: Logotype,
    tags: ['autodocs'],
    args: {}
}

export default meta;

type Story = StoryObj<LogotypeType>;

export const Default: Story = {
    args: {}
};
export const Sanctum: Story = {
    args: {
        superscriptLogo: "Sanctum"
    }
};
export const Milestone: Story = {
    args: {
        badgeText: "Milestone 3"
    }
};