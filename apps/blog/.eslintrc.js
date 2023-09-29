module.exports = {
  extends: ["custom/next"],
  rules: {
    "@next/next/no-img-element": "off",
    "import/no-unresolved": [2, { ignore: ['contentlayer/generated'] }],
    "import/no-relative-packages": "off"
  }
};
