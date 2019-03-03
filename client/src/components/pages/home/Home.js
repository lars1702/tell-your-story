import React, { Component } from 'react'
import { NavBar } from "./NavBar"

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Home">
        <NavBar />
        <h2>Home</h2>
      </div>
    )
  }
}

export default Home
