const initialState = {
  title: '线图',
  subTitle: '多条折线图',
  DataStyle: {
    type: 'line',
    colorType: 'Array',
    colorKey: 'city',
    value: [
      {
        key: 'Tokyo',
        color: '#41A0FC',
      },
      {
        key: 'London',
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
