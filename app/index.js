import * as url from 'url'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const packageJson = require('../package.json')

const app = { appName: packageJson.name, version: packageJson.version }

app.root = url.fileURLToPath(new URL('.', import.meta.url))

export default app
