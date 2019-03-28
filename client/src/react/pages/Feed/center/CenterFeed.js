import React from "react"
import {
  Center,
  Post,
  Title,
  Text,
 } from "./components"

class CenterFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  posts = [
    {
      title: "SOME STUFF",
      text: "THIS IS GOING TO BE SOME STUFF ALSO",
    },
    {
      title: "asdlkmasdjngkjsdfnkj",
      text: "ASDFSGFHTRTGDRFSD",
    },
  ]

  render() {
    return (
      <Center>
        {this.posts.map((post,i) =>
          <Post>
            <Title>{post.title}</Title>
            <Text>{post.text}</Text>
          </Post>
        )}
      </Center>
    )
  }
}
export default CenterFeed