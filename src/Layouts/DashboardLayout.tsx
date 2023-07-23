import React, { useState } from "react";
import {
  AreaChartOutlined,
  FileOutlined,
  ShoppingOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Home",
    "1",
    <Link href="/">
      <HomeOutlined />
    </Link>
  ),
  getItem("Order", "2", <ShoppingOutlined />),
  getItem("Sale", "3", <AreaChartOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("My Profile", "4"),
    getItem("Update", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Buyer", "6"),
    getItem("Seller", "7"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

export default function DashboardLayout({
  children,
}: React.ComponentProps<any>) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" style={{ paddingTop: "1.5rem" }} />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content>
          <div style={{ background: colorBgContainer }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p>Country Meats Ltd</p>
          <p>
            All right reserved & Copyright &#169; {new Date().getFullYear()}.
          </p>
        </Footer>
      </Layout>
    </Layout>
  );
}
