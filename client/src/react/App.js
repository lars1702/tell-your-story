import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Feed from './pages/feed/index.js'
import WritePost from './pages/WritePost'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NavBar from "./components/NavBar"

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Feed} />
          <Route path="/write-post" component={WritePost} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

export default App
