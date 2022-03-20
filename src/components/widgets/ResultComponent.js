import React from 'react'
import { Result, Button } from 'antd';

export default function ResultComponent(props) {
  return (
    <Result
    status={props.status}
    title={props.title}
    subTitle={props.subTitle}
    className="mt-4 fitems-center justify-center"
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
  )
}
