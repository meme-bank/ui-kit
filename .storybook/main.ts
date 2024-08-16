import type { StorybookConfig } from "@storybook/react-webpack5";
import webpackConfig from "../webpack.config";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.tsx"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },

    },
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  webpack(cfg) {
    return {
      ...cfg,
      resolve: {
        ...webpackConfig.resolve,
        ...cfg.resolve,
        alias: {
          ...webpackConfig.resolve?.alias,
          ...cfg.resolve?.alias
        },
        plugins: [
          new TsconfigPathsPlugin()
        ]
      }
    }
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
