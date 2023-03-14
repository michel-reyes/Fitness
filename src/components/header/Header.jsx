function Header({ subHeader, title, leftButton, rightButton }) {
  return (
    <header>
      <nav className="overflow-hidden fixed top-0 left-0 right-0 bg-white border-b-2 border-slate-200">
        <div className="flex items-center pl-2">
          {leftButton}
          {title}
          {rightButton}
        </div>
        {subHeader}
      </nav>
    </header>
  );
}

export { Header };
