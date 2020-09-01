import React from 'react';
import Input from './Input';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleEditable() {
    this.setState((state) => ({ editable: !state.editable }));
  }

  onSubmit(value) {
    this.toggleEditable();
    this.props.onSubmit(value);
  }

  render() {
    const { defaultValue, className } = this.props;
    if (this.state.editable) {
      return (
        <Input
          onSubmit={this.onSubmit}
          defaultValue={defaultValue}
          className={className}
        />
      );
    }

    return (
      <h1 style={{ cursor: 'pointer' }} onClick={this.toggleEditable}>
        {defaultValue}
      </h1>
    );
  }
}

export default Header;
