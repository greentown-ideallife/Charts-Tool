import React from 'react';
import { Collapse, Form, Input, Select, Switch, InputNumber } from 'antd';
import DataProps from '../DataProps';
import constant from '@/utils/constant';
import styles from './index.less';

const { Panel } = Collapse;
const { Option } = Select;
const { POSITION, LAYOUT } = constant;

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

class ExtendProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultPanelActiveKey: ['1', '2', '3'],
        };
    }

    handleAttrChange = (value, field, parentField) => {
        const { onChange } = this.props;
        if (!parentField) {
            onChange({ [field]: value });
        } else {
            onChange({ [parentField]: { [field]: value } });
        }
    };

    render() {
        const { form, defaultValue } = this.props;
        const { defaultPanelActiveKey } = this.state;
        const { getFieldDecorator } = form;
        console.log('defaultValue === ', defaultValue);
        const dataProps = {
            form,
            defaultValue: defaultValue.DataStyle,
            data: defaultValue.data || defaultValue.DataStyle.data,
            handleAttrChange: this.handleAttrChange,
        };

        return (
            <div className={styles.container}>
                <Form {...formItemLayout}>
                    <Collapse bordered={false} defaultActiveKey={defaultPanelActiveKey}>
                        <Panel header="数据样式" key="1">
                            <DataProps {...dataProps} />
                        </Panel>
                        <Panel header="X 轴" key="2">
                            <Form.Item label="标题" colon={false}>
                                {getFieldDecorator('XAxis.title', {
                                    initialValue: defaultValue.XAxis.title,
                                })(<Input onChange={e => this.handleAttrChange(e.target.value, 'title', 'XAxis')} />)}
                            </Form.Item>
                            <Form.Item label="显示轴线" colon={false}>
                                {getFieldDecorator('XAxis.showLine', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.XAxis.showLine,
                                })(
                                    <Switch
                                        onChange={checked => this.handleAttrChange(checked, 'showLine', 'XAxis')}
                                        style={{ float: 'right' }}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="刻度个数" colon={false}>
                                {getFieldDecorator('XAxis.tickCount', {
                                    initialValue: defaultValue.XAxis.tickCount,
                                })(
                                    <InputNumber
                                        style={{ width: '100%' }}
                                        onChange={value => this.handleAttrChange(value, 'tickCount', 'XAxis')}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="自动旋转" colon={false}>
                                {getFieldDecorator('XAxis.autoRotate', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.XAxis.autoRotate,
                                })(
                                    <Switch
                                        style={{ float: 'right' }}
                                        onChange={checked => this.handleAttrChange(checked, 'autoRotate', 'XAxis')}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="刻度线" colon={false}>
                                {getFieldDecorator('XAxis.showTickLine', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.XAxis.showTickLine,
                                })(
                                    <Switch
                                        style={{ float: 'right' }}
                                        onChange={checked => this.handleAttrChange(checked, 'showTickLine', 'XAxis')}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="栅格线" colon={false}>
                                {getFieldDecorator('XAxis.showGrid', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.XAxis.showGrid,
                                })(
                                    <Switch
                                        style={{ float: 'right' }}
                                        onChange={checked => this.handleAttrChange(checked, 'showGrid', 'XAxis')}
                                    />,
                                )}
                            </Form.Item>
                        </Panel>
                        <Panel header="Y 轴" key="3">
                            <Form.Item label="标题" colon={false}>
                                {getFieldDecorator('YAxis.title', {
                                    initialValue: defaultValue.YAxis.title,
                                })(<Input onChange={e => this.handleAttrChange(e.target.value, 'title', 'YAxis')} />)}
                            </Form.Item>
                            <Form.Item label="显示轴线" colon={false}>
                                {getFieldDecorator('YAxis.showLine', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.YAxis.showLine,
                                })(
                                    <Switch
                                        onChange={checked => this.handleAttrChange(checked, 'showLine', 'YAxis')}
                                        style={{ float: 'right' }}
                                    />,
                                )}
                            </Form.Item>
                            {/* 暂时取消此功能，较容易引起bizcharts崩溃 */}
                            {/* <Form.Item label="刻度个数" colon={false}>
                {getFieldDecorator('yTickCount', {})(
                  <InputNumber
                    style={{ width: '100%' }}
                    onChange={value => this.handleAttrChange(value, 'tickCount', 'YAxis')}
                  />,
                )}
              </Form.Item> */}
                            <Form.Item label="自动旋转" colon={false}>
                                {getFieldDecorator('YAxis.autoRotate', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.YAxis.autoRotate,
                                })(
                                    <Switch
                                        style={{ float: 'right' }}
                                        onChange={checked => this.handleAttrChange(checked, 'autoRotate', 'YAxis')}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="刻度线" colon={false}>
                                {getFieldDecorator('YAxis.showTickLine', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.YAxis.showTickLine,
                                })(
                                    <Switch
                                        style={{ float: 'right' }}
                                        onChange={checked => this.handleAttrChange(checked, 'showTickLine', 'YAxis')}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item label="栅格线" colon={false}>
                                {getFieldDecorator('YAxis.showGrid', {
                                    valuePropName: 'checked',
                                    initialValue: defaultValue.YAxis.showGrid,
                                })(
                                    <Switch
                                        style={{ float: 'right' }}
                                        onChange={checked => this.handleAttrChange(checked, 'showGrid', 'YAxis')}
                                    />,
                                )}
                            </Form.Item>
                        </Panel>
                        <Panel header="图 例" key="4">
                            <Form.Item label="位置" colon={false}>
                                {getFieldDecorator('Legend.position', {
                                    initialValue: defaultValue.Legend && defaultValue.Legend.position,
                                })(
                                    <Select
                                        disabled={!defaultValue.Legend}
                                        onChange={checked => this.handleAttrChange(checked, 'position', 'Legend')}
                                    >
                                        <Option value="">自动</Option>
                                        {POSITION.map(item => (
                                            <Option key={item.value} value={item.value}>
                                                {item.label}
                                            </Option>
                                        ))}
                                    </Select>,
                                )}
                            </Form.Item>
                            <Form.Item label="排列" colon={false}>
                                {getFieldDecorator('Legend.layout', {
                                    initialValue: defaultValue.Legend && defaultValue.Legend.layout,
                                })(
                                    <Select
                                        disabled={!defaultValue.Legend}
                                        onChange={checked => this.handleAttrChange(checked, 'layout', 'Legend')}
                                    >
                                        <Option value="">自动</Option>
                                        {LAYOUT.map(item => (
                                            <Option key={item.value} value={item.value}>
                                                {item.label}
                                            </Option>
                                        ))}
                                    </Select>,
                                )}
                            </Form.Item>
                        </Panel>
                    </Collapse>
                </Form>
            </div>
        );
    }
}

export default Form.create()(ExtendProps);
