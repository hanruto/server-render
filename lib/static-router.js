import Router from 'koa-router'
import serve from 'koa-static'
import path from 'path'

const router = new Router()

router.get('/static/**/*', serve(path.resolve('./static')))

export default router
