import React from 'react';
import 'antd/dist/antd.css';
import { Col, InputNumber, Row, Slider } from 'antd';

export const MonthSlider = ({ inputValueMonth, setInputValueMonth }) => {
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={36}
          onChange={(value) => setInputValueMonth(value)}
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
          onChange={(value) => setInputValueMonth(value)}
          addonAfter="Měsíců"
        />
      </Col>
    </Row>
  );
};
