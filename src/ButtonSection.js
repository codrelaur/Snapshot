import React, { Component } from 'react';

export default class Buttons extends React.Component {
  render() {
    return (<>
      <button onClick={() => this.props.handleClick('Mountain')}>
        Mountain
      </button>
      <button onClick={() => this.props.handleClick('Beaches')}>
        Beaches
      </button>
      <button onClick={() => this.props.handleClick('Birds')}>
      Birds
    </button>
    <button onClick={() => this.props.handleClick('Food')}>
      Food
    </button>
    </>
    )
  }
}