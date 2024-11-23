import { lazy } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import ProtectedRoute from '../components/routes/ProtectedRoute';
import DashboardLayoutLoading from '../components/layouts/DashboardLayout/loading';
import { withSuspense } from '../utils/withSuspense';

const Dashboard = withSuspense(lazy(() => import('../pages/dashboard')), <DashboardLayoutLoading />);

const dashboardRoutes = {
  path: '/',
  element: <ProtectedRoute />,
  children: [
    {
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> },
      ],
    },
  ],
};

export default dashboardRoutes;
