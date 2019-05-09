import React from 'react';
import { Icon, Tooltip } from 'antd';
import router from 'umi/router';
import styles from './index.less';

export default props => {
  const { data } = props;
  const { title, group, chartList } = data;

  const go = type => {
    router.push({
      pathname: `/${group}/${type}`,
    });
  };

  return (
    <div className={styles.container} style={{ height: document.body.clientHeight - 150 }}>
      <h3>{title}</h3>
      {chartList &&
                chartList.map(item => (
                  <div key={item.title} className={styles.chartList}>
                    <Tooltip title={item.title} placement="right">
                      <div
                        className={styles.screenshot}
                        style={{ background: `url(${item.screenshot})` }}
                        onClick={() => go(item.type)}
                      >
                        <div className={styles.footerText}>
                          <Icon type="edit" />
                          <span>选择并调整配置</span>
                        </div>
                      </div>
                    </Tooltip>
                    <p>{item.title}</p>
                  </div>
                ))}
    </div>
  );
};
