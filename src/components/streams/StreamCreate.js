import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const addErrClass = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={addErrClass}>
        <label>{label}</label>
        <input { ...input } />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <h1>Create Streams</h1>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if(!formValues.title) {
    error.title = 'You must enter a title';
  }

  if(!formValues.description) {
    error.description = 'You must enter a description';
  }

  return error;
}

export default reduxForm({
  form: 'streamCreate',
  validate
  })(StreamCreate);
