import React from "react";
import AntdModal from "../../organisms/AntdModal";
import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

const EditorPage = () => {
  return (
    <>
      <AntdModal />
      <TextArea style={{ height: "40rem" }} />
      <Button style={{ position: "fixed", right: "5rem", bottom: "1rem" }}>
        저장
      </Button>
    </>
  );
};

export default EditorPage;
