module.exports = {
  extends: ["custom/next"],
  rules: {
    "@next/next/no-img-element": "off",
    "import/no-unresolved": [2, { ignore: ['contentlayer/generated'] }],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/heading-has-content": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unnecessary-condition": "off"
  }
};
