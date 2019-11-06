import Router from 'koa-router'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'
import routes from '../src/routes'


function handle(ctx, Component) {
  const htmlTemplate = fs.readFileSync(path.resolve('./lib/templates/index.html')).toString()
  const renderString = ReactDOMServer.renderToString(<App><Component /></App>)
  const content = htmlTemplate.replace(/{{content}}/, renderString)

  ctx.body = content
}

function initRouter() {
  const router = new Router()

  routes.forEach(({ pathname, component }) => {
    router.get(pathname, (ctx) => handle(ctx, component))
  })

  return router
}


export default initRouter()