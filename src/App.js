import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}
