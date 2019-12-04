import React, { useState } from "react";
//import FormContext from "./Parts/FormContext";

function BasicForm(props) {
  const [inputs, setInputs] = useState({});

  function onChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setInputs(prevState => {
      return {
        ...prevState,
        [inputName]: {
          ...prevState[inputName],
          value: newValue,
          dirty: true
        }
      };
    });
  }

  function setInputInitialState(
    inputName,
    label = "This field ",
    type,
    initialValue = "",
    min = false,
    max = false,
    required = false
  ) {
    const INITIAL_INPUT_STATE = {
      label: label,
      type: type,
      onFocus: false,
      touched: false,
      dirty: false,
      valid: false,
      invalid: false,
      invalidMsg: null,
      value: initialValue,
      min: min,
      max: max,
      required: required
    };

    setInputs(prevState => {
      if (inputName in prevState) {
        return prevState;
      }
      return {
        ...prevState,
        [inputName]: INITIAL_INPUT_STATE
      };
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    for (var pair of data) {
      console.log(pair[0] + ": " + pair[1]);
    }
    fetch("/api/form-submit-url", {
      method: "POST",
      body: data
    });
  };

  return (
    // <FormContext.Provider
    //   value={{
    //     onChange: onChange,
    //     inputs: inputs,
    //     setInputInitialState: setInputInitialState
    //   }}
    // >
    <form onSubmit={onSubmit} method="POST" noValidate>
      {props.children}
    </form>
    // </FormContext.Provider>
  );
}

export default BasicForm;
