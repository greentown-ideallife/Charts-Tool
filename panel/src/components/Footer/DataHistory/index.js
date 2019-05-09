import React from 'react';
import dayjs from 'dayjs';
import { Timeline, Button, Icon } from 'antd';
import { groupBy, orderBy } from 'lodash';
import EmptyData from '../EmptyData';
import DataItem from '../DataItem';
import { getDateDiff } from '@/utils/util';
import styles from './index.less';

const dateFormat = 'YYYY-MM-DD';

const { Item } = Timeline;
const isToday = date => dayjs().format(dateFormat) === dayjs(date).format(dateFormat);

export default props => {
    const { data, onApply, clearHistory } = props;
    const groupData = groupBy(data, i => dayjs(i.createTime).format(dateFormat));
    const keys = Object.keys(groupData).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    const getItemData = () =>
        keys.map(key => {
            const keyData = orderBy(groupData[key], 'createTime', 'desc');
            return (
                <Item key={key}>
                    <div className={styles.item}>
                        <Button type="primary" size="small">
                            {isToday(key) ? '今天' : key}
                        </Button>
                    </div>
                    {keyData &&
                        keyData.map(item => (
                            <DataItem
                                key={item.createTime}
                                title={(item.chartConfigItem && item.chartConfigItem.title) || ''}
                                subTitle={(item.chartConfigItem && item.chartConfigItem.subTitle) || ''}
                                onApply={onApply}
                                json={item}
                                createTime={getDateDiff(new Date(item.createTime).getTime())}
                            />
                        ))}
                </Item>
            );
        });

    return data && data.length ? (
        <div className={styles.container}>
            <div className={styles.deleteView}>
                <Button type="danger" size="small" onClick={() => clearHistory()} className={styles.deleteView_icon}>
                    删除历史记录
                    <Icon type="delete" />
                </Button>
            </div>
            <Timeline>{getItemData()}</Timeline>
        </div>
    ) : (
        <EmptyData />
    );
};
