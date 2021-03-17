import React from "react";

const InputElement = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case ("input"):
      inputElement = <input {...props.elementConfig}/>;
      break;
    case ('textarea'):
        inputElement = <textarea {...props.elementConfig}/>;
        break;
    case ('password'):
      inputElement = <input {...props.elementConfig} />;
      break;
    default:
        inputElement = <input/>;
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default InputElement;
