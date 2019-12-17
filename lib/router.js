import Router from 'koa-router'
import fs from 'fs'
import path from 'path'
import ReactDOMServer from 'react-dom/server'
import routes from '../src/routes'
import createApp from '../src/entry-server'


function handle(ctx) {
  const { url } = ctx
  const htmlTemplate = fs.readFileSync(path.resolve('./lib/templates/index.html')).toString()
  const renderString = ReactDOMServer.renderToString(createApp({}, url))
  const content = htmlTemplate.replace(/{{content}}/, renderString)

  ctx.body = content
}

function initRouter() {
  const router = new Router()

  // 页面路由
  routes.forEach(({ pathname }) => {
    router.get(pathname, (ctx) => handle(ctx))
  })

  return router
}


export default initRouter()
