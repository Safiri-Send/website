import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable all ESLint rules
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/prefer-as-const": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      
      // Disable React specific rules
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
      "react/no-children-prop": "off",
      "react/jsx-key": "off",
      "react/jsx-no-target-blank": "off",
      
      // Disable Next.js specific rules
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-page-custom-font": "off",
      
      // Disable general JavaScript/ES6 rules
      "no-unused-vars": "off",
      "no-console": "off",
      "no-debugger": "off",
      "no-alert": "off",
      "no-undef": "off",
      "no-unreachable": "off",
      "no-empty": "off",
      "prefer-const": "off",
      "no-var": "off",
    }
  }
];

export default eslintConfig;