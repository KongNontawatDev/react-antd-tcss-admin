import {  Outlet } from 'react-router-dom';
// import { useAuth } from '@/contexts/AuthContext';

export default function ProtectedRoute() {
  // const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <div>
      <header>Protected Header</header>
      <Outlet />
    </div>
  );
}