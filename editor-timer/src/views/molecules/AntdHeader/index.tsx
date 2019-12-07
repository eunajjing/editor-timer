import React from "react";
import { Layout } from "antd";
import logo from "../../../logo.svg";
import AntdPopconfirm from "../AntdPopconfirm";
const { Header } = Layout;

const AntdHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        marginBottom: "10rem"
      }}
    >
      <img src={logo} /> <AntdPopconfirm />
    </Header>
  );
};

export default AntdHeader;
