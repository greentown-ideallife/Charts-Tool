import React from 'react';
import { getMenuInfoFromRoute } from '@/utils/util';
import styles from './index.less';

export default props => {
  const { chartRoute } = props;
  const { group, type } = chartRoute;
  const { title, subTitle } = getMenuInfoFromRoute(group, type);

  return (
    <div className={styles.container}>
      <span className={styles.main}>{title}</span>&nbsp;&gt;&nbsp;
      <span>{subTitle}</span>
    </div>
  );
};
