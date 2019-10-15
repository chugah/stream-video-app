import React from 'react';
import Modal from '../modal/Modal';
import history from '../../history';

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
        <div className="ui button negative">Delete</div>
        <div className="ui cancel button">Cancel</div>
    </React.Fragment>
  );

  return (
    <div>
      <h1>Stream Delete</h1>
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
}

export default StreamDelete;
