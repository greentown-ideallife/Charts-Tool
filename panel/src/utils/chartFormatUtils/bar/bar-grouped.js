import DataSet from '@antv/data-set';
import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  const props = { xAxisName: 'label', yAxisName: 'value' };
  const dataHandler = data => {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['series1', 'series2'],
      // 展开字段集
      key: 'type',
      // key字段
      value: 'value', // value字段
    });
    return dv;
  };

  return commonHandler(config, props, dataHandler);
}
