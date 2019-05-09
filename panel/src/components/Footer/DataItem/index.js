import React from 'react';
import styles from './index.less';

export default props => {
    const { title, subTitle, createTime, onApply, json } = props;

    return (
        <div className={styles.item}>
            <span>{title}</span>
            <span>{subTitle}</span>
            <span className={styles.time}>{createTime}</span>
            <a onClick={() => onApply(json)} className={styles.apply}>
                应用
            </a>
        </div>
    );
};
