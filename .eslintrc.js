module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  extends: "airbnb",
  parserOptions: {
    parser: "@babel/parser",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }], // 缩进为2
    "linebreak-style": [2, "unix"], // unix空行
    quotes: [2, "single"], // 单引号
    semi: [2, "never"], // 行结尾没有分号
    "no-console": 1, // 使用console会被警告
    "no-unused-vars": [1, { args: "after-used", ignoreRestSiblings: true }], // 未使用的变量会被警告
    "comma-dangle": [2, "always-multiline"], // 多行对象或者数组结尾需要加逗号
    "eol-last": [2, "always"], // 文件结尾空行
    "no-var": 2, // 禁止使用var
    "max-len": [2, 200], // 每行最多200个字符
    "max-lines": [2, 500], // 一个文件最多500行
    "react/prop-types": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
