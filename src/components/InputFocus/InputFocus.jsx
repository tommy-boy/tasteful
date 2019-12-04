import React from "react";

class Input extends React.PureComponent {
  render() {
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

class FocusableInput extends React.Component {
  state = {
    value: ""
  };

  ref = React.createRef();

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value: value });
  };

  render() {
    return (
      <TextInput ref={this.ref} autoFocus={true} onChange={this.handleChange} />
    );
  }

  // When the focused prop is changed from false to true,
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    const { focused } = this.props;

    if (focused) return;

    if (prevProps.focused !== focused) {
      this.ref.current.focus();
    }
  }

  componentDidMount() {
    if (this.props.focused) this.ref.current.focus();
  }
}

FocusableInput.defaultProps = {
  focused: false
};

export default FocusableInput;
