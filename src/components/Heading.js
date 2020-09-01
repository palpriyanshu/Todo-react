import React from 'react';
import Input from './Input';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.submitHeading = this.submitHeading.bind(this);
  }

  toggleEditable() {
    this.setState((state) => ({ isEditable: !state.isEditable }));
  }

  submitHeading(heading) {
    this.toggleEditable();
    this.props.updateHeading(heading);
  }

  render() {
    const className = 'heading';
    const { submitHeading, toggleEditable, state, props } = this;
    const { value } = props;

    if (state.isEditable) {
      return (
        <Input onSubmit={submitHeading} value={value} className={className} />
      );
    }

    return (
      <div className={`${className} pointer`} onClick={toggleEditable}>
        {value}
      </div>
    );
  }
}

export default Heading;
