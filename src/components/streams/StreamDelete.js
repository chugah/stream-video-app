import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import history from '../../history';
import { deleteStream, getStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount(){
    this.props.getStream(this.props.match.params.id);
  }

  onHandleClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
          <button onClick={this.onHandleClick} className="ui button negative">Delete</button>
          <Link to="/" className="ui cancel button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if(!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete ${this.props.stream.title}?`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { deleteStream, getStream })(StreamDelete);
