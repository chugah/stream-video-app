import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    this.gapiAuth();
  }

  gapiAuth = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '791916156537-0rjv4h8mc40ovjasa2adsb1m7f9vr00k.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
          this.setAuthStatus();
      });
    });
  }

  setAuthStatus = () => {
    this.auth = window.gapi.auth2.getAuthInstance();
    this.onAuthChange(this.auth.isSignedIn.get());
    this.auth.isSignedIn.listen(this.onAuthChange);
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthBtn = () => {
    if(this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthBtn()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
