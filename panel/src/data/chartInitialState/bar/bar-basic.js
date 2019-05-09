const initialState = {
  title: '柱状图',
  subTitle: '基础条形图',
  DataStyle: {
    type: 'default',
    value: [
      {
        key: 'population',
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
};

export default initialState;
