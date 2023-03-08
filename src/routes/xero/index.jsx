import { Outlet } from 'react-router-dom';

function XeroDashboard() {
  return (
    <div>
      <h1>Xero Dashboard</h1>
      <nav>
        <ul>
          <li>Xero2</li>
          <li>Xero1</li>
          <li>Xero</li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export { XeroDashboard };
