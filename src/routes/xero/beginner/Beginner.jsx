import { useState } from 'react';
import { days } from './data';
import {
  DayList,
  Footer,
  Header,
  HeaderBackButton,
  WorkoutSummary,
} from '../components';
import { BeginnerContextProvider } from './BeginnerContext';

//------------------------------------------------------------------------------

const TITLE = 'Xero beginner';

// function getDay(day) {
//   return days.find((d) => d.day === day);
// }

// function getWorkoutByDay(day) {
//   return getDay(day).workouts;
// }

// function getDayList() {
//   return Array.from({ length: totalDays }, (_, i) => i + 1);
// }

//------------------------------------------------------------------------------

function Beginner() {
  // const [day, setDay] = useState(1);
  // const dayList = getDayList();
  // // const currentDay = getDay(day);

  // const workouts = getWorkoutByDay(day);

  // const handleChangeDay = (day) => {
  //   console.log(day);
  //   setDay(day);
  // };

  return (
    <BeginnerContextProvider>
      <Header title={TITLE} back={<HeaderBackButton />} dayList={<DayList />} />
      <WorkoutSummary />
      <Footer />
    </BeginnerContextProvider>
  );
}

export { Beginner };
