const childRoutes = [
  {
    path: '/',
    redirect: '/bar/bar-basic-column',
  },
  {
    path: '/:group?/:type?',
    component: './index'
  },
  {
    path: '/exception',
    routes: [
      {
        path: '/exception/403',
        component: './Exception/403',
      },
      {
        path: '/exception/404',
        component: './Exception/404',
      },
      {
        path: '/exception/500',
        component: './Exception/500',
      },
    ],
  },
  {
    component: '404',
  },
];

const routes = [
  // app
  {
    path: '/',
    component: '../layouts',
    routes: childRoutes,
  },
];

export default routes;
