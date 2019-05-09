const data = [
  {
    year: '1951 年',
    sales: 38,
  },
  {
    year: '1952 年',
    sales: 52,
  },
  {
    year: '1956 年',
    sales: 61,
  },
  {
    year: '1957 年',
    sales: 145,
  },
  {
    year: '1958 年',
    sales: 48,
  },
  {
    year: '1959 年',
    sales: 38,
  },
  {
    year: '1960 年',
    sales: 38,
  },
  {
    year: '1962 年',
    sales: 38,
  },
];

const config = {
  BaseProps: {
    data,
  },
  ChartProps: {
    width: 600,
    height: 340,
    data,
    padding: [20, 50, 60],
    scale: {
      sales: {
        tickInterval: 20,
      },
    },
    background: { fill: '#ffffff' },
  },
  XAxisProps: {
    name: 'year',
    title: null,
    label: {
      autoRotate: true,
    },
    grid: null,
  },
  YAxisProps: {
    name: 'sales',
    label: {
      autoRotate: true,
    },
    tickLine: null,
    line: null,
  },
  TooltipProps: {
    crosshairs: null,
  },
  GeomProps: {
    type: 'interval',
    color: '#41A0FC',
    position: 'year*sales',
  },
};
export default config;
