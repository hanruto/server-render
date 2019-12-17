/**
 * 服务端渲染的入口文件
 */

import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Root from './Root'


const createApp = (context, url) => {
  const App = () => (
    <StaticRouter context={context} location={url}>
      <Root />
    </StaticRouter>
  )

  return <App />
}

export default createApp
