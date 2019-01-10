// @flow

import baseHtml from './base-html'
import routes from './_routing'
import type { Route } from './_routing/routeType'
/**
 * Find a match to the url from all the routes and returns that information
 * @param {*} url
 */
function findMatch(url: string): Route {
    let route: Route = { path: '', pageComponent: '', title: '' }
    Object.keys(routes).forEach(key => {
        if (routes[key].path === url) {
            route = routes[key]
        }
    })
    return route
}

const renderedApp = (url: string): string => {
    const route: Route = findMatch(url)
    const appHtml = route.pageComponent
    const html = baseHtml(appHtml)
    return html
}

export default renderedApp
