import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(evt) => evt.stopPropagation()}className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">
            {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;