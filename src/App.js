import React, { useState } from 'react';
import { LoanSlider } from './components/LoanSlider';
import { MonthSlider } from './components/MonthSlider';
import { CheckboxInsurance } from './components/CheckboxInsurance';
import { Col, Row, Spin, Space } from 'antd';
import { useAxios } from './hooks/useAxios';

export const App = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [inputValueMonth, setInputValueMonth] = useState(1);
  const [checked, setChecked] = useState(false);

  const { data, loading } = useAxios(inputValueLoan, inputValueMonth);

  return (
    <>
      <Row gutter={16}>
        <Col md={12} sx={12} sm={12} style={{ margin: '16px' }}>
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
        <Col md={4} sx={12} sm={12} style={{ margin: '16px' }}>
          {loading ? <Spin /> : <div>{checked ? data + 1000 : data}</div>}
        </Col>
      </Row>
    </>
  );
};
