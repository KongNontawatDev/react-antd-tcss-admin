import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <p>Sidebar</p>
      <div className="ml-64">
       <p>Header</p>
        <main className="p-6 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}