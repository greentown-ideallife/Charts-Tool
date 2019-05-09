import React from 'react';
import { cloneDeep, isEqual } from 'lodash';
import { HotTable } from '@handsontable/react';
import 'handsontable/languages/zh-CN';

import { convertTableDataToSource, convertSourceToTableData } from '@/utils/util';

import 'handsontable/dist/handsontable.full.css';
import styles from './index.less';

export default class HotApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hotSettings: {
                contextMenu: [
                    // 'row_above', 新增行会对图表新增不可变因素，暂时不支持
                    // 'row_below',
                    'col_left',
                    'col_right',
                    '---------',
                    // 'remove_row',
                    'remove_col',
                ],
            },
            licenseKey: 'non-commercial-and-evaluation',
            language: 'zh-CN',
            data: convertSourceToTableData(props.data),
            increaseIndex: {
                col: 0,
                row: 0,
            },
        };
    }

    componentWillReceiveProps(nextProps) {
        const { data } = this.props;
        if (!isEqual(nextProps.data, data)) {
            this.setState({
                data: convertSourceToTableData(nextProps.data),
            });
        }
    }

    handleChange = data => {
        const { onChange } = this.props;
        onChange(convertTableDataToSource(data));
    };

    beforeChange = changes => {
        const { data } = this.state;
        const [row, prop, , newValue] = changes[0];
        const cloneData = cloneDeep(data);
        cloneData[row][prop] = newValue;
        this.setState({
            data: cloneData,
        });
        this.handleChange(cloneData);
    };

    beforeCreateOrRemoveColOrRow = (field, type = 'add', index, amount) => {
        const {
            increaseIndex,
            increaseIndex: { col, row },
            data,
        } = this.state;
        const newName = field === 'col' ? `新列${col}` : `新行${row}`;

        const genRandomNum = () => parseInt(50 * Math.random(), 0);

        // 添加列
        const updateCol = () => {
            const resultData = cloneDeep(data).map((item, i) => {
                item.splice(index, 1, i === 0 ? newName : genRandomNum());
                return item;
            });
            this.setState({
                increaseIndex: {
                    ...increaseIndex,
                    col: col + 1,
                },
                data: resultData,
            });
            return resultData;
        };
        // 添加行
        const updateRow = () => {
            const cloneData = cloneDeep(data);
            const newRow = [newName];
            for (let i = 1; i < cloneData[0].length; i += 1) {
                newRow.push(genRandomNum());
            }

            cloneData.splice(index, 1, newRow);
            this.setState({
                increaseIndex: {
                    ...increaseIndex,
                    row: row + 1,
                },
                data: cloneData,
            });

            return cloneData;
        };
        // 移除列
        const removeCol = () => {
            const resultData = cloneDeep(data).map(item => {
                item.splice(index, amount);
                return item;
            });
            this.setState({
                data: resultData,
            });

            return resultData;
        };
        // 移除行
        const removeRow = () => {
            const cloneData = cloneDeep(data);
            cloneData.splice(index, amount);
            this.setState({
                data: cloneData,
            });

            return cloneData;
        };

        // 使用setTimeout,详细参考 https://github.com/handsontable/react-handsontable/issues/18
        setTimeout(() => {
            let resultData;
            if (type === 'add') {
                if (field === 'col') {
                    resultData = updateCol();
                } else {
                    resultData = updateRow();
                }
            } else if (field === 'col') {
                resultData = removeCol();
            } else {
                resultData = removeRow();
            }
            this.handleChange(resultData);
        }, 0);
    };

    render() {
        const { hotSettings, language, licenseKey, data } = this.state;
        return (
            <div className={styles.container}>
                <span>
                    <b>图表数据</b>
                </span>
                <HotTable
                    settings={hotSettings}
                    style={{ width: '100%' }}
                    data={data}
                    height={100}
                    stretchH="all"
                    language={language}
                    licenseKey={licenseKey}
                    beforeChange={this.beforeChange}
                    beforeCreateCol={index => this.beforeCreateOrRemoveColOrRow('col', 'add', index)}
                    beforeCreateRow={index => this.beforeCreateOrRemoveColOrRow('row', 'add', index)}
                    beforeRemoveCol={(index, amount) =>
                        this.beforeCreateOrRemoveColOrRow('col', 'remove', index, amount)
                    }
                    beforeRemoveRow={(index, amount) =>
                        this.beforeCreateOrRemoveColOrRow('row', 'remove', index, amount)
                    }
                />
            </div>
        );
    }
}
