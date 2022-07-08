import React, { useMemo, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Col, InputNumber, Row, Slider } from 'antd';
import debounce from 'lodash.debounce';

export const LoanSlider = ({ inputValueLoan, setInputValueLoan }) => {
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValueLoan(value);
  };

  const debouncedChangeHandler = useMemo(() => debounce(onChange, 500), [
    inputValueLoan,
  ]);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1000}
          max={100000}
          onChange={debouncedChangeHandler}
          value={typeof inputValueLoan === 'number' ? inputValueLoan : 1000}
          step={1000}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1000}
          max={100000}
          style={{
            margin: '0 16px',
          }}
          value={inputValueLoan}
          onChange={debouncedChangeHandler}
          step={1000}
          addonAfter="Kč"
        />
      </Col>
    </Row>
  );
};
