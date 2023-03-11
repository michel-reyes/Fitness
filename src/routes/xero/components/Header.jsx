function Header({ dayList, title, back }) {
  return (
    <div className="relative">
      <nav className="overflow-hidden fixed top-0 left-0 right-0 bg-white">
        <div className="flex items-center">
          {back}
          <h1 className="ml-3 text-lg font-semibold">{title}</h1>
        </div>
        {dayList}
      </nav>
    </div>
  );
}

export { Header };
