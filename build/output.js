/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

const { terser } = require("rollup-plugin-terser");
const { banner } = require("./banner");

const baseOutput = {
  dir: 'dist',
  name: "rocTooltipShow",
  entryFileNames: 'rocTooltipShow.js',
  format: "umd",
  banner,
  sourcemap: false,
  sourcemapExcludeSources: false
}
const minOutput = Object.assign({}, baseOutput, {
  entryFileNames: 'rocTooltipShow.min.js',
  plugins: [
    terser()
  ]
})

module.exports = [
  baseOutput,
  minOutput,
]