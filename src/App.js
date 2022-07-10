import React, { useState } from 'react';
import './index.css';
import { LoanSlider } from './components/LoanSlider';
import { MonthSlider } from './components/MonthSlider';
import { CheckboxInsurance } from './components/CheckboxInsurance';
import { Col, Row, Spin, Typography, Button } from 'antd';
import { useAxios } from './hooks/useAxios';
import { wrap } from 'lodash';

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
        <Col
          sx={24}
          lg={4}
          style={{
            margin: '8px',
            background: '#140c53',
            color: '#F8F8FF',
          }}
          flex="auto"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignContent: 'center',
            }}
          >
            <Title
              style={{
                margin: '8px',
                color: '#F8F8FF',
                alignContent: 'center',
              }}
              level={5}
            >
              Měsíčně zaplatíte
            </Title>
            <Title style={{ margin: '8px', color: '#F8F8FF' }} level={1}>
              {loading ? (
                <Spin />
              ) : (
                <div>{checked ? data + 1000 + '$' : data + '$'}</div>
              )}
            </Title>
            <Button
              style={{
                margin: '8px',
                background: '#3cba6d',
                color: '#F8F8FF',
                marginTop: '32px',
              }}
            >
              Pokračovat
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
