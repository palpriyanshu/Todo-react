import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = this.state.value.trim();
    if (value) {
      this.props.onSubmit(value);
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={this.props.className}
          autoFocus
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </form>
    );
  }
}

Input.defaultProps = {
  value: '',
};

export default Input;
