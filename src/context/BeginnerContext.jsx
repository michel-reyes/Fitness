import { createContext, useContext, useState } from 'react';
import { days } from '@/data/xero_beginner';
const externalWeekDay = 1;

// ------------------ Context ------------------

const BeginnerContext = createContext();

// ------------------ Provider ------------------
function BeginnerContextProvider({ children }) {
  const [selectedDay, setSelectedDay] = useState(externalWeekDay);
  const visibleDays = days.slice(externalWeekDay - 1, externalWeekDay + 5);
  const currentDay = visibleDays.find((day) => day.fixedDay === selectedDay);

  return (
    <BeginnerContext.Provider
      value={{
        visibleDays,
        currentDay,
        selectedDay,
        setSelectedDay,
        externalWeekDay,
      }}
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
      'useBeginnerContext must be used within a BeginnerContextProvider'
    );
  }
  return context;
};

export { BeginnerContextProvider, useBeginnerContext };
