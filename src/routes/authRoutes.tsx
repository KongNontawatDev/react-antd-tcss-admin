import { lazy } from 'react';
import PublicRoute from '../components/routes/PublicRoute';
import { withSuspense } from '../utils/withSuspense';
import AuthLayoutLoading from '../components/layouts/AuthLayout/loading';
import { ErrorBoundaryWrapper } from '../components/error';

const AuthLayoutWithSuspense = withSuspense(
  lazy(() => import('../components/layouts/AuthLayout')),
  <AuthLayoutLoading />
);

const Login = withSuspense(
  lazy(() => import('../pages/login')),
  <AuthLayoutLoading />
);

const authRoutes = {
  path: 'auth',
  element: <PublicRoute />,
  errorElement: (
    <ErrorBoundaryWrapper>
      <AuthLayoutLoading />
    </ErrorBoundaryWrapper>
  ),
  children: [
    {
      element: (
        <AuthLayoutWithSuspense>
          <ErrorBoundaryWrapper>
            <AuthLayoutLoading />
          </ErrorBoundaryWrapper>
        </AuthLayoutWithSuspense>
      ),
      children: [
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ],
};

export default authRoutes;
