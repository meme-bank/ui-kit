import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import { ComboBox, ComboBoxItem } from "./ComboBox";

type ComboBoxType = typeof ComboBox;

const meta: Meta<ComboBoxType> = {
  component: ComboBox,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <ComboBoxItem value="1">Жопа</ComboBoxItem>
        <ComboBoxItem value="2">Жопа</ComboBoxItem>
        <ComboBoxItem value="3">Жопа</ComboBoxItem>
        <ComboBoxItem value="4">Жопа</ComboBoxItem>
        <ComboBoxItem value="5">Жопа</ComboBoxItem>
        <ComboBoxItem value="6">Жопа</ComboBoxItem>
        <ComboBoxItem value="7">Жопа</ComboBoxItem>
        <ComboBoxItem value="8">Жопа</ComboBoxItem>
        <ComboBoxItem value="9">Жопа</ComboBoxItem>
        <ComboBoxItem value="10">Жопа</ComboBoxItem>
        <ComboBoxItem value="11">Жопа</ComboBoxItem>
        <ComboBoxItem value="12">Жопа</ComboBoxItem>
      </>
    ),
    onOpenChange: fn(),
  },
};

export default meta;

type Story = StoryObj<ComboBoxType>;

export const Default: Story = {};

export const WithDefaultState: Story = {
  args: {
    value: "6",
  },
};
