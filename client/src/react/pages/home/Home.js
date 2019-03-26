import React, { Component } from 'react'
import {
  Header,
  Section1,
  BigText,
  Slider,
  Page,
} from "./components"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderCounter: 1,
      sliderTexts: [],
      currentSliderText: "write you story."
    }
  }

  componentDidMount() {
    this.setState({
      sliderTexts: [
        "write you story.",
        "get peace of mind.",
        "help end sexual harrasment.",
      ]
    })
    this.interval = setInterval(() => {
      this.setState({
        sliderCounter: Math.floor((this.state.sliderCounter+1) % 3),
        currentSliderText: this.state.sliderTexts[this.state.sliderCounter]
      })
    }, 4000)
  }

  render() {
    const { currentSliderText } = this.state
    return (
      <Page className="Home">
        <Header>
          <BigText>Inspiring tagline or quote about opening up</BigText>
        </Header>
        <Section1>
          <p>The tyranny of the patriarchy</p>
          <p>has gone on for too long</p>
          <Slider>{currentSliderText}</Slider>
        </Section1>
      </Page>
    )
  }
}

export default Home
