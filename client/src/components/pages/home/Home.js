import React, { Component } from 'react'
import {
  Header,
  BigText,
  TextSlider,
} from "./components"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slider: []
    }
  }

  componentDidMount() {
    this.setState({
      slider: [
        "Click here to write you story.",
        "Click here to get peace of mind.",
        "Click here to help stop sexual harrasment.",
      ]
    })
  }
  render() {
    return (
      <div className="Home">
        <Header>
          <BigText>Inspiring tagline or quote about opening up</BigText>
        </Header>
        <Header>
          <TextSlider>
            {this.state.slider?.length &&
              this.state.slider.map((e, i) => {
                return setInterval(() => {
                  return "This should show"
                }, 3000)
              })
            }
          </TextSlider>
        </Header>
      </div>
    )
  }
}

export default Home
