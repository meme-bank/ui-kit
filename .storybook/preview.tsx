import { withThemeByDataAttribute } from '@storybook/addon-styling';
import type { Preview } from "@storybook/react";
import { Buffer } from "buffer";
import "../src-style.css";

window.Buffer = Buffer;

export const decorators = [
  // withThemeByDataAttribute({
  //   defaultTheme: "",
  //   themes: {
  //     default: ""
  //   },
  //   attributeName: "data-vaul-drawer-wrapper"
  // }),
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

export default preview;
