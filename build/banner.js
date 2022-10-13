/*
 * @Author       : rocyuan
 * @Email        : rocyuan666@163.com
 * @Description  : rollup config
 */

const { name, version, author, license } = require("../package.json");

const banner = 
`/*!
  * echarts tooltip 自动显示轮播
  * ${name} v${version}
  * (c) 2022-${new Date().getFullYear()} ${author}
  * Email rocyuan666@163.com
  * Released under the ${license} License.
  */`

module.exports = {
  banner
}
