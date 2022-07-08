import React from 'react';
import { Checkbox } from 'antd';

export const CheckboxInsurance = ({ checked, setChecked }) => {
  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <p
        style={{
          marginBottom: '20px',
        }}
      >
        <Checkbox checked={checked} onChange={onChange}></Checkbox>
      </p>
    </>
  );
};
