import React, { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';

const CheckboxForm = ({ checkboxesData }) => {
  const [checkedValues, setCheckedValues] = useState(() => {
    const initialState = checkboxesData.map(group =>
      group.children.map(() => false)
    );
    return initialState;
  });

  const handleCheckboxChange = (groupIndex, checkboxIndex) => {
    setCheckedValues(prevState => {
      const updatedCheckedValues = prevState.map((group, index) => {
        if (index === groupIndex) {
          return group.map((value, idx) => (idx === checkboxIndex ? !value : value));
        }
        return group;
      });
      return updatedCheckedValues;
    });
  };

  const isGroupValid = (groupIndex) => {
    const checkedCount = checkedValues[groupIndex].filter(value => value).length;
    const { min, max } = checkboxesData[groupIndex];
    return checkedCount >= min && checkedCount <= max;
  };

  const isFormValid = () => {
    return checkedValues.every((group, index) => isGroupValid(index));
  };

  return (
    <form style={{ backgroundColor: isFormValid() ? 'green' : 'red' }}>
      {checkboxesData.map((group, index) => (
        <CheckboxGroup
          key={index}
          name={group.name}
          children={group.children}
          checkedValues={checkedValues[index]}
          onChange={checkboxIndex => handleCheckboxChange(index, checkboxIndex)}
          isValid={isGroupValid(index)}
        />
      ))}
    </form>
  );
};

export default CheckboxForm;
