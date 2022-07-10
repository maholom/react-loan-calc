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
      <Col span={18}>
        <Slider
          min={1}
          max={30}
          onChange={debouncedChangeHandler}
          value={typeof inputValueMonth === 'number' ? inputValueMonth : 1}
          step={1}
          trackStyle={{ backgroundColor: '#3cba6d' }}
        />
      </Col>
      <Col span={6}>
        <InputNumber
          min={1}
          max={36}
          step={1}
          value={inputValueMonth}
          onChange={debouncedChangeHandler}
          addonAfter="Počet let"
        />
      </Col>
    </Row>
  );
};
