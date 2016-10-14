import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';


class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };


  onFormSubmit(props) {
    console.log(props);
    this.props.createPost(props)
      .then( () => {
        // blog post has been created, navigate user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {

    // Next 4 lines can be written using ES6 as
    // const { fields: {title, categories, content}, handleSubmit} = this.props;
    const handleSubmit = this.props.handleSubmit;   
    const title = this.props.fields.title; 
    const categories = this.props.fields.categories;
    const content = this.props.fields.content;

    return(
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
          <h3>Create a new post</h3>

          <div className={`form-group   ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
            <div className="text-help">
              {title.touched ? title.error : ''}
            </div>
          </div>

          <div className={`form-group   ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}/>
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>            
          </div>

          <div className={`form-group   ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea className="form-control" {...content}/>
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>            
          </div>          

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a username";
  }

  if (!values.categories) {
    errors.categories = "Enter categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }  

  return errors;
}


// connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: first arg form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
},null,{createPost})(PostsNew);
