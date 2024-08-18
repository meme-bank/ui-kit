import type { Meta, StoryObj } from "@storybook/react";
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
    )
  },
};

export default meta;

type Story = StoryObj<ComboBoxType>;

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
