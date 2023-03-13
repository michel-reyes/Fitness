function Header({ dayList, title, back }) {
  return (
    <header>
      <nav className="overflow-hidden fixed top-0 left-0 right-0 bg-white border-b-2 border-slate-200">
        <div className="flex items-center pl-2">
          {back}
          <h1 className="ml-3 text-xl font-bold">{title}</h1>
        </div>
        {dayList}
      </nav>
    </header>
  );
}

export { Header };
