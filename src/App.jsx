import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const headerStyle = { height: 100, lineHeight: '100px', backgroundColor: '#ccc', padding: 20 }
const contentStyle = {}
const footerStyle = { height: 100, lineHeight: '100px', backgroundColor: '#aaa', padding: 20 }

export default function App(props) {
  return (
    <>
      <div style={headerStyle}>header</div>
      <div style={contentStyle}>{props.children}</div>
      <div style={footerStyle}>footer</div>
    </>
  )
}
