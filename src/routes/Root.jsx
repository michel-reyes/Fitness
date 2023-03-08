import { Link } from 'react-router-dom';

function Root() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to={`xero`}>Xero</Link>
          </li>
          <li>
            <Link to={`hitt`}>HIIT</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export { Root };
