import React from "react";
import RootLayout from "../../Layouts/RootLayout";
import { Space, Typography } from "antd";

export default function about() {
  return (
    <RootLayout>
      <Space direction="vertical">
        <Typography.Title>About</Typography.Title>
      </Space>
    </RootLayout>
  );
}
