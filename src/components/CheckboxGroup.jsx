import React from 'react';
import Checkbox from './Checkbox';

const CheckboxGroup = ({ name, children, checkedValues, onChange, isValid }) => {
  return (
    <div>
      <h3>{name}</h3>
      {children.map((checkbox, index) => (
        <Checkbox
          key={index}
          label={checkbox.label}
          checked={checkedValues[index]}
          onChange={() => onChange(index)}
        />
      ))}
      <p style={{ color: isValid ? 'green' : 'red' }}>
        {isValid ? 'valid' : 'invalid'}
      </p>
    </div>
  );
};

export default CheckboxGroup;
