// @flow

import { STATIC_PATH } from '@deuterium/env'

const baseHtml = (appHtml: string) => `
<!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
      </head>
      <body>
        <div class="js-app">${appHtml}</div
      </body>
    </html>
`

export default baseHtml
