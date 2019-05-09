import BarBasic from './bar/bar-basic';
import BarBasicColumn from './bar/bar-basic-column';
import BarGroupedColumn from './bar/bar-grouped-column';
import BarGrouped from './bar/bar-grouped';
import BarStackedColumn from './bar/bar-stacked-column';
import BarStackedPercentageColumn from './bar/bar-stacked-percentage-column';
import BarStacked from './bar/bar-stacked';

import LineBasic from './line/line-basic';
import LineCurved from './line/line-curved';
import LineSeries from './line/line-series';

import PieDonut from './pie/pie-donut';
import PieInnerlabel from './pie/pie-innerlabel';
import PieLabelline from './pie/pie-labelline';

export default {
  bar: {
    'bar-basic': BarBasic,
    'bar-basic-column': BarBasicColumn,
    'bar-grouped-column': BarGroupedColumn,
    'bar-grouped': BarGrouped,
    'bar-stacked-column': BarStackedColumn,
    'bar-stacked-percentage-column': BarStackedPercentageColumn,
    'bar-stacked': BarStacked,
  },
  line: {
    'line-basic': LineBasic,
    'line-curved': LineCurved,
    'line-series': LineSeries,
  },
  pie: {
    'pie-donut': PieDonut,
    'pie-innerlabel': PieInnerlabel,
    'pie-labelline': PieLabelline,
  },
};
