export default config => {
  config.optimization.splitChunks({
    chunks: 'async',
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: '~',
    name: true,
    cacheGroups: {
      vendors: {
        name: 'vendors',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/,
        priority: -10,
      },
      antdesigns: {
        name: 'antdesigns',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
        priority: -11,
      },
    },
  });
};
