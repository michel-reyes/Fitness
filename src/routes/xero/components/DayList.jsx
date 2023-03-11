import { useBeginnerContext } from '../beginner';

function DayList() {
  const { visibleDays, setWeekDay, weekDay } = useBeginnerContext();

  const handleChangeDay = ({ fixedDay, day, week }) => {
    console.log(fixedDay, day, week);
    setWeekDay(fixedDay);
  };

  return (
    <ul className="flex justify-evenly">
      {visibleDays.map(({ fixedDay, day, week }, index) => {
        const isToday = weekDay === fixedDay;
        console.log({ isToday, weekDay, fixedDay });
        return (
          <li key={index} className="ml-2">
            <button
              className="bg-transparent flex flex-col"
              onClick={() => handleChangeDay({ fixedDay, day, week })}
            >
              <span
                className={`w-2 h-2 border-4  bg-slate-800 inline-block rounded-full ${
                  isToday ? 'border-indigo-600' : 'border-transparent'
                }`}
              ></span>
              {fixedDay}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export { DayList };
