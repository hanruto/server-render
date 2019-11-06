import Koa from 'koa'
import pageRouter from '../lib/page-router'
import chalk from 'chalk'


const app = new Koa()

app.use(pageRouter.routes())

app.listen(8000)

console.log(chalk.blue('app is running in 8000'))

