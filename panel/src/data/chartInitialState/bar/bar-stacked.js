const initialState = {
  title: '柱状图',
  subTitle: '堆叠条形图',
  DataStyle: {
    type: 'default',
    value: [
      {
        key: '小于5岁',
        color: '#41A0FC',
      },
      {
        key: '5至13岁',
        color: '#52CA76',
      },
      {
        key: '14至17岁',
        color: '#FAD451',
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
