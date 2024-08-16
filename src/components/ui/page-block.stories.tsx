import type { Meta, StoryObj } from "@storybook/react";
import { PageBlock } from "./page-block";
import React from "react";

type PageBlockType = typeof PageBlock;

const meta: Meta<PageBlockType> = {
  component: PageBlock,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<PageBlockType>;

export const Default: Story = {
  args: {
    children: <p>Эм пук</p>,
  },
};
export const Error: Story = {
  args: {
    children: <p>Эм пук</p>,
    error: true,
  },
};
