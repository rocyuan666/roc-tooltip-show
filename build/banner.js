const { name, version, author, license } = require("../package.json");

const banner = 
`/*!
  * echarts tooltip 自动显示轮播
  * ${name} v${version}
  * (c) 2022-${new Date().getFullYear()} ${author}
  * email rocyuan666@163.com
  * Released under the ${license} License.
  */`

module.exports = {
  banner
}
