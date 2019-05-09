import { isNumber, isString, isArray, isObject, find } from 'lodash';
import menuData from '@/data/menuData';

const utils = {};

export function getSvgCodeFromEle(ele) {
    if (!(ele && ele.length)) {
        return '';
    }
    return ele[0].outerHTML;
}

export function formatChartConfig(config) {
    const { width, height, color, data } = config;
    const defaultTickLine = {
        lineWidth: 1, // 刻度线宽
        stroke: '#ccc', // 刻度线的颜色
        length: 5, // 刻度线的长度, **原来的属性为 line**,可以通过将值设置为负数来改变其在轴上的方向
    };
    const defaultLine = {
        stroke: '#dddddd',
        fill: '#ffffff',
        lineWidth: 1,
    };
    const defaultGrid = {
        type: 'line', // 网格的类型
        lineStyle: {
            stroke: '#EFEFEF', // 网格线的颜色
            lineWidth: 0.5, // 网格线的宽度复制代码
            lineDash: [3, 3], // 网格线的虚线配置，第一个参数描述虚线的实部占多少像素，第二个参数描述虚线的虚部占多少像素
        }, // 网格线的样式配置，原有属性为 line
    };

    const {
        title: XTitle,
        tickCount: XTickCount,
        autoRotate: XAutoRotate = true,
        showTickLine: XShowTickLine = true,
        showLine: XShowLine = true,
        showGrid: XShowGrid = false,
    } = config.XAxis || {};
    const {
        title: YTitle,
        tickCount: YTickCount,
        autoRotate: YAutoRotate = true,
        showTickLine: YShowTickLine = false,
        showLine: YShowLine = false,
        showGrid: YShowGrid = true,
    } = config.YAxis || {};

    const XAxisConfig = {
        name: 'year',
        title: XTitle || null,
        label: {
            autoRotate: XAutoRotate,
        },
    };
    if (!XShowTickLine) {
        XAxisConfig.tickLine = null;
    } else {
        XAxisConfig.tickLine = defaultTickLine;
    }
    if (!XShowLine) {
        XAxisConfig.line = null;
    } else {
        XAxisConfig.line = defaultLine;
    }
    if (!XShowGrid) {
        XAxisConfig.grid = null;
    } else {
        XAxisConfig.grid = defaultGrid;
    }

    const YAxisConfig = {
        name: 'sales',
        title: YTitle || null,
        label: {
            autoRotate: YAutoRotate,
        },
    };
    if (!YShowTickLine) {
        YAxisConfig.tickLine = null;
    } else {
        YAxisConfig.tickLine = defaultTickLine;
    }
    if (!YShowLine) {
        YAxisConfig.line = null;
    } else {
        YAxisConfig.line = defaultLine;
    }
    if (!YShowGrid) {
        YAxisConfig.grid = null;
    } else {
        YAxisConfig.grid = defaultGrid;
    }

    return {
        ChartProps: {
            width,
            height,
            data,
            scale: {
                sales: {
                    tickInterval: 20,
                    alias: YTitle, // x轴标题
                    tickCount: YTickCount,
                },
                year: {
                    alias: XTitle, // x轴标题
                    tickCount: XTickCount,
                },
            },
        },
        XAxisProps: XAxisConfig,
        YAxisProps: YAxisConfig,
        GeomProps: {
            color,
        },
    };
}

export function getDateDiff(dateMillSeconds) {
    if (!dateMillSeconds) {
        return null;
    }
    const publishTime = parseInt(dateMillSeconds, 0);
    let dSeconds = null;
    let dMinutes = null;
    let dHours = null;
    let dDays = null;
    const timeNow = parseInt(new Date().getTime(), 0);
    const nowYear = parseInt(new Date().getFullYear(), 0);
    let d = null;

    const date = new Date(publishTime);
    const Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    let H = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    // 小于10的在前面补0
    if (M < 10) {
        M = `0${M}`;
    }
    if (D < 10) {
        D = `0${D}`;
    }
    if (H < 10) {
        H = `0${H}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }

    d = (timeNow - publishTime) / 1000;
    dDays = parseInt(d / 86400, 0);
    dHours = parseInt(d / 3600, 0);
    dMinutes = parseInt(d / 60, 0);
    dSeconds = parseInt(d, 0);

    if (dDays > 0 && dDays < 3) {
        return `${dDays}天前`;
    }
    if (dDays <= 0 && dHours > 0) {
        return `${dHours}小时前`;
    }
    if (dHours <= 0 && dMinutes > 0) {
        return `${dMinutes}分钟前`;
    }
    if (dSeconds < 60) {
        if (dSeconds <= 0) {
            return '刚刚';
        }
        return `${dSeconds}秒前`;
    }
    if (dDays >= 3 && nowYear === Y) {
        return `${M}-${D} ${H}:${m}`;
    }
    if (nowYear !== Y) {
        return `${Y}-${M}-${D} ${H}:${m}`;
    }
    return null;
}

export function convertTableDataToSource(sourceData) {
    const resultArray = [];
    if (!(sourceData && sourceData.length)) {
        return resultArray;
    }
    const columnArray = sourceData[0];
    const dataArray = sourceData.slice(1);

    columnArray.slice(1).forEach((column, index) => {
        const object = {};
        object[columnArray[0]] = column;
        dataArray.forEach(item => {
            if (item && item.length) {
                object[item[0]] = item[index + 1] ? parseInt(item[index + 1], 0) : 0;
            }
        });

        resultArray.push(object);
    });

    return resultArray;
}

export function convertSourceToTableData(source) {
    const dataArray = [];
    if (!(source && source.length)) {
        return dataArray;
    }
    const element = source[0];
    const keys = Object.keys(element);

    keys.forEach(key => {
        const data = [key];
        source.forEach(item => {
            data.push(item[key]);
        });
        dataArray.push(data);
    });

    return dataArray;
}

export function translateJsonToCode(json) {
    if (!json) return null;
    const chartJson = {
        type: 'Chart',
        props: json.ChartProps,
    };
    // for (const key in json) {

    // }
    return chartJson;
}

function HandleJsonValue(value) {
    if (isNumber(value)) {
        return value;
    }
    if (isString(value)) {
        return `"${value}"`;
    }
    if (isArray(value) || isObject(value)) {
        return JSON.stringify(value);
    }
    return value;
}

export function getPropsFromJson(json) {
    let str = '';
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const value = HandleJsonValue(json[key]);
        str += `${i === 0 ? '' : ' '}${key}={${value}}`;
    }

    return str;
}

export function getMenuInfoFromRoute(group, type) {
    let title;
    let subTitle;
    const groupData = find(menuData, o => o.group === group);
    if (groupData && groupData.chartList && groupData.chartList.length) {
        // eslint-disable-next-line prefer-destructuring
        title = groupData.title;
        const childData = find(groupData.chartList, o => o.type === type);
        if (childData) {
            subTitle = childData.title;
        }
    }

    return { title, subTitle };
}

// 获取当前日期 时间
export function todayTime() {
    const date = new Date();
    const curYear = date.getFullYear();
    let curMonth = date.getMonth() + 1;
    let curDate = date.getDate();
    if (curMonth < 10) {
        curMonth = `0${curMonth.toString()}`;
    }
    if (curDate < 10) {
        curDate = `0${curDate.toString()}`;
    }
    const curHours = date.getHours();
    const curMinutes = date.getMinutes();
    const curSeconds = date.getSeconds();
    const curtime = `${curYear}-${curMonth}-${curDate} ${curHours}:${curMinutes}:${curSeconds} `;
    return curtime;
}

export default utils;
