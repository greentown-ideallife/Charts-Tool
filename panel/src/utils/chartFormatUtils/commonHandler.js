function getMultiGeomColorProps(num, color) {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    result.push({ color });
  }
  return result;
}

export default function(config, props, dataHandler) {
  const { width, height, color, data, title, subTitle } = config;
  let dv;
  const { xAxisName, yAxisName, geomColorNum } = props;

  const defaultTickLine = {
    lineWidth: 1, // 刻度线宽
    stroke: '#ccc', // 刻度线的颜色
    length: 5, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
  };
  const defaultLine = {
    stroke: '#dddddd',
    fill: '#ffffff',
    lineWidth: 1,
  };
  const defaultGrid = {
    type: 'line', // 网格的类型
    lineStyle: {
      stroke: '#EFEFEF', // 网格线的颜色
      lineWidth: 0.5, // 网格线的宽度复制代码
      lineDash: [3, 3], // 网格线的虚线配置，第一个参数描述虚线的实部占多少像素，第二个参数描述虚线的虚部占多少像素
    }, // 网格线的样式配置，原有属性为 line
  };

  const {
    title: XTitle,
    tickCount: XTickCount,
    autoRotate: XAutoRotate = true,
    showTickLine: XShowTickLine = true,
    showLine: XShowLine = true,
    showGrid: XShowGrid = false,
  } = config.XAxis || {};
  const {
    title: YTitle,
    tickCount: YTickCount,
    autoRotate: YAutoRotate = true,
    showTickLine: YShowTickLine = false,
    showLine: YShowLine = false,
    showGrid: YShowGrid = true,
  } = config.YAxis || {};

  const XAxisConfig = {
    name: xAxisName,
    title: XTitle || null,
    label: {
      autoRotate: XAutoRotate,
    },
  };
  if (!XShowTickLine) {
    XAxisConfig.tickLine = null;
  } else {
    XAxisConfig.tickLine = defaultTickLine;
  }
  if (!XShowLine) {
    XAxisConfig.line = null;
  } else {
    XAxisConfig.line = defaultLine;
  }
  if (!XShowGrid) {
    XAxisConfig.grid = null;
  } else {
    XAxisConfig.grid = defaultGrid;
  }

  const YAxisConfig = {
    name: yAxisName,
    title: YTitle || null,
    label: {
      autoRotate: YAutoRotate,
    },
  };
  if (!YShowTickLine) {
    YAxisConfig.tickLine = null;
  } else {
    YAxisConfig.tickLine = defaultTickLine;
  }
  if (!YShowLine) {
    YAxisConfig.line = null;
  } else {
    YAxisConfig.line = defaultLine;
  }
  if (!YShowGrid) {
    YAxisConfig.grid = null;
  } else {
    YAxisConfig.grid = defaultGrid;
  }

  if (data && dataHandler) {
    dv = dataHandler(data);
  }
  return {
    title,
    subTitle,
    BaseProps: {
      data,
    },
    ChartProps: {
      width,
      height,
      data: dv || data,
      scale: {
        [xAxisName]: {
          alias: XTitle, // x轴标题
          tickCount: XTickCount,
        },
        [yAxisName]: {
          alias: YTitle, // y轴标题
          tickCount: YTickCount,
        },
      },
    },
    XAxisProps: XAxisConfig,
    YAxisProps: yAxisName ? YAxisConfig : null,
    GeomProps: (geomColorNum && getMultiGeomColorProps(geomColorNum, color)) || { color },
    LegendProps: config.Legend || null,
  };
}
