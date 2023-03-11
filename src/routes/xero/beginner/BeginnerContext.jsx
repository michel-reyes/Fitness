import { createContext, useContext, useState } from 'react';
import { days } from './data';
const externalWeekDay = 1;

// ------------------ Context ------------------

const BeginnerContext = createContext();

// ------------------ Provider ------------------
function BeginnerContextProvider({ children }) {
  const [weekDay, setWeekDay] = useState(externalWeekDay);
  const visibleDays = days.slice(externalWeekDay - 1, externalWeekDay + 5);
  const currentWorkout = visibleDays.find((day) => day.fixedDay === weekDay);

  return (
    <BeginnerContext.Provider
      value={{ visibleDays, setWeekDay, currentWorkout, weekDay }}
    >
      {children}
    </BeginnerContext.Provider>
  );
}

// ------------------ Hook ------------------
const useBeginnerContext = () => {
  const context = useContext(BeginnerContext);

  if (context === undefined) {
    throw new Error(
      'useBeginnerContext must be used within a BeginnerContextProvider',
    );
  }
  return context;
};

export { BeginnerContextProvider, useBeginnerContext };
