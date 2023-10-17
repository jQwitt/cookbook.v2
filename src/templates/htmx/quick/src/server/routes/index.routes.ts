import Router from 'koa-router';

import * as db from '../db';

export enum IndexRoutes {
    INDEX = 'index',
}

export async function withIndex(router: Router) {
    router.post(IndexRoutes.INDEX, async (ctx) => {
        console.error(ctx.request.body);

        db.get();

        ctx.body = '';
    });
}
