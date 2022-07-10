import React from 'react';
import { Checkbox } from 'antd';
import '../index.css';

export const CheckboxInsurance = ({ checked, setChecked }) => {
  const onChange = () => {
    setChecked(!checked);
  };

  const label = `${checked ? 'S pojištěním' : 'Bez pojištění'}`;

  return (
    <>
      <p
        style={{
          marginBottom: '20px',
        }}
      >
        <Checkbox data-testid="checkbox" checked={checked} onChange={onChange}>
          {label}
        </Checkbox>
      </p>
    </>
  );
};
