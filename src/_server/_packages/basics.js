// @flow

import mount from 'koa-mount'
import { STATIC_PATH } from '@deuterium/env'
import helmet from 'koa-helmet'
import serve from 'koa-static'

export const koaHead = {
    func: (app: any) => {
        app.use(helmet())
    },
}

export const koaStatic = {
    func: (app: any) => {
        app.use(mount(STATIC_PATH, serve('public')))
        app.use(mount(STATIC_PATH, serve('dist')))
    },
}
