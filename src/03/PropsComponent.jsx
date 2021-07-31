import React, { Component } from 'react';

class PropsComponent extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

export default PropsComponent;
