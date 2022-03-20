import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';




function Spinner(props) {
    const antIcon = <LoadingOutlined style={{ fontSize: 25 }} spin />;
    return (
        <Spin className="mt-4 fitems-center justify-center" indicator={antIcon} />
    )
}


export default Spinner;
