import { BoxPlotOutlined, DashboardOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

export const rootSubmenuKeys = ["product", "payment"]


export const ROOT_SUBMENU_KEYS = ['dashboard', 'users', 'settings'];

export const menuItems: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'product',
    icon: <BoxPlotOutlined />,
    label: 'Product',
  },
  {
    key: 'setting',
    icon: <SettingOutlined />,
    label: 'Setting',
    children: [
      {
        key: 'setting/profile',
        label: 'Profile',
      },
      {
        key: 'setting/test',
        label: 'Test',
      },
    ],
  },
];