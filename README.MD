# @meduza-bank/ui-kit
UI Kit of the bank of Meme World "Peoples Bank Memes" or "Meduza Bank"

[NPM Package](https://www.npmjs.com/package/@meduza-bank/ui-kit)
[Github](https://github.com/meme-bank/ui-kit)
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

### Step 2 (if you use with tailwind css 4) - import in `src-style.css`

```css
/* ./path/to/src-style.css */
@import "tailwindcss" prefix(ms); /* or other prefix */

/* fonts */
@import "@meduza-bank/ui-kit/sf-ui-stylesheet.css";
@import "@meduza-bank/ui-kit/vk-sans-stylesheet.css";

/* meduza ui kit styles */
@import "@meduza-bank/ui-kit/variants-stylesheet.css";
@import "@meduza-bank/ui-kit/theme-stylesheet.css";
@import "@meduza-bank/ui-kit/base-stylesheet.css";
```

### Step 3 - import in project

```ts
import meduzaStyles from "@meduza-bank/ui-kit/style.css"; // Production styles
import styles from "./path/to/src-style.css"; // Tailwind styles (if you use with tailwind css)

// If using remix
import { Links } from "@remix-run/react";

export const links: LinksFunction = () => [
  {
    href: meduzaStyles,
    rel: "stylesheet"
  },
  {
    href: styles,
    rel: "stylesheet"
  },
  // ...
];
```

### Step 4 - use the package

## Others
This package builded with [shadcn/ui](https://ui.shadcn.com/)