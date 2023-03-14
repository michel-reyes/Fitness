import {
  Footer,
  List,
  Header,
  HeaderBackButton,
  HeaderTitle,
  WorkoutDayPicker,
} from '@/components';
import { useBeginnerContext } from '@/routes/xero/';

const TITLE = 'Xero Beginner';

function Summary() {
  const {
    currentDay: { workouts },
    visibleDays,
    setSelectedDay,
    selectedDay,
    externalWeekDay,
  } = useBeginnerContext();

  return (
    <>
      <Header
        leftButton={<HeaderBackButton />}
        title={<HeaderTitle title={TITLE} />}
        subHeader={
          <WorkoutDayPicker
            visibleDays={visibleDays}
            setSelectedDay={setSelectedDay}
            selectedDay={selectedDay}
            externalWeekDay={externalWeekDay}
          />
        }
      />

      <List workouts={workouts} />
      <Footer />
    </>
  );
}

export { Summary };
