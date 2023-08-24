import { StoryObj, Meta } from "@storybook/react";
import { MessagePagePart } from "./message-page-part";
import React from "react";

type MessagePagePartType = typeof MessagePagePart;

const QrCodeMeta: Meta<MessagePagePartType> = {
    component: MessagePagePart,
    tags: ['autodocs'],
    args: {
        children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur deserunt architecto blanditiis atque? Itaque, provident neque ipsam assumenda laudantium accusamus. Libero ex ratione quae corporis maxime saepe iure cum!</p>
    }
}

export default QrCodeMeta;

type Story = StoryObj<MessagePagePartType>;

export const Info: Story = {}
export const Error: Story = {
    args: {
        type: "error"
    }
}
export const Warn: Story = {
    args: {
        type: "warning"
    }
}
export const Success: Story = {
    args: {
        type: "success"
    }
}
export const WithClose: Story = {
    args: {
        close() {
            console.log("closed!")
        },
    }
}