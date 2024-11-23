import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SettingsLayout from '../components/layouts/SettingsLayout';
import SettingLayoutLoading from '../components/layouts/SettingsLayout/loading';
import { withSuspense } from '../utils/withSuspense';

const Profile = withSuspense(lazy(() => import('../pages/setting/profile')), <SettingLayoutLoading />);

const settingsRoutes = {
  path: 'setting',
  element: <SettingsLayout />,
  children: [
    { index: true, element: <Navigate to="account" replace /> }, //ถ้าเข้า /setting ให้ redirec ไปที่ /setting/account เป็นอันดับแรกโดยอัตโนมัติ
    { path: 'account', element: <Profile /> },
  ],
};

export default settingsRoutes;
