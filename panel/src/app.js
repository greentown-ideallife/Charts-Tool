import { G2 } from 'bizcharts';

G2.Global.renderer = 'svg'; // global svg render

export const dva = {
    config: {
        onError(err) {
            err.preventDefault();
            console.error(err.message);
        },
    },
};
