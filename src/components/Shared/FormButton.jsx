import React from 'react';

const FormButton = ({ className, action, btnText }) => (
  <button
    className={className}
    onClick={action}
  >
    <span>{btnText}</span>
  </button>
);

export default FormButton;