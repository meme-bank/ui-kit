import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollArea, ScrollBar } from "./scroll-area";

type ScrollAreaType = typeof ScrollArea;

const ScrollAreaMeta: Meta<ScrollAreaType> = {
  component: ScrollArea,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <div className="ms:flex ms:w-max ms:space-x-4 ms:p-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <figure key={id} className="ms:shrink-0">
              <div className="ms:overflow-hidden ms:rounded-md">
                <img
                  src={`https://placehold.co/300x400`}
                  alt={`Placehold image`}
                  className="ms:aspect-[3/4] ms:h-fit ms:w-fit ms:object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="ms:pt-2 ms:text-xs ms:text-muted-foreground">
                Photo id -{" "}
                <span className="ms:font-semibold ms:text-foreground">
                  {id}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </>
    ),
    className: "ms:w-96 ms:whitespace-nowrap ms:rounded-md ms:border",
  },
};

export default ScrollAreaMeta;

type Story = StoryObj<ScrollAreaType>;

export const Default: Story = {};
