import DataSet from '@antv/data-set';

const data = [
  {
    country: '中国',
    population: 131744,
  },
  {
    country: '印度',
    population: 104970,
  },
  {
    country: '美国',
    population: 29034,
  },
  {
    country: '印尼',
    population: 23489,
  },
  {
    country: '巴西',
    population: 18203,
  },
];

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.source(data).transform({
  type: 'sort',

  callback(a, b) {
    // 排序依据，和原生js的排序callback一致
    return a.population - b.population > 0;
  },
});

const config = {
  BaseProps: {
    data,
  },
  ChartProps: {
    width: 600,
    height: 400,
    data: dv,
    padding: [20, 50, 60, 60],
    background: { fill: '#ffffff' },
  },
  XAxisProps: {
    name: 'country',
    label: {
      offset: 12,
    },
  },
  YAxisProps: {
    name: 'population',
  },
  TooltipProps: {
    crosshairs: null,
  },
  CoordProps: {
    transpose: true,
  },
  GeomProps: {
    type: 'interval',
    color: '#41A0FC',
    position: 'country*population',
  },
};
export default config;
