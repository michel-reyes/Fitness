import { Outlet } from 'react-router-dom';
import { BeginnerContextProvider } from '@/context/BeginnerContext';

function Beginner() {
  return (
    <BeginnerContextProvider>
      <Outlet />
    </BeginnerContextProvider>
  );
}

export { Beginner };
