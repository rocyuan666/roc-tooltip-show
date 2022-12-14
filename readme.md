# roc-tooltip-show

[![npm version](https://img.shields.io/npm/v/roc-tooltip-show.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/roc-tooltip-show)
[![npm downloads](https://img.shields.io/npm/dt/roc-tooltip-show.svg?style=flat-square)](https://www.npmjs.com/package/roc-tooltip-show)

echarts tooltip 自动展示，数据可视化项目鼠标不移动到图表上（无操作）也需要tooltip自动循环展示，只适用于echarts。

## 安装

```bash
npm install roc-tooltip-show
or
yarn add roc-tooltip-show
```

## 使用

```javascript
import tooltipShow from "roc-tooltip-show";

// ......
const myChart = echarts.init(document.getElementById("xxx"));
const option = { ... };
// ......

// 用法示例
const options = {
  interval: 2000,
  loopSeries: false,
  seriesIndex: 0,
  updateData: null,
}
tooltipShow(myChart, option, options);

```

## 参数
- ` myChart ` 必传 echarts 实例
- ` option ` 必传 echarts option
- ` options ` 非必传 options选项
  -  ` interval ` 默认 2000; 轮播的时间间隔，单位毫秒
  -  ` loopSeries `: 默认 false; true表示循环所有series的tooltip，false显示指定` seriesIndex `的 series tooltip
  -  ` seriesIndex `: 默认 0; 指定某个series循环显示tooltip
  -  ` updateData `: 默认 null; 自定义更新数据的函数，默认为null；用于类似于分页的效果，比如总数据有20条，图表一次只显示5条，全部数据可以分4次显示。
