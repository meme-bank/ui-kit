import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import alias from "@rollup/plugin-alias";
import path from "path";
import image from '@rollup/plugin-image';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        interop: "compat"
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react-textarea-autosize"],
    plugins: [
      alias({
        entries: [
          { find: "@", replacement: path.resolve(__dirname, "./src") },
          { find: "@ui-components", replacement: path.resolve(__dirname, "./src/components/ui") },
          { find: "@components", replacement: path.resolve(__dirname, "./src/components") },
          { find: "@lib", replacement: path.resolve(__dirname, "./src/lib") },
        ]
      }),
      external(),
      resolve(),
      commonjs(),
      image(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      terser()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [
      alias({
        entries: [
          { find: "@", replacement: path.resolve("./dist/esm/types/") },
          { find: "@ui-components", replacement: path.resolve("./dist/esm/types/components/ui") },
          { find: "@components", replacement: path.resolve("./dist/esm/types/components") },
          { find: "@lib", replacement: path.resolve("./dist/esm/types/lib") },
        ]
      }),
      dts()
    ],
  },
];