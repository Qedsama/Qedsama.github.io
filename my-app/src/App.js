import HomePage from "./pages/HomePage";
import SelfPage from "./pages/SelfPage";
import ItPage from "./pages/ItPage";

import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const items = [
  getItem("主页", "1", <PieChartOutlined />),
  getItem("杂记", "2", <DesktopOutlined />),
  getItem("开发介绍", "sub1", <UserOutlined />, [
    getItem("博客1", "3"),
    getItem("博客2", "4"),
    getItem("博客3", "5"),
  ]),
  getItem("音游相关", "sub2", <TeamOutlined />, [
    getItem("phigros查分", "6"),
    getItem("arcaea查分", "8"),
  ]),
  getItem("写博客", "9", <PieChartOutlined />),
];
const App = () => {
  const [selectedKeys, setSelectedKeys] = useState(["1"]);
  return (
      selectedKeys==1?
      <HomePage selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys}/>:(
        selectedKeys==2?<SelfPage selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys}/>:(
          <ItPage selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys}/>
        )
      )
  );
};
export default App;
