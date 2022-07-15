import * as url from 'url'
import { createRequire } from 'module'

import config from './lib/config.js'

const require = createRequire(import.meta.url)
const packageJson = require('../package.json')

export const app = { appName: packageJson.name, version: packageJson.version }
app.root = url.fileURLToPath(new URL('.', import.meta.url))
app.config = config()
