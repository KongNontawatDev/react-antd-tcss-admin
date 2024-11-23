import { lazy } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import PublicRoute from '../components/routes/PublicRoute';
import {withSuspense} from '../utils/withSuspense';
import AuthLayoutLoading from '../components/layouts/AuthLayout/loading';

const Login = withSuspense(lazy(() => import('../pages/login')), <AuthLayoutLoading />);

const authRoutes = {
  path: 'auth',
  element: <PublicRoute />,
  children: [
    {
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
      ],
    },
  ],
};

export default authRoutes;
