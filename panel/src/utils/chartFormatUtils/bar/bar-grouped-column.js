import DataSet from '@antv/data-set';
import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  const props = { xAxisName: '月份', yAxisName: '月均降雨量' };
  const dataHandler = data => {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
      // 展开字段集
      key: '月份',
      // key字段
      value: '月均降雨量', // value字段
    });

    return dv;
  };

  return commonHandler(config, props, dataHandler);
}
