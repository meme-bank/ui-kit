import type { Meta, StoryObj } from '@storybook/react';
import { InputFormField } from "./InputFormField";
import React from 'react';
import { Form } from "./ui/form";
import { useForm } from 'react-hook-form';
import { User } from 'lucide-react';

type InputFieldType = typeof InputFormField

const meta: Meta<InputFieldType> = {
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            const form = useForm();

            return <Form {...form}>
                <form onSubmit={form.handleSubmit(console.log)}>
                    <Story />
                </form>
            </Form>
        }
    ],
    args: {
        name: "Display name"
    },
    component: InputFormField
}

export default meta;

type Story = StoryObj<InputFieldType>;

export const Default: Story = {};
export const Label: Story = {
    args: {
        label: "Display name"
    }
};
export const Description: Story = {
    args: {
        label: "Display name",
        description: "This is your's name"
    }
};
export const Icon: Story = {
    args: {
        label: "Display name",
        description: "This is your's name",
        LabelIcon: User
    }
};
export const Skeleton: Story = {
    args: {
        label: "Display name",
        description: "This is your's name",
        skeletonLoad: true,
        LabelIcon: User
    }
};