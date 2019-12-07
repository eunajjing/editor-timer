import React from "react";
import { Layout, Button, Icon } from "antd";
import AntdHeader from "../../molecules/AntdHeader";
import AntdCard from "../../atoms/AntdCard";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

const DefaultPage = () => {
  return (
    <>
      <AntdHeader />
      <Content>
        <Row>
          <Col span={6}>
            <Link to="/editor">
              <Button style={{ width: "18rem", height: "13rem" }}>
                <Icon type="plus" />
              </Button>
            </Link>
          </Col>
          <Col span={6}>
            <AntdCard />
          </Col>
          <Col span={6}>
            <AntdCard />
          </Col>
          <Col span={6}>
            <AntdCard />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default DefaultPage;
