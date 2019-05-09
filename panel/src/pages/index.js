import React, { useState, useEffect, useRef } from 'react';
import { message } from 'antd';
import { merge, cloneDeep } from 'lodash';
import router from 'umi/router';
import { connect } from 'dva';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';
import ChartContainer from '@/components/ChartContainer';
import ControlPanel from '@/components/ControlPanel';
import DataTable from '@/components/DataTable';
import ConfigModal from '@/components/ConfigModal';
import chartData from '@/data/chartInitialCode';
import chartState from '@/data/chartInitialState';
import chartFormatUtils from '@/utils/chartFormatUtils';
import { getSvgCodeFromEle, getMenuInfoFromRoute, todayTime } from '@/utils/util';

import styles from './index.less';

function Home(props) {
    const {
        app: {
            chartRoute: { group, type, query },
        },
    } = props;
    const [chartRoute, setChartRoute] = useState({ group, type });
    const [chartConfig, setChartConfig] = useState(chartState[group][type] || {});
    const [modalVisible, setModalVisible] = useState(false);
    const [historyData, setHistoryData] = useState(JSON.parse(localStorage.getItem('historyData')) || []);

    useEffect(() => {
        setChartRoute({ group, type });
        if (Object.keys(query).length === 0) {
            setChartConfig(chartState[group][type]);
            return;
        }
        // 在有query的情况下
        const dataArr = JSON.parse(localStorage.getItem('historyData'));
        if (!dataArr || dataArr.length <= 0) {
            message.warning('您还没有生成相关数据');
            return;
        }
        dataArr.forEach(item => {
            if (item.id === parseInt(query.id, 10)) {
                setChartConfig(item.chartConfigItem);
            }
        });
    }, [group, type, query]);

    // 点击应用路由跳转
    const goRouter = (groupItem, typeItem, id) => {
        if (id) {
            router.push({
                pathname: `/${groupItem}/${typeItem}`,
                query: {
                    id,
                },
            });
        } else {
            router.push({
                pathname: `/${groupItem}/${typeItem}`,
            });
        }
    };
    const getFullChartConfig = () => {
        const result = merge({}, chartData[group][type], chartFormatUtils[group][type](chartConfig));
        return result;
    };

    const configProps = getFullChartConfig();

    // 生成图表时保存数据到localStorage
    const saveToStorage = () => {
        const { data } = configProps.BaseProps;
        if (!chartConfig.data) {
            chartConfig.data = data;
        }
        if (!localStorage.getItem('id')) {
            localStorage.setItem('id', 0);
        }
        // bizCharts 模版数据(configProps)
        // setPlane  设置面板数据(chartConfig)
        const historyObj = {
            chartConfigItem: chartConfig,
            createTime: todayTime(),
            groupItem: group,
            typeItem: type,
            id: parseInt(localStorage.getItem('id')) + 1,
        };
        if (historyData && historyData.length < 50) {
            historyData.unshift(historyObj);
        } else {
            historyData.pop();
            historyData.unshift(historyObj);
        }
        localStorage.setItem('historyData', JSON.stringify(historyData));
        localStorage.setItem('id', parseInt(localStorage.getItem('id')) + 1);
    };

    // 生成
    const handleGenerate = () => {
        saveToStorage();
        /* 下方代码为生成svg，展示在shetch中 */
        const { title, subTitle } = chartConfig
        const { group, type } = chartRoute
        const { subTitle: layerTitle } = getMenuInfoFromRoute(group, type);
        const targetSvg = getSvgCodeFromEle(document.getElementsByTagName('svg'));
        window.postMessage(
            'JsBridge_InsertSvg',
            JSON.stringify({
                layerTitle,
                svg: targetSvg,
                config: {
                    title,
                    subTitle,
                },
            }),
        );
    };

    const handleClose = () => {
        window.postMessage('JsBridge_CloseWebview');
    };

    const handleControlPanelChange = attribute => {
        // 此处需合并对象，对象包含深层嵌套
        const mergedObj = merge({}, chartConfig, attribute);
        setChartConfig(mergedObj);
    };

    const handleResetClick = () => {
        setChartConfig(chartState[group][type]); // 还原初始状态
    };

    const handleModalCancel = () => {
        setModalVisible(false);
    };

    const handleViewConfigClick = () => {
        setModalVisible(true);
    };
    // 应用
    const handleJsonChange = json => {
        const { groupItem, typeItem, id } = json;
        goRouter(groupItem, typeItem, id);
    };
    // 删除历史
    const clearHistory = () => {
        localStorage.removeItem('historyData');
        setHistoryData([]);
        goRouter(group, type);
    };
    const handleDataTableChange = data => {
        const newChartConfig = cloneDeep(chartConfig);
        if (newChartConfig) {
            newChartConfig.data = data;
        } else {
            return;
        }
        setChartConfig(newChartConfig);
        console.log('newChartConfig===', newChartConfig);
    };

    const dataTableProps = {
        onChange: handleDataTableChange,
        data: configProps.BaseProps.data,
    };
    const controlPanelProps = {
        chartRoute,
        defaultValue: chartConfig,
        onChange: handleControlPanelChange,
    };
    const footerProps = {
        chartConfig,
        historyData,
        onCancelClick: handleClose,
        onGenerateClick: handleGenerate,
        onResetClick: handleResetClick,
        onViewConfigClick: handleViewConfigClick,
        onApply: handleJsonChange,
        clearHistory,
    };
    const modalProps = {
        data: configProps,
        visible: modalVisible,
        onCancel: handleModalCancel,
    };

    return (
        <div className={styles.container}>
            <SideMenu />
            <ChartContainer chartConfig={configProps} />
            <DataTable {...dataTableProps} />
            <ControlPanel {...controlPanelProps} />
            <ConfigModal {...modalProps} />
            <Footer {...footerProps} />
        </div>
    );
}
export default connect(({ app }) => ({ app }))(Home);
