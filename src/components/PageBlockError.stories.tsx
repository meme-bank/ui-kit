import type { Meta, StoryObj } from '@storybook/react';
import { PageBlockError } from "./PageBlockError";

type PageBlockErrorType = typeof PageBlockError

const meta: Meta<PageBlockErrorType> = {
    component: PageBlockError,
    tags: ['autodocs'],
    args: {
        error: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam eius excepturi animi deleniti exercitationem debitis dolores. Libero aut optio delectus temporibus tempora, repellendus quo officia. Ex quam id consequatur?"
    }
}

export default meta;

type Story = StoryObj<PageBlockErrorType>;

export const Default: Story = {
};