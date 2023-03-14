import { useState } from 'react';

function useRange(min = 0, max = 1) {
  const [value, setValue] = useState(min);

  const setNewValue = (newValue) => {
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  return [value, setNewValue];
}

export { useRange };
