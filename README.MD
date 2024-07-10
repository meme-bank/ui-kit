# @meduza-bank/ui-kit
UI Kit of the bank of Meme World "Peoples Bank Memes" or "Meduza Bank"

[NPM Package](https://www.npmjs.com/package/@meduza-bank/ui-kit)
[Gitnub](https://github.com/meme-bank/ui-kit)
[VK](https://vk.com/club206737619)

## Installation

### Step 1 - Install package
If you use npm
```bash
npm i --save @meduza-bank/ui-kit@latest
```

If you use yarn
```bash
yarn add @meduza-bank/ui-kit@latest
```

#### Peer dependencies
| Package | Description | Version |
| :--- | :--- | ---: |
| react | Default library | ^18.2.0 |
| react-dom | Render library | ^18.2.0 |
| react-hook-form | Form library | 7.45.4 |
| lucide-react | Icon library | ^0.268.0 |
| @hookform/resolvers | Validation resolve form library | ^3.3.0 |
| zod | Validation library | ^3.22.2 |

### Step 2 (if you use with tailwind css) - import in `tailwind.config.ts`

```js
const conf = require("@meduza-bank/ui-kit/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...conf,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: undefined
}
```

```ts
import { Config } from 'tailwindcss';

// @ts-ignore
import conf from "@meduza-bank/ui-kit/tailwind.config";

export default {
    ...conf,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
    prefix: "as-"
} satisfies Config;
```

`prefix` is **REQUIRED**

### Step 3 - import in project

```ts
import sfUiFont from "@meduza-bank/ui-kit/sf-ui-stylesheet.css"; // SF UI font
import vkSansFont from "@meduza-bank/ui-kit/vk-sans-stylesheet.css"; // VK Sans font
import meduzaStyles from "@meduza-bank/ui-kit/style.css"; // Production styles
import meduzaStylesSRC from "@meduza-bank/ui-kit/src-style.css"; // Tailwind styles (if you use with tailwind css)
```

### Step 4 - use the package

## Others
This package builded with [shadcn/ui](https://ui.shadcn.com/)