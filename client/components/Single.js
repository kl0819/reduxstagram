import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
  render() {
    const { postId } = this.props.params;
    // index of post 
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // get the post 
    const post = this.props.posts[i]; 
    // get the comments 
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}></Photo>
        <Comments postComments={postComments} />
      </div>
    );
  }
}

export default Single;