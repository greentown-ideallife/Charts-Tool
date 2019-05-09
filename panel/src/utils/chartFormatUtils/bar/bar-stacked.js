import DataSet from '@antv/data-set';
import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  const props = { xAxisName: 'State', yAxisName: '人口数量' };
  const dataHandler = data => {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['小于5岁', '5至13岁', '14至17岁'],
      // 展开字段集
      key: '年龄段',
      // key字段
      value: '人口数量',
      // value字段
      retains: ['State'], // 保留字段集，默认为除fields以外的所有字段
    });
    return dv;
  };

  return commonHandler(config, props, dataHandler);
}
