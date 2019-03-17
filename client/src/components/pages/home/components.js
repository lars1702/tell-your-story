import styled from "styled-components"

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
  height: min-content;
  z-index: 1;
`