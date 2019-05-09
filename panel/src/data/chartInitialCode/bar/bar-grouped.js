import DataSet from '@antv/data-set';

const data = [
  {
    label: 'Monday',
    series1: 2800,
    series2: 2260,
  },
  {
    label: 'Tuesday',
    series1: 1800,
    series2: 1300,
  },
  {
    label: 'Wednesday',
    series1: 950,
    series2: 900,
  },
  {
    label: 'Thursday',
    series1: 500,
    series2: 390,
  },
  {
    label: 'Friday',
    series1: 170,
    series2: 100,
  },
];
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

const config = {
  BaseProps: {
    data,
  },
  ChartProps: {
    width: 600,
    height: 400,
    data: dv,
    padding: [20, 50, 80, 90],
    background: { fill: '#ffffff' },
  },
  XAxisProps: {
    name: 'label',
    label: {
      offset: 12,
    },
  },
  YAxisProps: {
    name: 'value',
    position: 'right',
  },
  TooltipProps: {
    crosshairs: null,
  },
  LegendProps: {},
  GeomProps: {
    type: 'interval',
    color: 'type',
    position: 'label*value',
    adjust: [
      {
        type: 'dodge',
        marginRatio: 1 / 32,
      },
    ],
  },
  CoordProps: {
    transpose: true,
    scale: [1, -1],
  },
};
export default config;
