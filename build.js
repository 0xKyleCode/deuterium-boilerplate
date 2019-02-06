// @flow

import { build, appRoot } from '@deuterium/util'
import config from './webpack.config.babel'

const src = `${appRoot}/src`
const lib = `${appRoot}/lib`
// flow-disable-next-line
const options = require(`${appRoot}/babel.config`) // eslint-disable-line

build(src, lib, options, config)
