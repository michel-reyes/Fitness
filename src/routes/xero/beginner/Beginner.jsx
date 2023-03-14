import { Outlet } from 'react-router-dom';
import { BeginnerContextProvider } from './BeginnerContext';

function Beginner() {
  return (
    <BeginnerContextProvider>
      <Outlet />
    </BeginnerContextProvider>
  );
}

export { Beginner };
