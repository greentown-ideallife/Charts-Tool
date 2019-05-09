import React from 'react';
import { Button, Popover } from 'antd';
import classnames from 'classnames';
import DataHistory from './DataHistory';
import styles from './index.less';

export default props => {
    const {
        onCancelClick,
        onGenerateClick,
        onResetClick,
        onViewConfigClick,
        historyData,
        onApply,
        clearHistory,
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.action}>
                <div className={styles.left}>
                    <Popover
                        content={<DataHistory data={historyData} onApply={onApply} clearHistory={clearHistory} />}
                        arrowPointAtCenter
                        placement="topLeft"
                    >
                        <i title="查看历史" className={classnames('iconfont', 'icon-history', styles.history)} />
                    </Popover>
                    <Button onClick={onViewConfigClick}>查看代码</Button>
                </div>
                <div className={styles.right}>
                    <Button onClick={onCancelClick}>取消</Button>
                    <Button onClick={onResetClick}>重置</Button>
                    <Button type="primary" onClick={onGenerateClick}>
                        生成
                    </Button>
                </div>
            </div>
        </div>
    );
};
