import React from "react";
// Style
import style from "./Layout.module.css";
import { Layout as AntdLayout, Row, Col } from "antd";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AntdLayout style={{ minHeight: "100vh", padding: "1rem" }}>
      <AntdLayout.Content className={style.content}>
        <Row
          justify="center"
          align="middle"
          style={{ width: "100%", height: "100%" }}
        >
          <Col>{children}</Col>
        </Row>
      </AntdLayout.Content>
    </AntdLayout>
  );
};
