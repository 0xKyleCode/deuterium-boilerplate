// @flow
import type { Route } from './routeType'

// eslint-disable-next-line import/prefer-default-export
export const helloWorld: Route = {
    path: '/',
    pageComponent: 'Hello World',
    type: 'GET',
    title: 'Test Page',
}
