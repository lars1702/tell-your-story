import React, { Component } from 'react'
import {
  Header,
  BigText,
  TextSlider,
  SliderBox,
} from "./components"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderCounter: 0,
      sliderTexts: [],
      currentSliderText: "Click here to write you story."
    }
    
  }

  componentDidMount() {
    this.setState({
      sliderTexts: [
        "Click here to write you story.",
        "Click here to get peace of mind.",
        "Click here to help stop sexual harrasment.",
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
    const { sliderCounter, currentSliderText } = this.state
    console.log('DEBUG - sliderCounter', sliderCounter)
    console.log('DEBUG - currentSliderText', currentSliderText)
    return (
      <div className="Home">
        <Header>
          <BigText>Inspiring tagline or quote about opening up</BigText>
        </Header>
        <Header>
          <SliderBox>
            <TextSlider>
              {this.state.currentSliderText}
            </TextSlider>
          </SliderBox>
        </Header>
      </div>
    )
  }
}

export default Home
