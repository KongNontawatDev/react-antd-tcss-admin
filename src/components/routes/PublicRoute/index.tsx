import { Outlet } from 'react-router-dom';

export default function PublicRoute() {
  return (
    <div>
      <header>Public Header</header>
      <Outlet />
    </div>
  );
}