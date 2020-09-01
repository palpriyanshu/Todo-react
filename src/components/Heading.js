import React from 'react';
import Input from './Input';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.submitHeading = this.submitHeading.bind(this);
  }

  toggleEditable() {
    this.setState((state) => ({ editable: !state.editable }));
  }

  submitHeading(heading) {
    this.toggleEditable();
    this.props.updateHeading(heading);
  }

  render() {
    const { value, className } = this.props;

    if (this.state.editable) {
      return (
        <Input
          onSubmit={this.submitHeading}
          value={value}
          className={className}
        />
      );
    }

    return (
      <h1 style={{ cursor: 'pointer' }} onClick={this.toggleEditable}>
        {value}
      </h1>
    );
  }
}

export default Heading;
