import type { Meta, StoryObj } from '@storybook/react';
import { CropperControls } from './cropper-controls';

type CropperControlsType = typeof CropperControls

const meta: Meta<CropperControlsType> = {
    component: CropperControls,
    tags: ['autodocs'],
    args: {}
}

export default meta;

type Story = StoryObj<CropperControlsType>;

export const Default: Story = {
    args: {
        image: "https://placehold.co/500x500"
    }
};

export const background: Story = {
    args: {
        type: "background",
        image: "https://placehold.co/500x200"
    }
};