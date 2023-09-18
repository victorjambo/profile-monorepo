module.exports = {
  extends: ["custom/next"],
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "unicorn/filename-case": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "@next/next/no-img-element": "off",
    "@next/next/no-head-element": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  }
};
