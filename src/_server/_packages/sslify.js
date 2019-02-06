// @flow

import sslify from 'koa-sslify'

const koaSslify = {
    func: (app: any) => {
        app.use(sslify())
    },
}

export default koaSslify
