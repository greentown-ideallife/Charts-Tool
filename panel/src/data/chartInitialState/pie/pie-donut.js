const initialState = {
  title: '饼图',
  subTitle: '基础环图',
  DataStyle: {
    type: 'default',
    colorType: 'Array',
    colorKey: 'item',
    value: [
      {
        key: '事例1',
        color: '#41A0FC',
      },
      {
        key: '事例2',
        color: '#42CACA',
      },
      {
        key: '事例3',
        color: '#53CA76',
      },
      {
        key: '事例4',
        color: '#FAD451',
      },
      {
        key: '事例5',
        color: '#F1677E',
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
