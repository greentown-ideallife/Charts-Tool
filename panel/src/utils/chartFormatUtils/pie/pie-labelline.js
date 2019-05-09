import DataSet from '@antv/data-set';
import commonHandler from '../commonHandler';

const { DataView } = DataSet;

export default function formatChartConfig(config) {
  const props = { xAxisName: 'percent' };
  const dataHandler = data => {
    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    return dv;
  };

  return commonHandler(config, props, dataHandler);
}
