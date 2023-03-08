import { useParams } from 'react-router-dom';

function Child() {
  const { id } = useParams();
  return <div>Child {id}</div>;
}

export { Child };
