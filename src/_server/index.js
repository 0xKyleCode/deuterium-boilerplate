// @flow

import { initServer } from '@deuterium/koa'
import routing from './routing'
import packs from './_packages'

const options = {
    cert: 'server.crt',
    key: 'server.key',
}

initServer(routing, packs, options)
