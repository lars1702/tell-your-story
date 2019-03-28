import React from "react"
import styled from "styled-components"

const tys = {
  colors: {
    lightBlueGrey: "#e7ecf0",
    slateGrey: "#717b87"
  }
}

const Wrapper = styled.div`
  z-index: -10;
  background-color: ${tys.colors.lightBlueGrey};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 66px;
`

//something not quite correct about this. Maybe its time to have a look at how we do it in Diggle.
//points to correct:
//  1. tys and children are two very different values, in many ways. Can it be correct that they are passed in the same way?

const PageWrapper = ({children}) => {
  console.log('DEBUG - children', children)
  return (
    <Wrapper tys={tys}>
      {children}
    </Wrapper>
  )
}

export default PageWrapper