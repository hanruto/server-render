/**
 * 前端渲染的入口文件
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root'

const App = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
