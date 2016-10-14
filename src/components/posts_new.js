import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
  render() {

    // Next 4 lines can be written using ES6 as
    // const { fields: {title, categories, content}, handleSubmit} = this.props;
    const handleSubmit = this.props.handleSubmit;   
    const title = this.props.fields.title; 
    const categories = this.props.fields.categories;
    const content = this.props.fields.content;

    return(
      <div>
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create a new post</h3>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
          </div>

          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}/>
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" {...content}/>
          </div>          

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }
}


// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: first arg form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
},null,{createPost})(PostsNew);
