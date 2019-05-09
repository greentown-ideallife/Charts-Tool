const initialState = {
  title: '柱状图',
  subTitle: '分组条形图',
  DataStyle: {
    type: 'default',
    value: [
      {
        key: 'series1',
        color: '#41A0FC',
      },
      {
        key: 'series2',
        color: '#52CA76',
      },
    ],
  },
  XAxis: {
    showLine: true,
    tickCount: 7,
    autoRotate: true,
    showTickLine: true,
    showGrid: false,
  },
  YAxis: {
    showLine: false,
    autoRotate: true,
    showTickLine: false,
    showGrid: true,
  },
  Legend: {},
};

export default initialState;
