// @flow

import baseHtml from './base-html'

const renderedApp = (appHtml: string): string => {
    const html = baseHtml(appHtml)
    return html
}

export default renderedApp
