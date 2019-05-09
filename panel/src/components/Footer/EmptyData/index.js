import React from 'react';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <i className="iconfont icon-box-empty" />
    <h2>暂无历史记录</h2>
    <span>图表生成后会保存配置和数据以便复原</span>
  </div>
);
