import Koa from 'koa'
import path from 'path'
import serve from 'koa-static'
import chalk from 'chalk'
import router from '../lib/router'


const app = new Koa()

app.use(serve(path.join(__dirname, '../dist')))

app.use(router.routes())

app.listen(8000)

console.log(chalk.blue('app is running in 8000'))
