function fixRounds(sets, time, reps) {
  const obj = { sets, time, reps };

  let result = '';
  if (obj.sets !== null) {
    result += `sets: ${obj.sets}`;
    if (obj.reps !== null) {
      result += ` / `;
    }
  }
  if (obj.time !== null) {
    result += `time: ${obj.time}`;
    if (obj.reps !== null) {
      result += ` / `;
    }
  }
  if (obj.reps !== null) {
    result += `reps: ${obj.reps}`;
  }
  return result.trim();
}

export { fixRounds };
