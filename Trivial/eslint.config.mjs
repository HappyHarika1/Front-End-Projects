import js from "@eslint/js";
import globals from "globals";
import htmlPlugin from "eslint-plugin-html";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "script",
    },
  },
  {
    files: ["**/*.html"],
    plugins: { html: htmlPlugin },
    languageOptions: {
      globals: globals.browser,
    },
    processor: htmlPlugin.processors.html,
  },
]);
