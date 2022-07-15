import fs from 'fs'
import path from 'path'
import configExtend from 'config-extend'
import glob from 'glob/glob.js'
import JSON5 from 'json5/dist/index.mjs'

import { app } from '../index.js'

const configs =  () => {
	let config = {}
	let defaultConfig = 'config/+(config.json5|config.local.json5)'

	if (process.env.NODE_ENV === 'prod') {
		defaultConfig = 'config/+(config.json5|config.prod.json5)'
	}
	if (process.env.NODE_ENV === 'test') {
		defaultConfig = 'config/+(config.json5|config.test.json5)'
	}

	glob.sync(defaultConfig, { cwd: app.root }).forEach((item) => {
		config = configExtend(config, JSON5.parse(fs.readFileSync(path.join(app.root, item))))
	})
	return config
}

export default configs
