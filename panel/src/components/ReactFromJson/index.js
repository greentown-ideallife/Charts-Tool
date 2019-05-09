import { getPropsFromJson } from '@/utils/util';

export default chartConfig => {
  let transform = null; // 数据转换

  const {
    ChartProps,
    XAxisProps,
    YAxisProps,
    TooltipProps,
    GeomProps,
    CoordProps,
    LegendProps,
    LabelProps,
    GuideProps,
    HtmlProps,
    ExtendProps: { transforms } = {},
  } = chartConfig;

  if (transforms && transforms.length) {
    [transform] = transforms;
  }
  const { data } = ChartProps;
  delete ChartProps.data;

  return `
    import React from 'react';
    import { Chart, Geom, Axis, Tooltip, Coord, Legend, Label, Guide } from 'bizcharts';
    ${transform ? `import DataSet from '@antv/data-set';` : ''}

    const { Html } = Guide;

    export default () => {

      const data = ${JSON.stringify(data)}
      ${transform
      ? `const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(data).transform(${JSON.stringify(transform)});
    ` : ''}
      return (
        <Chart ${getPropsFromJson(ChartProps)} data=${transform ? `{dv}` : '{data}'}>
          ${XAxisProps ? `<Axis ${getPropsFromJson(XAxisProps)} />` : ''}
          ${YAxisProps ? `<Axis ${getPropsFromJson(YAxisProps)} />` : ''}
          ${TooltipProps ? `<Tooltip ${getPropsFromJson(TooltipProps)} />` : ''}
          ${Array.isArray(GeomProps) ? GeomProps.map(item => `<Geom ${getPropsFromJson(item)} />`) : `<Geom ${getPropsFromJson(GeomProps)}>${LabelProps ? `<Label ${getPropsFromJson(LabelProps)} />` : ''}</Geom>`}
          ${CoordProps ? `<Coord ${getPropsFromJson(CoordProps)} />` : ''}
          ${LegendProps ? `<Legend ${getPropsFromJson(LegendProps)} />` : ''}
          ${GuideProps ? `<Guide ${getPropsFromJson(GuideProps)}>${HtmlProps ? `<Html ${getPropsFromJson(HtmlProps)} />` : ''}</Guide>` : ''}
        </Chart>
      );
    };
  `;
};
