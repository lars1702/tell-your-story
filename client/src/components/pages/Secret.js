import React, { Component } from 'react'
import api from '../../api'

class Secret extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secret: null,
      message: null,
    }
  }

  componentDidMount() {
    api.getSecret()
      .then(data => this.setState({ secret: data.secret }))
      .catch(err => this.setState({ message: err.response.data.message }))
  }


  render() {
    const { secret, message } = this.state
    return (
      <div className="Secret">
        <h2>Secret</h2>
        <div className="result">
          {secret}
        </div>
        {message && <div className="info info-danger">{message}</div>}
      </div>
    )
  }
}


export default Secret
