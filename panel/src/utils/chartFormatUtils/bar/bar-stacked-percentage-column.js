import DataSet from '@antv/data-set';
import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  const props = { xAxisName: 'year', yAxisName: 'percent' };
  const dataHandler = data => {
    const ds = new DataSet();
    const dv = ds
      .createView()
      .source(data)
      .transform({
        type: 'percent',
        field: 'value',
        // 统计销量
        dimension: 'country',
        // 每年的占比
        groupBy: ['year'],
        // 以不同产品类别为分组
        as: 'percent',
      });
    return dv;
  };

  return commonHandler(config, props, dataHandler);
}
