import styled, { keyframes } from "styled-components"

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
  border: 1px solid grey;
  align-content: center;
  align-items: center;
  position: relative;
  display: flex;
  height: 600px;
  &::after {
    content: "";
    background-color: white;
    position: absolute;
    opacity: 0.5;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
  @media (max-width: 800px) {
    height: 300px;
  }
`

export const BigText = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 44px;
  height: min-content;
  z-index: 1;
`

export const TextSlider = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 44px;
  animation: ${spinner} 4s cubic-bezier(0.550, 0.055, 0.675, 0.190) 4s infinite both;
`

export const SliderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  z-index: 1;
  height: 150px;
  overflow-y: hidden;
  width: 100%;
`