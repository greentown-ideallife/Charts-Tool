const initialState = {
  title: '柱状图',
  subTitle: '基础柱状图',
  DataStyle: {
    type: 'default',
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
