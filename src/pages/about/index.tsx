import React from "react";
import RootLayout from "../../Layouts/RootLayout";
import { Space, Typography } from "antd";
import Loader from "../../UI/Loader";

export default function about() {
  return (
    <RootLayout>
      <Space direction="vertical">
        <Typography.Title>About</Typography.Title>
        <div style={{display:"flex"}}>
        <Loader />
        </div>
      </Space>
    </RootLayout>
  );
}
