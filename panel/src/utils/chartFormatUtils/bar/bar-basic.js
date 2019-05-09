import DataSet from '@antv/data-set';
import commonHandler from '../commonHandler';

export default function formatChartConfig(config) {
  const props = { xAxisName: 'country', yAxisName: 'population' };
  const dataHandler = data => {
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
      type: 'sort',

      callback(a, b) {
        // 排序依据，和原生js的排序callback一致
        return a.population - b.population > 0;
      },
    });

    return dv;
  };

  return commonHandler(config, props, dataHandler);
}
