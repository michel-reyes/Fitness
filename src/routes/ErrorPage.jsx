import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export { ErrorPage };
