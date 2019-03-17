import React, { Component } from 'react'
import {
  Header,
  BigText,
} from "./components"

class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Home">
        <Header>
          <BigText>Inspiring tagline or quote about opening up</BigText>
        </Header>
        <Header>
          <BigText> Upsell statement:
            "Click here to write you story.
            Click here to get peace of mind.
            Click here to help aid in the attempt to stop sexual harrasment."
          </BigText>
        </Header>
      </div>
    )
  }
}

export default Home
