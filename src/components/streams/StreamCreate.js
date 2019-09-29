import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  render() {
    return (
      <div>
        <form>
          <Field />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
