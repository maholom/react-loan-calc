import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoanSlider } from './LoanSlider';
import { MonthSlider } from './MonthSlider';
import { CheckboxInsurance } from './Checkbox';

export const App = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [inputValueMonth, setInputValueMonth] = useState(0);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState('');

  const MY_KEY = process.env.REACT_APP_API_KEY;
  const baseURL = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${inputValueLoan}&interest_rate=3.5&duration_years=${inputValueMonth}`;

  const fetchData = () => {
    const config = {
      headers: {
        'X-Api-Key': MY_KEY,
      },
      contentType: 'application/json',
    };

    axios
      .get(baseURL, config)
      .then((response) => {
        setData(response.data.monthly_payment.mortgage);
      })
      .catch((err) => {
        console.error('There is an error occured.', err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [inputValueLoan, inputValueMonth]);

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
