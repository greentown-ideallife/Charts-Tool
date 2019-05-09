import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  const props = { xAxisName: 'year', yAxisName: 'sales' };

  return commonHandler(config, props);
}
