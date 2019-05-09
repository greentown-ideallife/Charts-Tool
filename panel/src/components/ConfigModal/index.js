import React from 'react';
import { Modal, Button } from 'antd';
import { cloneDeep } from 'lodash';
import ReactFromJson from '../ReactFromJson';
import Highlighter from '../Highlighter';
import CopyButton from '../CopyButton';
import styles from './index.less';

// https://github.com/mac-s-g/react-json-view
export default props => {
  const { data } = props;
  const cloneData = cloneDeep(data);
  const chartData = cloneData.ChartProps.data;
  if (!Array.isArray(chartData)) {
    cloneData.ChartProps.data = cloneData.BaseProps.data;
    if (chartData.transforms) cloneData.ExtendProps = { transforms: chartData.transforms };
  }
  delete cloneData.BaseProps;

  const jsonData = ReactFromJson(cloneData);
  const { onCancel } = props;

  return (
    <Modal
      title="查看图表代码"
      {...props}
      style={{ top: 20 }}
      width={800}
      footer={
        <div>
          <Button onClick={onCancel} style={{ marginRight: 10 }}>
                        取消
          </Button>
          <CopyButton valueToCopy={jsonData} />
        </div>
      }
    >
      <div className={styles.container}>
        <Highlighter src={jsonData} />
      </div>
    </Modal>
  );
};
