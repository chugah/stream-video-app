import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions';

class StreamShow extends Component {
  compomentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    if(!this.props.stream) {
      return (
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      );
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, { getStream })(StreamShow);
