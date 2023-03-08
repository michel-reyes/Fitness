import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to={`contacts/1`}>Your name</Link>
          </li>
          <li>
            <Link to={`contacts/2`}>Your friend</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export { Root };
