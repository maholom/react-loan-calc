import React, { useState } from 'react';
import { LoanSlider } from './components/LoanSlider';
import { MonthSlider } from './components/MonthSlider';
import { CheckboxInsurance } from './components/CheckboxInsurance';
import { Col, Row, Spin, Typography } from 'antd';
import { useAxios } from './hooks/useAxios';

export const App = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [inputValueMonth, setInputValueMonth] = useState(1);
  const [checked, setChecked] = useState(false);

  const { data, loading } = useAxios(inputValueLoan, inputValueMonth);

  const { Title } = Typography;

  return (
    <>
      <Row>
        <Col sx={24} lg={20} style={{ margin: '16px' }} flex="auto">
          <Title level={3} style={{ color: '#140c53' }}>
            Expres půjčku schválíme online do 5 minut
          </Title>
          <Title level={5} style={{ color: '#140c53' }}>
            Kolik chci půjčit
          </Title>
          <LoanSlider
            inputValueLoan={inputValueLoan}
            setInputValueLoan={setInputValueLoan}
          />
          <Title level={5} style={{ color: '#140c53' }}>
            Na jak dlouho
          </Title>
          <MonthSlider
            inputValueMonth={inputValueMonth}
            setInputValueMonth={setInputValueMonth}
          />
          <Title level={5} style={{ color: '#140c53' }}>
            Pojištění proti neschopnosti splácet půjčku
          </Title>
          <CheckboxInsurance checked={checked} setChecked={setChecked} />
        </Col>
        <Col sx={24} lg={4} style={{ margin: '8px' }} flex="auto">
          {loading ? <Spin /> : <div>{checked ? data + 1000 : data}</div>}
        </Col>
      </Row>
    </>
  );
};
