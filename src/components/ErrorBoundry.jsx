import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: '',
      info: '',
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error: error, info: info });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooooops. That's not good.</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;