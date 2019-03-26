import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import api from '../../api'

class WritePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      story: "",
      message: null
    }
  }

  handleInputChange(stateFieldName, event) {
    const newState = {}
    newState[stateFieldName] = event.target.value
    this.setState(newState)
  }

  handleClick(e) {
    const { name, story } = this.state
    e.preventDefault()
    const data = { name, story }
    api.postUserPosts(data)
      .then(() => {
        this.setState({
          name: "",
          story: "",
          message: `Your post '${name}' has been published.`
        })
        setTimeout(() => {
          this.setState({ message: null })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.response.data.message }))
  }

  render() {
    const { name, story, message } = this.state
    return (
      <div className="write-post">
        <h2>Write a post</h2>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleUsername" className="mr-sm-2">Name</Label>
            <Input
              type="text"
              name="Name"
              id="Name"
              placeholder="Your name"
              value={name}
              onChange={e => this.handleInputChange("username", e)}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleUsername" className="mr-sm-2">Story</Label>
            <Input
              type="textarea"
              name="Story"
              id="Story"
              placeholder="Write about your experience"
              value={story}
              onChange={e => this.handleInputChange("description", e)}
            />
          </FormGroup>
          <Button onClick={e => this.handleClick(e)}>Publish</Button>
          {message && <div className="info">{message}</div>}
        </Form>
      </div>
    )
  }
}

export default WritePost
