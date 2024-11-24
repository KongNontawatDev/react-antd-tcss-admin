import { lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import SettingLayoutLoading from '../components/layouts/SettingsLayout/loading';
import { withSuspense } from '../utils/withSuspense';

const SettingsLayoutWithSuspense = withSuspense(
  lazy(() => import('../components/layouts/SettingsLayout')),
  <SettingLayoutLoading />
);

const Profile = withSuspense(
  lazy(() => import('../pages/setting/profile')),
  <SettingLayoutLoading />
);
const Test = withSuspense(
  lazy(() => import('../pages/setting/test')),
  <SettingLayoutLoading />
);

const settingsRoutes = {
  path: 'setting',
  element: (
    <SettingsLayoutWithSuspense>
      <Outlet />
    </SettingsLayoutWithSuspense>
  ),
  children: [
    {
      index: true,
      element: <Navigate to="profile" replace />, // Redirect /setting to /setting/profile
    },
    {
      path: 'profile',
      element: <Profile />,
    },
    {
      path: 'test',
      element: <Test />,
    },
  ],
};

export default settingsRoutes;
