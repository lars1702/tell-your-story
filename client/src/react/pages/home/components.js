import styled, { keyframes } from "styled-components"
import React from "react"

export const Page = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const spinner = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  20% {
    transform: translateY(0px);
    opacity: 1;
  }
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
`

export const Header = styled.div`
  background-image: url("/Berliiin.jpg");
  background-position: center 0;
  background-repeat: no-repeat;
  justify-content: center;
  background-size: cover;
  align-content: center;
  align-items: center;
  position: relative;
  display: flex;
  height: 600px;
  &::after {
    background-color: white;
    position: absolute;
    opacity: 0.5;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  @media (max-width: 800px) {
    height: 300px;
  }
`

export const Section = styled.div`
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  height: 600px;
  &::after {
    background-color: white;
    position: absolute;
    opacity: 0.3;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  @media (max-width: 800px) {
    height: 300px;
  }
`
export const Section1 = styled(Section)`
  background-image: url("/flower_evan-kirby.jpg");
  background-position: center 20%;
  flex-direction: column;
  align-items: center;
`

export const BigText = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  height: min-content;
  font-size: 44px;
  z-index: 1;
`

export const SlidingText = styled.h2`
  animation: ${spinner} 4s ease-in 0s infinite both;
  font-family: 'Courier New';
  align-items: flex-end;
  font-weight: 500;
  font-size: 34px;
  display: flex;
  color: gold;
  padding: 0;
  margin: 0;
`

export const StaticText = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  align-items: flex-end;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 40px;
  display: flex;
  padding: 0;
  margin: 0;
`

export const SliderContainer = styled.div`
  height: fit-content;
  overflow-y: hidden;
  display: flex;
  width: 900px;
  z-index: 1;
`

export const Slider = ({ children }) => {
  return (
    <SliderContainer>
      <StaticText>Click here to&nbsp;</StaticText>
      <SlidingText>{children}</SlidingText>
    </SliderContainer>
  )
}