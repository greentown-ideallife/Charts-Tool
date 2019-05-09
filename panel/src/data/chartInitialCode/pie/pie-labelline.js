import DataSet from '@antv/data-set';

const { DataView } = DataSet;
const data = [
  {
    item: '事例一',
    count: 40,
  },
  {
    item: '事例二',
    count: 21,
  },
  {
    item: '事例三',
    count: 17,
  },
  {
    item: '事例四',
    count: 13,
  },
  {
    item: '事例五',
    count: 9,
  },
];
const dv = new DataView();
dv.source(data).transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent',
});
const cols = {
  percent: {
    formatter: val => `${val * 100}%`,
  },
};

const config = {
  BaseProps: {
    data,
  },
  ChartProps: {
    width: 600,
    height: 340,
    data: dv,
    scale: cols,
    padding: [20, 50, 80],
    background: { fill: '#ffffff' },
  },
  CoordProps: {
    type: 'theta',
    radius: 0.75,
  },
  XAxisProps: {
    name: 'percent',
  },
  LegendProps: {},
  TooltipProps: {
    crosshairs: null,
    showTitle: false,
    itemTpl:
            '<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>',
  },
  GeomProps: {
    type: 'intervalStack',
    color: ['item', ['#41A0FC', '#42CACA', '#53CA76', '#FAD451', '#F1677E']],
    position: 'percent',
    tooltip: [
      'item*percent',
      (item, percent) => ({
        name: item,
        value: `${percent * 100}%`,
      }),
    ],
    style: {
      lineWidth: 1,
      stroke: '#fff',
    },
  },
  LabelProps: {
    content: 'percent',
    offset: -40,
    formatter: (text, item) => {
      const { point } = item; // 每个弧度对应的点
      let { percent } = point;
      percent = `${(percent * 100).toFixed(2)}%`;
      return percent;
    },
    textStyle: {
      rotate: 0,
      textAlign: 'center',
      shadowBlur: 2,
      fill: '#fff',
    },
  },
};
export default config;
