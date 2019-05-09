const initialState = {
  title: '线图',
  subTitle: '基础折线图',
  DataStyle: {
    type: 'line',
    value: [
      {
        key: 'year',
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
};

export default initialState;
