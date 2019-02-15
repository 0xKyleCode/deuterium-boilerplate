// @flow

import '@babel/polyfill'
import { render } from 'react-dom'
import React from 'react'
import App from '../_app'
import { APP_CONTAINER_SELECTOR } from '../shared'

// Gets the document we server side rendered
const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

if (!(rootEl instanceof Element)) {
    throw new Error('invalid type')
}

render(<App />, rootEl)
