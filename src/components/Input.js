import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = this.state.value;
    if (value) {
      this.props.onSubmit(value);
      this.setState({ value: this.props.defaultValue ? value : '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={this.props.className}
          // autoFocus
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </form>
    );
  }
}

export default Input;
