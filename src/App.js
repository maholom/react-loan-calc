import React, { useState } from 'react';
import { LoanSlider } from './components/LoanSlider';
import { MonthSlider } from './components/MonthSlider';
import { CheckboxInsurance } from './components/CheckboxInsurance';
import { useFetchData } from './hooks/useFetchData';

export const App = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [inputValueMonth, setInputValueMonth] = useState(0);
  const [checked, setChecked] = useState(false);

  const { data, loading } = useFetchData();
  return (
    <div>
      <div>{inputValueLoan}</div>
      <div>{inputValueMonth}</div>
      <div>{checked ? data + 1000 : data}</div>

      <LoanSlider
        inputValueLoan={inputValueLoan}
        setInputValueLoan={setInputValueLoan}
      />
      <MonthSlider
        inputValueMonth={inputValueMonth}
        setInputValueMonth={setInputValueMonth}
      />

      <CheckboxInsurance checked={checked} setChecked={setChecked} />
    </div>
  );
};
