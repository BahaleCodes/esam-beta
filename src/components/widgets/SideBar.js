import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';

const SideBar = () => {
  const [visible, setVisible] = useState(false);
  // const [placement, setPlacement] = useState('right');

  const showDrawer = () => {
    setVisible(true);
  };

  // const onChange = (e) => {
  //   setPlacement(e.target.value);
  // };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement="left"
        width={500}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default SideBar;