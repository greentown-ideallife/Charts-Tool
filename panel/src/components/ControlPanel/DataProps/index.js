import React from 'react';
import { Form, Select, Row, Col, InputNumber } from 'antd';
import ColorPicker from '../ColorPicker';
import styles from './index.less';

const { Option } = Select;

export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleColorChange = (vl, index) => {
        const { handleAttrChange, defaultValue } = this.props;
        const { colorKey, colorType, value } = defaultValue;
        // 色值为数组
        if (colorType && colorType === 'Array') {
            const currentColorArray = value.map((item, i) => (i === index ? vl : item.color));
            handleAttrChange([colorKey, currentColorArray], 'color');
        } else {
            // 色值为固定值
            handleAttrChange(vl, 'color');
        }
    };

    render() {
        const { form, defaultValue, data, handleAttrChange } = this.props;
        const { getFieldDecorator } = form;
        const { type, value } = defaultValue;

        const getBody = () => {
            switch (type) {
                case 'default':
                    return value.map((item, index) => (
                        <React.Fragment key={item.key}>
                            <div className={styles.line} />
                            <span className={styles.panelLabel}>{item.key}</span>
                            <Form.Item label="视觉样式" colon={false}>
                                {getFieldDecorator('theme', {
                                    initialValue: 'default',
                                })(
                                    <Select>
                                        <Option value="default">默认</Option>
                                    </Select>,
                                )}
                            </Form.Item>
                            <ColorPicker defaultValue={item.color} onChange={vl => this.handleColorChange(vl, index)} />
                        </React.Fragment>
                    ));
                case 'line':
                    return value.map((item, index) => (
                        <React.Fragment key={item.key}>
                            <span className={styles.panelLabel}>{item.key}</span>
                            <Form.Item label="视觉样式" colon={false}>
                                {getFieldDecorator('theme', {
                                    initialValue: 'default',
                                })(
                                    <Select size="small">
                                        <Option value="default">默认</Option>
                                    </Select>,
                                )}
                            </Form.Item>
                            <ColorPicker defaultValue={item.color} onChange={vl => this.handleColorChange(vl, index)} />
                            {/* <Row gutter={8}>
                <Col span={6}>
                  <ColorPicker
                    defaultValue={item.color}
                    onChange={vl => this.handleColorChange(vl, index)}
                  />
                </Col>
                <Col span={10}>
                  {getFieldDecorator('lineType', {
                    initialValue: 'sx',
                  })(
                    <Select size="small">
                      <Option value="sx">实线</Option>
                      <Option value="dash">虚线</Option>
                    </Select>,
                  )}
                </Col>
                <Col span={8}>
                  {getFieldDecorator('lineWidth', {
                    initialValue: 2,
                  })(<InputNumber />)}
                </Col>
              </Row> */}
                        </React.Fragment>
                    ));
                default:
                    return null;
            }
        };

        return <div className={styles.container}>{getBody()}</div>;
    }
}
