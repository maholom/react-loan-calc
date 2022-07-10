import { useState, useEffect } from 'react';
import axios from 'axios';

const MY_KEY = process.env.REACT_APP_API_KEY;

export const useAxios = (inputValueLoan, inputValueMonth) => {
  const baseURL = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${inputValueLoan}&interest_rate=3.5&duration_years=${inputValueMonth}`;

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      'X-Api-Key': MY_KEY,
    },
    contentType: 'application/json',
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(baseURL, config);
      setData(response.data.monthly_payment.mortgage);
    } catch (err) {
      console.log('There is an error occured.', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [inputValueLoan, inputValueMonth]);

  return { data, loading };
};
