import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPost() {
    return this.props.posts.map( (post) => {
      return(
        <li className="list-group-item" key={post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add a post</Link>
        </div>
        <div>
          <h3>List of posts</h3>
          <ul className="list-group">
            {this.renderPost()}
          </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);


