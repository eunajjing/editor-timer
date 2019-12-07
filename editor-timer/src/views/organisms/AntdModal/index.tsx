import React, { useState } from "react";
import { Modal, Input, InputNumber } from "antd";

interface SettingModalTypes {}

const AntdModal: React.FC<SettingModalTypes> = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Modal visible={visible} onCancel={() => setVisible(false)}>
      제목
      <br />
      <br />
      <Input placeholder="제목을 입력해주세요" size="large" />
      <br />
      <br />
      타이머 설정 <br />
      <br />
      <InputNumber
        size="large"
        min={1}
        defaultValue={15}
        max={60}
        formatter={value => `${value}s`}
        parser={value => (value as string).replace("s", "")}
        style={{ width: "100%" }}
      />
    </Modal>
  );
};

export default AntdModal;
