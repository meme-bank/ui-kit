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

    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
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
  }
};
export default config;
