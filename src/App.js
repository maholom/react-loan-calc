import React, { useState } from 'react';
import { LoanSlider } from './components/LoanSlider';
import { MonthSlider } from './components/MonthSlider';
import { CheckboxInsurance } from './components/CheckboxInsurance';
import { Col, Row, Spin } from 'antd';
import { useAxios } from './hooks/useAxios';

export const App = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [inputValueMonth, setInputValueMonth] = useState(1);
  const [checked, setChecked] = useState(false);

  const { data, loading } = useAxios(inputValueLoan, inputValueMonth);

  return (
    <>
      <Row>
        <Col sx={24} lg={20} style={{ margin: '8px' }} flex="auto">
          <LoanSlider
            inputValueLoan={inputValueLoan}
            setInputValueLoan={setInputValueLoan}
          />
          <MonthSlider
            inputValueMonth={inputValueMonth}
            setInputValueMonth={setInputValueMonth}
          />
          <CheckboxInsurance checked={checked} setChecked={setChecked} />
        </Col>
        <Col sx={24} lg={4} style={{ margin: '8px' }} flex="auto">
          {loading ? <Spin /> : <div>{checked ? data + 1000 : data}</div>}
        </Col>
      </Row>
    </>
  );
};
