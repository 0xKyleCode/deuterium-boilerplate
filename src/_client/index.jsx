// @flow

import '@babel/polyfill'
import { render } from 'react-dom'
import React from 'react'
import App from '../_app'

// Gets the document we server side rendered
const rootEl = document.querySelector('.js-app')

if (!(rootEl instanceof Element)) {
    throw new Error('invalid type')
}

render(<App />, rootEl)
