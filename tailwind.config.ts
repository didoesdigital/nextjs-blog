import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blog/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mdx-components.tsx",
  ],
  theme: {
    fontFamily: {
      sans: [
        "var(--font-work-sans)",
        "ui-sans-serif",
        "system-ui",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "sans-serif",
      ],
      serif: [
        "var(--font-crimson)",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      mono: [
        "var(--font-overpass-mono)",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      blue: {
        50: "var(--color-blue-50)",
        100: "var(--color-blue-100)",
        200: "var(--color-blue-200)",
        300: "var(--color-blue-300)",
        400: "var(--color-blue-400)",
        500: "var(--color-blue-500)",
        600: "var(--color-blue-600)",
        700: "var(--color-blue-700)",
        800: "var(--color-blue-800)",
        900: "var(--color-blue-900)",
        950: "var(--color-blue-950)",
      },
      teal: {
        50: "var(--color-teal-50)",
        100: "var(--color-teal-100)",
        200: "var(--color-teal-200)",
        300: "var(--color-teal-300)",
        400: "var(--color-teal-400)",
        500: "var(--color-teal-500)",
        600: "var(--color-teal-600)",
        700: "var(--color-teal-700)",
        800: "var(--color-teal-800)",
        900: "var(--color-teal-900)",
        950: "var(--color-teal-950)",
      },
      neutral: {
        50: "var(--color-neutral-50)",
        100: "var(--color-neutral-100)",
        200: "var(--color-neutral-200)",
        300: "var(--color-neutral-300)",
        400: "var(--color-neutral-400)",
        500: "var(--color-neutral-500)",
        600: "var(--color-neutral-600)",
        700: "var(--color-neutral-700)",
        800: "var(--color-neutral-800)",
        900: "var(--color-neutral-900)",
        950: "var(--color-neutral-950)",
      },
      crimson: {
        50: "var(--color-crimson-50)",
        100: "var(--color-crimson-100)",
        200: "var(--color-crimson-200)",
        300: "var(--color-crimson-300)",
        400: "var(--color-crimson-400)",
        500: "var(--color-crimson-500)",
        600: "var(--color-crimson-600)",
        700: "var(--color-crimson-700)",
        800: "var(--color-crimson-800)",
        900: "var(--color-crimson-900)",
        950: "var(--color-crimson-950)",
      },
      salmon: {
        50: "var(--color-salmon-50)",
        100: "var(--color-salmon-100)",
        200: "var(--color-salmon-200)",
        300: "var(--color-salmon-300)",
        400: "var(--color-salmon-400)",
        500: "var(--color-salmon-500)",
        600: "var(--color-salmon-600)",
        700: "var(--color-salmon-700)",
        800: "var(--color-salmon-800)",
        900: "var(--color-salmon-900)",
        950: "var(--color-salmon-950)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: ({ theme }: PluginAPI) => ({
        DEFAULT: {
          css: {
            // '--tw-prose-body': theme('colors.teal[800]'),
            "--tw-prose-headings": theme("colors.teal[800]"),
            // '--tw-prose-lead': theme('colors.teal[700]'),
            // '--tw-prose-links': theme('colors.teal[900]'),
            // '--tw-prose-bold': theme('colors.teal[900]'),
            // '--tw-prose-counters': theme('colors.teal[600]'),
            // '--tw-prose-bullets': theme('colors.teal[400]'),
            // '--tw-prose-hr': theme('colors.teal[300]'),
            // '--tw-prose-quotes': theme('colors.teal[900]'),
            // '--tw-prose-quote-borders': theme('colors.teal[300]'),
            // '--tw-prose-captions': theme('colors.teal[700]'),
            // '--tw-prose-code': theme('colors.teal[900]'),
            // '--tw-prose-pre-code': theme('colors.teal[100]'),
            // '--tw-prose-pre-bg': theme('colors.teal[900]'),
            // '--tw-prose-th-borders': theme('colors.teal[300]'),
            // '--tw-prose-td-borders': theme('colors.teal[200]'),
            // '--tw-prose-invert-body': theme('colors.teal[200]'),
            "--tw-prose-invert-headings": theme("colors.teal[200]"),
            // '--tw-prose-invert-lead': theme('colors.teal[300]'),
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.teal[400]'),
            // '--tw-prose-invert-bullets': theme('colors.teal[600]'),
            // '--tw-prose-invert-hr': theme('colors.teal[700]'),
            // '--tw-prose-invert-quotes': theme('colors.teal[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.teal[700]'),
            // '--tw-prose-invert-captions': theme('colors.teal[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.teal[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.teal[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.teal[700]'),
            ":is(h1, h2, h3, h4, h5) a": {
              "font-weight": "inherit",
              "text-decoration": "inherit",
            },
            pre: {
              paddingTop: 0,
              paddingInlineEnd: 0,
              paddingBottom: 0,
              paddingInlineStart: 0,
            },
          },
        },
        xl: {
          css: {
            ":is(h1, h2, h3, h4, h5) a": {
              "font-weight": "inherit",
              "text-decoration": "inherit",
            },
            pre: {
              paddingTop: 0,
              paddingInlineEnd: 0,
              paddingBottom: 0,
              paddingInlineStart: 0,
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
