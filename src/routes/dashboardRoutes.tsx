import { lazy } from "react";
import ProtectedRoute from "../components/routes/ProtectedRoute";
import DashboardLayoutLoading from "../components/layouts/DashboardLayout/Loading";
import { withSuspense } from "../utils/withSuspense";
import { Outlet } from "react-router-dom";
import { ErrorBoundaryWrapper } from "../components/error";
import settingsRoutes from "./settingsRoutes";

const DashboardLayoutWithSuspense = withSuspense(
	lazy(() => import("../components/layouts/DashboardLayout/Layout")),
	<DashboardLayoutLoading />
);

const Home = withSuspense(
	lazy(() => import("../pages/home")),
	<DashboardLayoutLoading />
);
const Dashboard = withSuspense(
	lazy(() => import("../pages/dashboard")),
	<DashboardLayoutLoading />
);
const Product = withSuspense(
	lazy(() => import("../pages/product")),
	<DashboardLayoutLoading />
);

const dashboardRoutes = {
  path: "/",
  element: <ProtectedRoute />,
  errorElement: (
    <ErrorBoundaryWrapper>
      <Outlet />
    </ErrorBoundaryWrapper>
  ),
  children: [
    {
      element: (
        <DashboardLayoutWithSuspense>
          <ErrorBoundaryWrapper>
            <Outlet />
          </ErrorBoundaryWrapper>
        </DashboardLayoutWithSuspense>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        settingsRoutes,
      ],
    },
  ],
};


export default dashboardRoutes;
