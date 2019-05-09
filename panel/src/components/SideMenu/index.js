import React from 'react';
import { Popover } from 'antd';
import classnames from 'classnames';
import menuData from '@/data/menuData';
import MenuChartList from './MenuChartList';

import styles from './index.less';

export default () => (
  <div className={styles.container}>
    {menuData &&
            menuData.map(item => (
              <Popover key={item.title} content={<MenuChartList data={item} />} placement="rightTop">
                <div className={styles.item}>
                  <i className={classnames('iconfont', item.icon)} />
                </div>
              </Popover>
            ))}
  </div>
);
