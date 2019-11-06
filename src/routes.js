import Main from './pages/Main'
import ArticleDetail from './pages/ArticleDetail'
import ArticleList from './pages/ArticleList'

const routes = [
  { pathname: '/', component: Main },
  { pathname: '/article/detail', component: ArticleDetail },
  { pathname: '/article/list', component: ArticleList },
]

export default routes
