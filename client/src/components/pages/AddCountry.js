import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import api from '../../api'


class AddCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      capitals: "",
      area: "",
      description: "",
      message: null,
    }
  }

  handleInputChange(stateFieldName, event) {
    const newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    const { name, description, capitals, area } = this.state
    e.preventDefault()
    console.warn(name, description)
    const data = {
      name,
      capitals,
      area,
      description,
    }
    api.postCountries(data)
      .then(() => {
        console.warn('SUCCESS!')
        this.setState({
          name: "",
          capitals: "",
          area: "",
          description: "",
          message: `Your country '${name}' has been created`,
        })
        setTimeout(() => {
          this.setState({
            message: null,
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.response.data.message }))
  }

  render() {
    const { name, description, capitals, area, message } = this.state
    return (
      <div className="AddCountry">
        <h2>Add country</h2>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleUsername" className="mr-sm-2">Name</Label>
            <Input type="text" name="Name" id="Name" placeholder="Your name" value={name} onChange={e => this.handleInputChange("username", e)} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleUsername" className="mr-sm-2">Capitals</Label>
            <Input type="text" name="Capitals" id="Capitals" placeholder="Capitals" value={capitals} onChange={e => this.handleInputChange("capitals", e)} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleUsername" className="mr-sm-2">Area</Label>
            <Input type="text" name="Area" id="Area" placeholder="Your Area" value={area} onChange={e => this.handleInputChange("area", e)} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleUsername" className="mr-sm-2">Description</Label>
            <Input type="text" name="Description" id="Description" placeholder="Description" value={description} onChange={e => this.handleInputChange("description", e)} />
          </FormGroup>
          <Button onClick={e => this.handleClick(e)}>Create country</Button>
          {message && <div className="info">{message}</div>}
        </Form>
      </div>
    )
  }
}

export default AddCountry
