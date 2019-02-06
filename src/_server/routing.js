// @flow

import renderApp from './render-app'
import routes from './_routing'
import type { Route } from './_routing/routeType'

const routing = (router: any) => {
    Object.keys(routes).forEach(key => {
        const route: Route = routes[key]
        if (route.type === 'GET') {
            router.get(route.path, async ctx => {
                ctx.body = renderApp(route.pageComponent)
            })
        } else if (route.type === 'POST') {
            router.post(route.path, async ctx => {
                ctx.body = route.pageComponent
            })
        }
    })
}

export default routing
