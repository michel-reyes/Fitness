import { Link, Outlet } from 'react-router-dom';

function XeroDashboard() {
  return (
    <div>
      <h1>Xero Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="beginner">Xero2 for beginners</Link>
          </li>
          <li>
            <Link to="intermediate">Xero1 for intermediate</Link>
          </li>
          <li>
            <Link to="advanced">Xero0 for advanced</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export { XeroDashboard };
