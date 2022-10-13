const buble = require("@rollup/plugin-buble");
const output = require("./build/output")

module.exports = {
  input: "./lib/index.js",
  output,
  plugins: [
    buble(),
  ]
};
