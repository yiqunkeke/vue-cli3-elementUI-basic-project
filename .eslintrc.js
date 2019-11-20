module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 禁用console
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 禁用debugger
    // "quote-props": 1
  }
};
