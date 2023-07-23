import React, { useEffect, useState } from "react";
import Link from "next/link";
import RootLayout from "../../Layouts/RootLayout";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { toast } from "react-toastify";

const rootStyle:React.CSSProperties = {
  backgroundImage:"url(../../Assets/login.jpeg)",
  minHeight:"70vh",
  padding:"2rem",
}

const formStyle:React.CSSProperties ={
  boxSizing: "border-box",
  margin: "0 auto",
  borderRadius: "1rem",
  border: "4px solid hsl(0, 0%, 90%)",
  display: "grid",
  padding: "1rem",
  gridTemplateColumns: "1fr",
  maxWidth: "600px",
}
const inputStyle:React.CSSProperties ={
  padding: ".5rem",
}

export default function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
    toast.success("Login successful");
  };

  return (
    <RootLayout>
      <div style={rootStyle}>
      <Form
        form={form}
        name="horizontal_login"
        layout="horizontal"
        onFinish={onFinish}
        style={formStyle}
      >
        <h1>Please login</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            style={inputStyle}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={inputStyle}
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
        <Link href="/register">Register</Link>
      </Form>
      </div>
    </RootLayout>
  );
}
