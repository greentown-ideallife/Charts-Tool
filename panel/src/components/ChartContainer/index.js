import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend, Label, Guide } from 'bizcharts';
import uuid from 'uuid/v1';
import styles from './index.less';

const { Html } = Guide;

export default props => {
  const { chartConfig } = props;
  const {
    title,
    subTitle,
    ChartProps,
    XAxisProps,
    YAxisProps,
    TooltipProps,
    GeomProps,
    CoordProps,
    LegendProps,
    LabelProps, // 暂时只支持单个Geom中的Label
    GuideProps,
    HtmlProps,
  } = chartConfig;

  return (
    <div className={styles.container}>
      <div className={styles.body} style={{ width: ChartProps.width }}>
        {title || subTitle ? (
          <div className={styles.extra}>
            {title ? <span className={styles.title}>{title}</span> : null}
            {subTitle ? <span className={styles.subTitle}>{subTitle}</span> : null}
          </div>
        ) : null}
        {/* key为uuid强制每次属性更新时重新渲染图表 */}
        <Chart key={uuid()} {...ChartProps}>
          {XAxisProps ? <Axis {...XAxisProps} /> : null}
          {YAxisProps ? <Axis {...YAxisProps} /> : null}
          {TooltipProps ? <Tooltip {...TooltipProps} /> : null}
          {Array.isArray(GeomProps) ? (
            GeomProps.map(item => <Geom key={item.type} {...item} />)
          ) : (
            <Geom {...GeomProps}>{LabelProps ? <Label {...LabelProps} /> : null}</Geom>
          )}
          {CoordProps ? <Coord {...CoordProps} /> : null}
          {LegendProps ? <Legend {...LegendProps} /> : null}
          {GuideProps ? <Guide {...GuideProps}>{HtmlProps ? <Html {...HtmlProps} /> : null}</Guide> : null}
        </Chart>
      </div>
    </div>
  );
};
