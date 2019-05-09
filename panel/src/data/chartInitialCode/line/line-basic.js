const data = [
  {
    year: '1991',
    value: 3,
  },
  {
    year: '1992',
    value: 4,
  },
  {
    year: '1993',
    value: 3.5,
  },
  {
    year: '1994',
    value: 5,
  },
  {
    year: '1995',
    value: 4.9,
  },
  {
    year: '1996',
    value: 6,
  },
  {
    year: '1997',
    value: 7,
  },
  {
    year: '1998',
    value: 9,
  },
  {
    year: '1999',
    value: 13,
  },
];
const cols = {
  value: {
    min: 0,
  },
  year: {
    range: [0, 1],
  },
};

const config = {
  BaseProps: {
    data,
  },
  ChartProps: {
    width: 600,
    height: 340,
    data,
    scale: cols,
    padding: [20, 50, 50],
    background: { fill: '#ffffff' },
  },
  XAxisProps: {
    name: 'year',
  },
  YAxisProps: {
    name: 'value',
  },
  TooltipProps: {
    crosshairs: null,
  },
  GeomProps: [
    {
      type: 'line',
      position: 'year*value',
      size: 2,
    },
    {
      type: 'point',
      position: 'year*value',
      size: 4,
      shape: 'circle',
      style: {
        stroke: '#fff',
        lineWidth: 1,
      },
    },
  ],
};
export default config;
