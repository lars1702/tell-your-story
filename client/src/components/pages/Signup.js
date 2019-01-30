import React, { Component } from 'react'
import api from '../../api'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      message: null,
    }
  }

  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value,
    })
  }

  handleClick(e) {
    const { username, password, name } = this.state
    const { history } = this.props
    e.preventDefault()
    const data = {
      username,
      name,
      password,
    }
    api.signup(data)
      .then(() => {
        console.warn('SUCCESS!')
        history.push("/login")
      })
      .catch(err => this.setState({ message: err.response.data.message }))
  }

  render() {
    const { username, password, message, name } = this.state
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          <input type="text" value={username} onChange={e => this.handleInputChange("username", e)} />
          <input type="text" value={name} onChange={e => this.handleInputChange("name", e)} />
          <input type="password" value={password} onChange={e => this.handleInputChange("password", e)} />
          <button type="submit" onClick={e => this.handleClick(e)}>Signup</button>
        </form>
        {message && <div className="info info-danger">{message}</div>}
      </div>
    )
  }
}

export default Signup
