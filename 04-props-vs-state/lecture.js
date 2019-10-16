/* setState does a shallow merge of objects into the state */
class PostsAndComments extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

  updatePostsAndComments() {
    fetchPosts().then(response => {
      // Updates this.state.posts but leaves this.state.comments alone
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      // Updates this.state.comments but leaves this.state.posts alone
      this.setState({
        comments: response.comments
      });
    });
  }

  render() {
    return (
      <div>
        <PostDisplay posts={this.state.posts} />
        <CommentsDisplay posts={this.state.comments} />
      </div>
    );
  }
}
