import type { Meta, StoryObj } from '@storybook/react';
import { Header } from "./Header";

type HeaderType = typeof Header

const meta: Meta<HeaderType> = {
    component: Header,
    tags: ['autodocs'],
    args: {
        useTooltipProvider: true,
        themeSwitch(theme) {
            console.log("switched to " + theme)
        },
        sanctumShow: true
    }
}

export default meta;

type Story = StoryObj<HeaderType>;

export const Authorized: Story = {
    args: {
        user: {
            tag: "urtyom",
            displayName: "Уртём Альянов"
        },
        balance: {
            balance: 100000
        },
        search(text) {
            console.log(text);
        },
    }
};
export const Sanctum: Story = {
    args: {
        returnToBank() {
            console.log("Return to MeduzaBank")
        },
        user: {
            tag: "urtyom",
            displayName: "Уртём Альянов"
        },
        logo: {
            superscriptLogo: "Sanctum"
        },
        sanctumShow: false,
    }
};
export const Anonim: Story = {
    args: {
        search(text) {
            console.log(text);
        },
        login() {
            console.log("login");
        },
    }
};