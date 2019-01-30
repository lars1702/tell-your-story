import React, { Component } from 'react'
import api from '../../api'

class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }

  componentDidMount() {
    api.getCountries()
      .then((countries) => {
        console.warn(countries)
        this.setState({
          countries,
        })
      })
      .catch(err => console.warn(err))
  }

  render() {
    const { countries } = this.state
    return (
      <div className="Countries">
        <h2>List of countries</h2>
        {countries.map(c => <li key={c._id}>{c.name}</li>)}
      </div>
    )
  }
}

export default Countries
