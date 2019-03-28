import React from "react"
import { Right } from "./components"

class RightOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <Right>
        RIGHT
      </Right>
    )
  }
}
export default RightOptions