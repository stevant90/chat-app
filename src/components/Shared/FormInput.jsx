import React from 'react';

const FormInput = ({ className, type, value, changeHandler, name }) => (
  <input 
    className={className}
    type={type}
    value={value}
    onChange={changeHandler}
    name={name}
  />
);

export default FormInput;