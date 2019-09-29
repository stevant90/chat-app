import React from 'react';

const FormInput = ({ className, type, value, changeHandler, name }) => (
  <input 
    className={className}
    type={type}
    value={value}
    changeHandler={changeHandler}
    name={name}
  />
);

export default FormInput;