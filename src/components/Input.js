import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ value: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = this.state.value.trim();
    if (value) {
      this.props.onSubmit(value);
      this.setState((state, props) => ({ value: props.value }));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={this.props.className}
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
