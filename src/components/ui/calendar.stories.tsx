import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";

type CalendarType = typeof Calendar;

const meta: Meta<CalendarType> = {
  component: Calendar,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<CalendarType>;

export const Default: Story = {};
