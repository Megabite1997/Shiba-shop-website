import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    plugins: {
      import: importPlugin, // Include the import plugin
    },
    rules: {
      "import/no-unresolved": "error", // Enable rule to catch unresolved paths
      "no-undef": "error",
    },
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
