import { Link } from 'react-router-dom';

function Footer({ selectedDay }) {
  return (
    <footer className="fixed flex py-4 mb-3 bottom-0 right-0 left-0 justify-center">
      <Link
        className="px-12 py-3 font-semibold text-sm bg-slate-900 text-white rounded-full"
        to={`/xero/beginner/${selectedDay}`}
      >
        Start
      </Link>
    </footer>
  );
}

export { Footer };
