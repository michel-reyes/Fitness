function WorkoutDayPicker({
  visibleDays,
  setSelectedDay,
  selectedDay,
  externalWeekDay,
}) {
  const handleChangeDay = ({ fixedDay }) => {
    setSelectedDay(fixedDay);
  };

  return (
    <ul className="flex justify-evenly px-6">
      {visibleDays.map(({ fixedDay, day, week, isCompleted }, index) => {
        const isSelectedDay = selectedDay === fixedDay;
        const isToday = externalWeekDay === fixedDay;
        const isTodayClass = isToday && 'border-orange-600';
        const isCompletedClass = isCompleted
          ? isToday
            ? 'bg-orange-600'
            : 'bg-slate-800'
          : 'bg-transparent';

        return (
          <li
            key={index}
            className={`mx-2 p-2 pb-0 flex border-b-2 rounded-sm ${
              isSelectedDay ? 'border-slate-800' : 'border-transparent'
            }`}
          >
            <button
              className="bg-transparent flex flex-col items-center p-2"
              onClick={() => handleChangeDay({ fixedDay, day, week })}
            >
              <span
                className={`w-3 h-3 border-2  border-slate-800 mb-1 inline-block rounded-full ${isCompletedClass} ${isTodayClass}`}
              ></span>
              {fixedDay}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export { WorkoutDayPicker };
