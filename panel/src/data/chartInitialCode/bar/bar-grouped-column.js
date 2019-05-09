import DataSet from '@antv/data-set';

const data = [
    {
        name: 'London',
        'Jan.': 18.9,
        'Feb.': 28.8,
        'Mar.': 39.3,
        'Apr.': 81.4,
        'May.': 47,
        'Jun.': 20.3,
        'Jul.': 24,
        'Aug.': 35.6,
    },
    {
        name: 'Berlin',
        'Jan.': 12.4,
        'Feb.': 23.2,
        'Mar.': 34.5,
        'Apr.': 99.7,
        'May.': 52.6,
        'Jun.': 35.5,
        'Jul.': 37.4,
        'Aug.': 42.4,
    },
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
    type: 'fold',
    fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
    // 展开字段集
    key: '月份',
    // key字段
    value: '月均降雨量', // value字段
});

const config = {
    BaseProps: {
        data,
    },
    ChartProps: {
        width: 600,
        height: 340,
        data: dv,
        padding: [20, 50, 80],
        background: { fill: '#ffffff' },
    },
    XAxisProps: {
        name: '月份',
    },
    YAxisProps: {
        name: '月均降雨量',
    },
    TooltipProps: {
        crosshairs: null,
    },
    LegendProps: {},
    GeomProps: {
        type: 'interval',
        color: 'name',
        position: '月份*月均降雨量',
        adjust: [
            {
                type: 'dodge',
                marginRatio: 1 / 32,
            },
        ],
    },
};
export default config;
