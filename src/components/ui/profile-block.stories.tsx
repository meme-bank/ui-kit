import type { Meta, StoryObj } from '@storybook/react';
import { ProfileBlock, ProfileBlockBackground, ProfileInfoBlock } from './profile-block';
import React from 'react';

type ProfileBlockType = typeof ProfileBlock

const meta: Meta<ProfileBlockType> = {
    component: ProfileBlock,
    tags: ['autodocs'],
    args: {}
}

export default meta;

type Story = StoryObj<ProfileBlockType>;

export const Default: Story = {
    args: {
        account: {
            displayname: "Уртёмка",
            tag: "urtyom"
        },
        setAvatar() { },
        setBg() { },
    }
};