import { fixRounds } from '@/utils';

function List({ workouts }) {
  return (
    <div className="my-32 mt-40 px-6">
      <h2 className="my-4 text-xl">Summary</h2>

      <ul className="list-none p-0">
        {workouts.map(({ title, image, sets, time, reps }) => {
          const rounds = fixRounds(sets, time, reps);

          return (
            <li className="flex p-3 pl-0 items-center" key={title}>
              <div className="mr-4 border-slate-800 border-2 max-w-sm rounded-md">
                <img
                  src={`./assets/${image}`}
                  alt={title}
                  className="max-w-none"
                />
              </div>
              <p className="flex flex-col">
                {title}
                <span className="text-slate-500 text-sm lowercase">
                  {rounds}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { List };
