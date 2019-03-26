import React from "react"
import PageWrapper from "../../components/PageWrapper"
import { 
  LeftOptions,
  CenterFeed,
  RightOptions,
 } from "./components"

class Feed extends React.Component {
  render() {
    return (
      <PageWrapper>
        <LeftOptions />
        <CenterFeed />
        <RightOptions />
      </PageWrapper>
    )
  }
}

export default Feed