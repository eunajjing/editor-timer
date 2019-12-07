import React, { useState } from "react";
import { Popconfirm, Input, Icon } from "antd";
import login from "../../../assets/img/login.svg";
import { LoginDataTypes } from "../../../assets/types";

interface LoginFormTypes {
  loginData: LoginDataTypes;
  setLoginData: React.Dispatch<React.SetStateAction<LoginDataTypes>>;
}

const LoginForm: React.FC = () => {
  const onchange = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.placeholder);
  };

  return (
    <>
      <Input
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="email"
        onChange={onchange}
      />
      <br />
      <Input
        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
        type="password"
        placeholder="Password"
        onChange={onchange}
      />
    </>
  );
};

const AntdPopconfirm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const loginFunc = () => {};

  return (
    <Popconfirm
      title={LoginForm}
      okText="로그인"
      okType="default"
      cancelText="회원가입"
      onConfirm={() => loginFunc()}
      onCancel={() => loginFunc()}
      icon={<></>}
    >
      <a
        href="#"
        style={{
          position: "absolute",
          right: "7rem",
          top: "3.5rem",
          color: "black"
        }}
      >
        <img src={login} />
      </a>
    </Popconfirm>
  );
};

export default AntdPopconfirm;
