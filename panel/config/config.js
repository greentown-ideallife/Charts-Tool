import pageRoutes from './router.config';
import webpackplugin from './plugin.config';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        title: 'panel',
        dll: false,
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
        routes: {
          exclude: [],
        },
        hardSource: false,
      },
    ],
  ],
  theme: {
    'font-size-base': '12px',
  },
  // 路由配置
  routes: pageRoutes,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  history: process.env.NODE_ENV === 'development' ? 'browser' : 'hash',
  base: process.env.NODE_ENV === 'development' ? '/' : '/sketch-bizcharts',
  chainWebpack: webpackplugin,
  // 导出静态文件会存在当访问本体文件存在无法跳转问题，采用网站发布方式访问
  // exportStatic: {
  //   htmlSuffix: true,
  //   dynamicRoot: true, // 静态自由部署
  // },
};
