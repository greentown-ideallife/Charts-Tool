import DataSet from '@antv/data-set';

const data = [
  {
    State: 'WY',
    小于5岁: 25635,
    '5至13岁': 1890,
    '14至17岁': 9314,
  },
  {
    State: 'DC',
    小于5岁: 30352,
    '5至13岁': 20439,
    '14至17岁': 10225,
  },
  {
    State: 'VT',
    小于5岁: 38253,
    '5至13岁': 42538,
    '14至17岁': 15757,
  },
  {
    State: 'ND',
    小于5岁: 51896,
    '5至13岁': 67358,
    '14至17岁': 18794,
  },
  {
    State: 'AK',
    小于5岁: 72083,
    '5至13岁': 85640,
    '14至17岁': 22153,
  },
];
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

const config = {
  BaseProps: {
    data,
  },
  ChartProps: {
    width: 600,
    height: 340,
    data: dv,
    padding: [20, 50, 80],
    background: { fill: '#ffffff' },
  },
  XAxisProps: {
    name: 'State',
    label: {
      offset: 12,
    },
  },
  YAxisProps: {
    name: '人口数量',
  },
  TooltipProps: {
    crosshairs: null,
  },
  LegendProps: {},
  CoordProps: {
    transpose: true,
  },
  GeomProps: {
    type: 'intervalStack',
    color: '年龄段',
    position: 'State*人口数量',
  },
};
export default config;
