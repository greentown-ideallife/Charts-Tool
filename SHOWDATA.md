## 图表数据概况

* 柱状图
* 折线图
* 饼图

### 后续数据格式会相对应的改造及统一
```
 {
  schema: {
    xAxis:['label'],
    yAxis:['series1','series2']
  },
  data:[
  {
    label: 'Monday',
    series1: 2800,
    series2: 2260,
  },
  {
    label: 'Tuesday',
    series1: 1800,
    series2: 1300,
  },
  {
    label: 'Wednesday',
    series1: 950,
    series2: 900,
  },
  {
    label: 'Thursday',
    series1: 500,
    series2: 390,
  },
  {
    label: 'Friday',
    series1: 170,
    series2: 100,
  }]
 }
```
* x表示在x轴所要展示的数据字段'label' <br />
* y表示在y轴所要展示的数据字段'series1','series2'<br />
* data表示在所有的数据 <br />

### 以下数据格式为目前13种图表数据格式
1. 基础柱状图，基础条形图, 基础折线图
```
 [
  {
    year: '1951 年',
    sales: 38,
  },
  {
    year: '1952 年',
    sales: 52,
  },
  {
    year: '1956 年',
    sales: 61,
  },
  {
    year: '1957 年',
    sales: 145,
  },
  {
    year: '1958 年',
    sales: 48,
  },
  {
    year: '1959 年',
    sales: 38,
  },
  {
    year: '1960 年',
    sales: 38,
  },
  {
    year: '1962 年',
    sales: 38,
  },
]; 
```
2. 分组条形图
``` 
[
  {
    label: 'Monday',
    series1: 2800,
    series2: 2260,
  },
  {
    label: 'Tuesday',
    series1: 1800,
    series2: 1300,
  },
  {
    label: 'Wednesday',
    series1: 950,
    series2: 900,
  },
  {
    label: 'Thursday',
    series1: 500,
    series2: 390,
  },
  {
    label: 'Friday',
    series1: 170,
    series2: 100,
  },
];
```
3. 分组柱状图, 堆叠柱状图
``` 
[
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
```
4. 堆叠条形图
``` 
[
  {
    State: 'WY',
    小于5岁: 25635,
    '5至13岁': 1890,
    '14至17岁': 9314,
  },
  {
    State: 'DC',
    小于5岁: 30352,
    '5至13岁': 20439,
    '14至17岁': 10225,
  },
  {
    State: 'VT',
    小于5岁: 38253,
    '5至13岁': 42538,
    '14至17岁': 15757,
  },
  {
    State: 'ND',
    小于5岁: 51896,
    '5至13岁': 67358,
    '14至17岁': 18794,
  },
  {
    State: 'AK',
    小于5岁: 72083,
    '5至13岁': 85640,
    '14至17岁': 22153,
  },
];
```
5. 百分比堆叠柱状图
```
[
  {
    country: 'Europe',
    year: '1750',
    value: 163,
  },
  {
    country: 'Europe',
    year: '1800',
    value: 203,
  },
  {
    country: 'Europe',
    year: '1850',
    value: 276,
  },
  {
    country: 'Europe',
    year: '1900',
    value: 408,
  },
  {
    country: 'Europe',
    year: '1950',
    value: 547,
  },
  {
    country: 'Europe',
    year: '1999',
    value: 729,
  },
  {
    country: 'Europe',
    year: '2050',
    value: 628,
  },
  {
    country: 'Europe',
    year: '2100',
    value: 828,
  },
  {
    country: 'Asia',
    year: '1750',
    value: 502,
  },
  {
    country: 'Asia',
    year: '1800',
    value: 635,
  }
];
```
6. 曲线折线图, 多条折线图
``` 
[
  {
    month: 'Jan',
    Tokyo: 7.0,
    London: 3.9,
  },
  {
    month: 'Feb',
    Tokyo: 6.9,
    London: 4.2,
  },
  {
    month: 'Mar',
    Tokyo: 9.5,
    London: 5.7,
  },
  {
    month: 'Apr',
    Tokyo: 14.5,
    London: 8.5,
  },
  {
    month: 'May',
    Tokyo: 18.4,
    London: 11.9,
  },
  {
    month: 'Jun',
    Tokyo: 21.5,
    London: 15.2,
  },
  {
    month: 'Jul',
    Tokyo: 25.2,
    London: 17.0,
  },
  {
    month: 'Aug',
    Tokyo: 26.5,
    London: 16.6,
  },
  {
    month: 'Sep',
    Tokyo: 23.3,
    London: 14.2,
  },
  {
    month: 'Oct',
    Tokyo: 18.3,
    London: 10.3,
  },
  {
    month: 'Nov',
    Tokyo: 13.9,
    London: 6.6,
  },
  {
    month: 'Dec',
    Tokyo: 9.6,
    London: 4.8,
  },
];
```
7. 所有饼图
```
[
  {
    item: '事例一',
    count: 40,
  },
  {
    item: '事例二',
    count: 21,
  },
  {
    item: '事例三',
    count: 17,
  },
  {
    item: '事例四',
    count: 13,
  },
  {
    item: '事例五',
    count: 9,
  },
];
```



