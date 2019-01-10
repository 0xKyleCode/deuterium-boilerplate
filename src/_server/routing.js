// @flow

import renderApp from './render-app'

const routing = (router: any) => {
    router.all('*', async ctx => {
        const html = renderApp(ctx.req.url)
        ctx.body = html
    })
}

export default routing
