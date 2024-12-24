import js from "@eslint/js";
import * as parser from "@typescript-eslint/parser";
import * as eslintPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

// Common configurations
const commonConfig = {
  plugins: {
    prettier,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        tabWidth: 2,
      },
    ],
  },
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    globals: {
      node: true,
      browser: true,
      require: "readonly",
    },
  },
};

// JavaScript/TypeScript specific configurations
const jstsConfig = {
  ...commonConfig,
  plugins: {
    ...commonConfig.plugins,
    "@typescript-eslint": eslintPlugin,
    react,
    "react-hooks": reactHooks,
  },
  rules: {
    ...commonConfig.rules,
    ...eslintPlugin.configs.recommended.rules,
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};

// Astro specific configurations
const astroConfig = {
  files: ["**/*.astro"],
  ...commonConfig,
  languageOptions: {
    parser: astroParser,
    parserOptions: {
      parser: "@typescript-eslint/parser",
      extraFileExtensions: [".astro"],
    },
  },
  plugins: {
    ...commonConfig.plugins,
    astro: eslintPluginAstro,
  },
  rules: {
    ...commonConfig.rules,
    ...eslintPluginAstro.configs.recommended.rules,
  },
};

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx"],
    ...commonConfig,
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...jstsConfig,
    languageOptions: {
      ...commonConfig.languageOptions,
      parser: parser.default,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  astroConfig,
  {
    files: ["**/tailwind.config.mjs"],
    ...commonConfig,
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        require: "readonly",
      },
    },
  },
];
