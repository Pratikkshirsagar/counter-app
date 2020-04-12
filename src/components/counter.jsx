import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleChange = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        {this.props.id}
        <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
        <button onClick={this.handleChange} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClassess() {
    let clasess = 'badge m-2 badge-';
    clasess += this.state.value === 0 ? 'warning' : 'primary';
    return clasess;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
