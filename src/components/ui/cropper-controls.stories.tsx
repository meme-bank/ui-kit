import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./button";
import { CropperControls, CropperDialogContent } from "./cropper-controls";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

type CropperControlsType = typeof CropperDialogContent;

const meta: Meta<CropperControlsType> = {
  component: CropperDialogContent,
  tags: ["autodocs"],
  args: {
    onUpload: () => {
      console.log("Uploaded!")
    }
  },
  render(args) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Открыть диалог</Button>
        </DialogTrigger>
        <CropperDialogContent {...args}  />
      </Dialog>
    )
  }
};

export default meta;

type Story = StoryObj<CropperControlsType>;

export const Default: Story = {
  args: {
    image: "https://placehold.co/500x500",
    type: "avatar",
  },
};

export const background: Story = {
  args: {
    type: "background",
    image: "https://placehold.co/500x200",
  },
};
