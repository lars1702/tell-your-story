import React from "react"
import PageWrapper from "../../components/PageWrapper"
import CenterFeed from "./center/CenterFeed"
import LeftOptions from "./left/LeftOptions"
import RightOptions from "./right/RightOptions"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 4px solid black;
  margin: 25px;
`

class Feed extends React.Component {

  render() {
    return (
      <PageWrapper className="Wrapper">
        <Container>
          <LeftOptions />
          <CenterFeed />
          <RightOptions />
        </Container>
      </PageWrapper>
    )
  }
}

export default Feed