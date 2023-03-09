import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Block, Button, Navbar, NavbarBackLink } from 'konsta/react';

//------------------------------------------------------------------------------
// SAMPLE DATA

const totalDays = 28;
const days = [
  {
    day: 1,
    week: 1,
    isCompleted: false,
    workouts: [
      {
        title: '1: Knee Pushups',
        time: null,
        reps: 12,
        description:
          'Perform 12 Knee Pushups then transition to Bodyweight Squats.',
        image: './xero2-1_files/thumb_knee_pushups.gif',
      },
      {
        title: '2: Bodyweight Squats',
        time: null,
        reps: 12,
        description:
          'Perform 12 Bodyweight Squats then transition to Incline Thumbs Up Pushups from Knees.',
        image: './xero2-1_files/thumb_bodyweight_squats.gif',
      },
      {
        title: '3: Incline Thumbs Up Pushups from Knees',
        time: null,
        reps: 12,
        description:
          'Make sure your arms are placed out to your sides at approximately shoulder level and positioned close enough to your shoulders so that your elbows have a slight bend in them. Make sure you are pushing through the outer chest, scapular muscles, and rhomboids as well.Perform 12 Incline Thumbs Up Pushups from Knees then transition to Mountain Climbers.',
        image: './xero2-1_files/thumb_incline_thumbs_up_pushups_from_knees.gif',
      },
      {
        title: '4: Mountain Climbers',
        time: '30 seconds',
        reps: 0,
        description:
          'Perform 30 seconds of Mountain Climbers then head back to the beginning of the circuit to try to complete another round before time runs out.',
        image: './xero2-1_files/thumb_mountain_climbers.gif',
      },
    ],
  },
  {
    day: 3,
    week: 1,
    isCompleted: false,
    workouts: [
      {
        title: '1: Incline Pushups from Toes',
        time: null,
        reps: 12,
        description:
          'Perform 12 Incline Pushups from Toes then transition to Scissor Jax.',
        image: './xero2-3_files/thumb_incline_pushups_from_toes.gif',
      },
      {
        title: '2: Scissor Jax',
        time: null,
        reps: 24,
        description:
          'Perform 12 Scissor Jax then transition to Superman Lifts.',
        image: './xero2-3_files/thumb_scissor_jacks.gif',
      },
      {
        title: '3: Superman Lifts',
        time: null,
        reps: 12,
        description:
          'Perform 12 Superman Lifts then transition to Step Out Planks.',
        image: './xero2-3_files/thumb_superman_lifts.gif',
      },
      {
        title: '4: Step Out Planks',
        time: '30 seconds',
        reps: 0,
        description:
          'Perform 30 seconds of Step Out Planks then head back to the beginning of the circuit to try to complete another round before time runs out.',
        image: './xero2-3_files/thumb_step_out_planks.gif',
      },
    ],
  },
];

function getDay(day) {
  return days.find((d) => d.day === day);
}

function getDayList() {
  return Array.from({ length: totalDays }, (_, i) => i + 1);
}

//------------------------------------------------------------------------------

function Beginner() {
  const [day] = useState(1);
  const dayList = getDayList();
  const currentDay = getDay(day);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar
        title="My App"
        left={<NavbarBackLink text="Back" onClick={handleBack} />}
        subnavbar={
          <nav className="overflow-hidden">
            <ul style={{ display: 'flex' }}>
              {dayList.map((day, index) => (
                <li key={index} className="ml-2">
                  day {day}
                </li>
              ))}
            </ul>
          </nav>
        }
      />
      <Block>
        <Block className="mb-32">
          <h2>Summary</h2>
          <ul>
            {new Array(20).fill(0).map((_, index) => (
              <li className="flex p-3" key={index}>
                <p>{index} image</p>
                <p>description</p>
              </li>
            ))}
          </ul>
        </Block>
      </Block>
      <Block className="fixed bottom-0 right-0 left-0">
        <Button>Start</Button>
      </Block>
    </>
  );
}

export { Beginner };
