import { Outlet } from 'react-router-dom';

export default function SettingLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <p>setting layout</p>
          <Outlet />
    </div>
  );
}