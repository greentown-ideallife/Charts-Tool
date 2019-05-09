import React from 'react';
import Crumb from './Crumb';
import BaseProps from './BaseProps';
import ExtendProps from './ExtendProps';
import styles from './index.less';

export default props => (
  <div className={styles.container}>
    <Crumb {...props} />
    <BaseProps {...props} />
    <ExtendProps {...props} />
  </div>
);
