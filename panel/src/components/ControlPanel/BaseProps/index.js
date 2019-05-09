import React from 'react';
import { Form, InputNumber, Input } from 'antd';
import styles from './index.less';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
  labelAlign: 'left',
};

class BaseProps extends React.Component {
    handleAttrChange = (value, field) => {
      const { onChange } = this.props;
      onChange({
        [field]: value,
      });
    };

    render() {
      const { form, defaultValue } = this.props;
      const { getFieldDecorator } = form;

      return (
        <div className={styles.container}>
          <Form {...formItemLayout}>
            <div className={styles.sizeContent}>
              <span className={styles.title}>尺寸</span>
              <div>
                {getFieldDecorator('width', {
                  initialValue: 600,
                })(<InputNumber onChange={value => this.handleAttrChange(value, 'width')} />)}
              </div>
              <span className={styles.split}>-</span>
              <div>
                {getFieldDecorator('height', {
                  initialValue: 340,
                })(<InputNumber onChange={value => this.handleAttrChange(value, 'height')} />)}
              </div>
            </div>
            <Form.Item label="标题" colon={false}>
              {getFieldDecorator('title', {
                initialValue: defaultValue.title,
              })(<Input onChange={e => this.handleAttrChange(e.target.value, 'title')} />)}
            </Form.Item>
            <Form.Item label="副标题" colon={false}>
              {getFieldDecorator('subTitle', {
                initialValue: defaultValue.subTitle,
              })(<Input onChange={e => this.handleAttrChange(e.target.value, 'subTitle')} />)}
            </Form.Item>
          </Form>
        </div>
      );
    }
}

export default Form.create()(BaseProps);
