import React, { useState } from 'react';
import axios from 'axios';
import { LoanSlider } from './LoanSlider';
import { MonthSlider } from './MonthSlider';

export const App = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [inputValueMonth, setInputValueMonth] = useState(0);

  const MY_KEY = process.env.REACT_APP_API_KEY;

  const fetchQuotes = async () => {
    const config = {
      headers: {
        'X-Api-Key': MY_KEY,
      },
      contentType: 'application/json',
    };
    const res = await axios.get(
      `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=200000&interest_rate=3.5&duration_years=30`,
      config,
    );
    return res.data;
  };

  fetchQuotes();

  return (
    <>
      <LoanSlider
        inputValueLoan={inputValueLoan}
        setInputValueLoan={setInputValueLoan}
      />
      <MonthSlider
        inputValueMonth={inputValueMonth}
        setInputValueMonth={setInputValueMonth}
      />
    </>
  );
};
