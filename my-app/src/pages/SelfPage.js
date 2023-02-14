import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { items } from "../App";
const { Header, Content, Footer, Sider } = Layout;
const SelfPage = ({ selectedKeys, setSelectedKeys }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          selectedKeys={selectedKeys}
          onSelect={(item) => setSelectedKeys([item.key])}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Project Sk</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Project sk群历史: <br/>
            群名演变历史: <br/>
            2023.02.06 Project sk:dc富有且小康，sdn饱暖思淫欲<br/>
            2023.02.07 Qroject sk:dc富有且小康，sdn饱暖思淫欲<br/>
            2023.02.13 Qroject sk:推翻dc 光复音游<br/>
            2023.02.14 Project sk:sk牌滴蜡熊：纯纯的滴能<br/>
            本群前身为“衡水中学音游社团”，后经过不断扩容与提纯，最终变成sk个人粉丝群。在本群中，你可以讨论包括并不限于现充生活，代码学习，音游体验等多种话题。<br/>
            1.本群由sk群主立宪产生，由sdn和dc掌管实权。这是因为dc富有且小康，sdn饱暖思淫欲。这两位殿堂级的人物在群中享有不可一世的声誉。<br/>
            2.本群曾有一位叱咤风云的音游大神，其名已不可考。建群初期，由于政体的不稳定，音游大神对本群发起了共计三次战争。第一次起于群中的一次音游技术讨论。音游大神对群友的言论嗤之以鼻，遂发生赛博团战，最终以音游大群退群告终，史称第一次cb战争。后来群中又陆续发生了两次大战，最终音游大神退出了群聊。以史为鉴，我们要缅怀先烈，珍爱和平。<br/>
            3.本群现有一位武林高手，能在长生寨飞檐走壁，也能在麦赫塔劲爆吃席。但达到星月段位的大庞老师并未自满，在群采访中表示，自己将奋进新时代，争取在群历史上继续书写光辉的篇章。(project sk记者团)
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default SelfPage;
