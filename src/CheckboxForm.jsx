import React, { useState } from 'react';
import './index.css'

const CheckboxForm = ({ checkboxesData }) => {
  const [checkedValues, setCheckedValues] = useState(() => {
    const initialState = checkboxesData.map(group =>
      group.children.map(() => false)
    );
    return initialState;
  });

  
  const handleCheckboxChange = (parentIndex, childIndex) => {
    setCheckedValues(prevState => {
      const updatedCheckedValues = prevState.map((group, index) => {
        if (index === parentIndex) {
          return group.map((value, idx) => (idx === childIndex ? !value : value));
        }
        return group;
      });
      return updatedCheckedValues;
    });
  };

 
  const isFormValid = () => {
  
    return !checkedValues.some(group => group.some(value => !value));
  };

  return (
    <form style={{ backgroundColor: isFormValid() ? 'green' : 'red' }}>
      {checkboxesData.map((checkboxGroup, parentIndex) => (
        <div key={parentIndex}>
          <h3>{checkboxGroup.name}</h3>
          {checkboxGroup.children.map((checkbox, childIndex) => (
            <div key={childIndex}>
              <input
                type="checkbox"
                checked={checkedValues[parentIndex][childIndex]}
                onChange={() => handleCheckboxChange(parentIndex, childIndex)}
              />
              <label>{checkbox.label}</label>
            </div>
          ))}
        </div>
      ))}
    </form>
  );
};

export default CheckboxForm;
