import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ConfigProvider, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import Navigation from "../Navigation/Navigation";
import PageContainer from "../PageContainer/PageContainer";

import { MENU_ITEMS } from "../../data/config";

import styles from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <PageContainer>
        <div className={styles.headerInner}>
          <Navigation />
          <button className={styles.burger} onClick={() => setOpen(true)}>
            <MenuOutlined />
          </button>
          <Drawer placement="right" onClose={() => setOpen(false)} open={open}>
            <ConfigProvider theme={MENU_THEME}>
              <Menu
                mode="vertical"
                selectedKeys={[location.pathname]}
                items={MENU_ITEMS}
                onClick={({ key }) => {
                  navigate(key);
                  setOpen(false);
                }}
              />
            </ConfigProvider>
          </Drawer>
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;

const MENU_THEME = {
  components: {
    Menu: {
      itemHoverBg: "#e44848",
      itemSelectedBg: "#d84343",
      itemSelectedColor: "#fff",
      itemHoverColor: "#fff",
    },
  },
};
