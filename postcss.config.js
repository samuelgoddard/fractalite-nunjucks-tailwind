const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");
const postcssNested = require("postcss-nested");

module.exports = {
  plugins: [
    postcssPresetEnv({ stage: 2 }),
    tailwindcss("./tailwind.js"),
    postcssNested({ unwrap: ["screen"] }),
    autoprefixer(),
  ],
};
