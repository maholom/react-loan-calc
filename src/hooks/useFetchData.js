import { useState, useEffect } from 'react';
import axios from 'axios';

const MY_KEY = process.env.REACT_APP_API_KEY;

const useFetchData = (inputValueLoan, inputValueMonth) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const baseURL = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${inputValueLoan}&interest_rate=3.5&duration_years=${inputValueMonth}`;

  const config = {
    headers: {
      'X-Api-Key': MY_KEY,
    },
    contentType: 'application/json',
  };

  axios.get(baseURL, config);
  setLoading(true)
    .then((response) => {
      setData(response.data.monthly_payment.mortgage);
    })
    .catch((err) => {
      console.log('There is an error occured.', err);
    })
    .finaly(setLoading(false));

  useEffect(() => {
    fetchData(inputValueLoan, inputValueMonth);
  }, [inputValueLoan, inputValueMonth]);

  return { data, loading };
};
