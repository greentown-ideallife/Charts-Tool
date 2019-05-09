import DataSet from '@antv/data-set';
import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  const props = {
    xAxisName: 'month',
    yAxisName: 'temperature',
    geomColorNum: 2,
  };
  const dataHandler = data => {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['Tokyo', 'London'],
      // 展开字段集
      key: 'city',
      // key字段
      value: 'temperature', // value字段
    });
    return dv;
  };

  return commonHandler(config, props, dataHandler);
}
