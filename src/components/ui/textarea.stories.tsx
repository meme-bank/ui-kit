import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";
import React from "react";

type TextareaType = typeof Textarea;

const meta: Meta<TextareaType> = {
  component: Textarea,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<TextareaType>;

export const Default: Story = {
  args: {
    children: "Эм пук",
    maxRows: 10,
    className: "ms:resize-none",
  },
};
