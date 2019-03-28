import React from "react"
import { Left } from "./components"

class LeftOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <Left>
        LEFT
      </Left>
    )
  }
}

export default LeftOptions