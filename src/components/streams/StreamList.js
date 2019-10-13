import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderUserBtns = stream => {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    }
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderUserBtns(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <div className="header">
              {stream.title}
            </div>
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      );
    });
  }

  renderAddStream = () => {
    if(this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Stream List</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderAddStream()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { getStreams })(StreamList);
