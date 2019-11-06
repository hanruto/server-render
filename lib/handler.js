import React from 'react'
import App from './App'
import ReactDOMServer from 'react-dom/server'


export default function render() {
  return ReactDOMServer.renderToString(<App />)
} 
