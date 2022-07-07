import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoanSlider } from './LoanSlider';
import { MonthSlider } from './MonthSlider';

export const App = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [inputValueMonth, setInputValueMonth] = useState(0);
  const [data, setData] = useState('');

  const MY_KEY = process.env.REACT_APP_API_KEY;

  const fetchData = async () => {
    const config = {
      headers: {
        'X-Api-Key': MY_KEY,
      },
      contentType: 'application/json',
    };
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${inputValueLoan}&interest_rate=3.5&duration_years=${inputValueMonth}`,
        config,
      );
      setData(response.data.monthly_payment.mortgage);
    } catch (err) {
      console.error('Thee is an error happened.');
    }
  };

  useEffect(() => {
    fetchData();
  }, [inputValueLoan, inputValueMonth]);

  return (
    <div>
      <div>{inputValueLoan}</div>
      <div>{inputValueMonth}</div>
      <div>{data}</div>

      <LoanSlider
        inputValueLoan={inputValueLoan}
        setInputValueLoan={setInputValueLoan}
      />
      <MonthSlider
        inputValueMonth={inputValueMonth}
        setInputValueMonth={setInputValueMonth}
      />
    </div>
  );
};
