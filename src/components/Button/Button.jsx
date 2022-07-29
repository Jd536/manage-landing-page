import React from "react";

const Button = (props) => {
  const buttonClass = `btn ${props.type}`;
  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
