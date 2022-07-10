import React, { useMemo, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Col, InputNumber, Row, Slider } from 'antd';
import debounce from 'lodash.debounce';

export const MonthSlider = ({ inputValueMonth, setInputValueMonth }) => {
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValueMonth(value);
  };

  const debouncedChangeHandler = useMemo(() => debounce(onChange, 500), [
    inputValueMonth,
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
          min={0}
          max={30}
          onChange={debouncedChangeHandler}
          value={typeof inputValueMonth === 'number' ? inputValueMonth : 0}
          step={1}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={36}
          style={{
            margin: '0 16px',
          }}
          step={1}
          value={inputValueMonth}
          onChange={debouncedChangeHandler}
          addonAfter="Let"
        />
      </Col>
    </Row>
  );
};
