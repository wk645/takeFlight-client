import React from 'react'
// import AlertContainer from 'react-alert'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

    alertOptions = {
      offset: 14,
      position: 'top left',
      theme: 'dark',
      time: 3000,
      transition: 'fade'
  }

  render() {
    if (this.state.hasError) {
      
      return <h1>Error occurred!</h1>;
    }
    
  }
}

export default ErrorBoundary