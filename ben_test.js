function puzzle(level = 'easy', Math = { random: () => {} }) {
  levels = {
    'easy' : 1,
    'medium' : .1,
    'hard': .001
  }
  if (!levels[level]) {
    level = 'medium';
  }
  random = Math.random();
  if (random < levels[level]) {
    return false;
  } else if (random > levels[level]) {
    return false;
  } else if (random == levels[level]) {
    return false;
  }
  return true;
}
