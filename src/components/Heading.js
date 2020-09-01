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
    const className = 'heading';
    if (this.state.editable) {
      return (
        <Input
          onSubmit={this.submitHeading}
          value={this.props.value}
          className={className}
        />
      );
    }

    return (
      <div className={`${className} pointer`} onClick={this.toggleEditable}>
        {this.props.value}
      </div>
    );
  }
}

export default Heading;
