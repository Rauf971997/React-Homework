import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CheckboxForm from './CheckboxForm';

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Root container doesn\'t exist');

const checkboxesData = [
  {
    name: 'Group 1',
    min: 1,
    max: 2,
    children: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
  {
    name: 'Group 2',
    min: 2,
    max: 3,
    children: [
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
      { label: 'Option 5', value: 'option5' },
      { label: 'Option 6', value: 'option6' },
    ],
  },
];

const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <CheckboxForm checkboxesData={checkboxesData} />
  </React.StrictMode>
);
