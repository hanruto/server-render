import List from './pages/List'
import Detail from './pages/Detail'
import Main from './pages/Main'


export default [
  { component: List, pathname: '/list', exact: true },
  { component: Detail, pathname: '/detail', exact: true },
  { component: Main, pathname: '/', exact: true },
]
