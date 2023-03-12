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

//------------------------------------------------------------------------------

function Beginner() {
  return (
    <BeginnerContextProvider>
      <Header title={TITLE} back={<HeaderBackButton />} dayList={<DayList />} />
      <WorkoutSummary />
      <Footer />
    </BeginnerContextProvider>
  );
}

export { Beginner };
