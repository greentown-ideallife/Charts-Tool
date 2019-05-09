const initialState = {
  title: '柱状图',
  subTitle: '分组柱状图',
  DataStyle: {
    type: 'default',
    value: [
      {
        key: 'London',
        color: '#41A0FC',
      },
      {
        key: 'Berlin',
        color: '#52CA76',
      },
    ],
  },
  XAxis: {
    showLine: true,
    tickCount: 12,
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
