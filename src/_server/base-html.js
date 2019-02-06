// @flow

import { STATIC_PATH, IN_PROD_ENV, WDS_PORT } from '@deuterium/env'

const baseHtml = (appHtml: string) => `
<!doctype html>
    <html>
      <head>
      </head>
      <body>
        <div class="js-app">${appHtml}</div>
        <script src="${
            IN_PROD_ENV ? STATIC_PATH : `https://localhost:${WDS_PORT}/dist`
        }/js/bundle.js"></script>
      </body>
    </html>
`

export default baseHtml
