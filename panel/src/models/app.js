export default {
    namespace: 'app',

    state: {
        chartRoute: {
            group: 'bar',
            type: 'bar-basic-column',
            query: {},
        },
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                const { query } = history.location;
                dispatch({
                    type: 'changeChartRoute',
                    payload: {
                        pathname,
                        query,
                    },
                });
            });
        },
    },

    effects: {},

    reducers: {
        changeChartRoute(state, { payload }) {
            const { pathname, query } = payload;
            const arrData = pathname.split('?');
            const arr = arrData[0].substr(1).split('/');
            const [group, type] = arr;
            return {
                ...state,
                chartRoute: {
                    group,
                    type,
                    query,
                },
            };
        },
    },
};
