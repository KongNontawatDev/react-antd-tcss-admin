import { createBrowserRouter } from 'react-router-dom';
import authRoutes from './authRoutes';
import dashboardRoutes from './dashboardRoutes';
import settingsRoutes from './settingsRoutes';

export const router = createBrowserRouter([
  dashboardRoutes,
  authRoutes,
  settingsRoutes,
]);
