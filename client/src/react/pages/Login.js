import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import api from '../../api'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
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
    const { username, password } = this.state
    const { history } = this.props
    e.preventDefault()
    api.login(username, password)
      .then(() => {
        console.warn('SUCCESS!')
        history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.response.data.message }))
  }

  render() {
    const { password, message, username } = this.state
    return (
      <div className="Login">
        <h2>Login</h2>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleUsername" className="mr-sm-2">Username</Label>
            <Input type="text" name="Username" id="exampleUsername" placeholder="Your name" value={username} onChange={e => this.handleInputChange("username", e)} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" value={password} onChange={e => this.handleInputChange("password", e)} />
          </FormGroup>
          <Button onClick={e => this.handleClick(e)} type="submit">Login</Button>
          {message && <div className="info info-danger">{message}</div>}
        </Form>
      </div>
    )
  }
}

export default Login
