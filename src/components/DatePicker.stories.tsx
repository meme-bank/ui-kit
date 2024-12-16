import type { Meta, StoryObj } from "@storybook/react";
import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";
import { DatePicker } from "./DatePicker";

type DatePickerType = typeof DatePicker;

const meta: Meta<DatePickerType> = {
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    selected: new Date(),
    onSelect: date =>
      date
        ? console.log(
            formatRelative(
              typeof date === "function"
                ? date(new Date()) || new Date()
                : date,
              new Date(),
              { locale: ru }
            )
          )
        : console.log("pook"),
    onOpenChange: date => (date ? console.log(date) : console.log("pook")),
  },
};

export default meta;

type Story = StoryObj<DatePickerType>;

export const Default: Story = {};

// export const Authorized: Story = {
//   args: {
//     user: {
//       tag: "urtyom",
//       displayName: "Уртём Альянов",
//     },
//     balance: {
//       balance: 100000,
//       currencyImageSrc:
//         "http://192.168.0.28:5000/api/photo/d88bf937-6737-49df-a8da-110c04d72dc5",
//     },
//     search(text) {
//       console.log(text);
//     },
//   },
// };
// export const Sanctum: Story = {
//   args: {
//     returnToBank() {
//       console.log("Return to MeduzaBank");
//     },
//     user: {
//       tag: "urtyom",
//       displayName: "Уртём Альянов",
//     },
//     logo: {
//       superscriptLogo: "Sanctum",
//     },
//     sanctumShow: false,
//   },
// };
// export const Anonim: Story = {
//   args: {
//     search(text) {
//       console.log(text);
//     },
//     login() {
//       console.log("login");
//     },
//   },
// };

export const WithTime: Story = {
  args: {
    withTime: true,
  },
};
