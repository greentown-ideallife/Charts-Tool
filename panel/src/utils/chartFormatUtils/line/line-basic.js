import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  // 线图包含两种颜色，颜色以及点
  const props = {
    xAxisName: 'year',
    yAxisName: 'value',
    geomColorNum: 2,
  };

  return commonHandler(config, props);
}
