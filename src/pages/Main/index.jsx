import React from 'react'
import { Link } from 'react-router-dom'


export default function ArticleList() {
  return (
    <div>
      <p>main</p>
      <ul>
        <li><Link to="/list">list</Link></li>
        <li><Link to="/detail">detail</Link></li>
        {Date.now()}
      </ul>
    </div>
  )
}
