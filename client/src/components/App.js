import React, { PureComponent } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import UserPosts from './pages/UserPosts'
import WritePost from './pages/WritePost'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/user-posts">Posts</NavLink>
          <NavLink to="/write-post">Write post</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <NavLink to="/" onClick={() => api.logout()}>Logout</NavLink>}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={UserPosts} />
          <Route path="/write-post" component={WritePost} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

export default App
