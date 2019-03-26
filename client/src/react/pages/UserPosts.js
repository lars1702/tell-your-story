import React, { Component } from 'react'
import api from '../../api'

class UserPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    api.getUserPosts()
      .then((posts) => {
        console.warn(posts)
        this.setState({
          posts,
        })
      })
      .catch(err => console.warn(err))
  }

  render() {
    const { posts } = this.state
    return (
      <div className="user-posts">
        <h2>See the posts</h2>
        {posts.map(c => <li key={c._id}>{c.name}</li>)}
      </div>
    )
  }
}

export default UserPosts
