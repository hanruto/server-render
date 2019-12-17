import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import routes from './routes'

export default function App() {
  return (
    <>
      <Helmet>
        <title>This is App page</title>
        <meta name="keywords" content="React SSR" />
      </Helmet>

      <div className="view">
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.pathname}
              component={route.component}
              path={route.pathname}
              exact={route.exact}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  )
}
