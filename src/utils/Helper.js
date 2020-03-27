function shuffle(originalArray) {
  const array = originalArray.slice(0);

  for (let i = 0; i < originalArray.length - 1; i += 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const tmp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = tmp;
  }

  return array;
}

export const initializeDeck = () => {
  let id = 0;
  const cards = [
    'adjust', 'allergies', 'angry', 'anchor', 'archway', 'atom', 'asterisk', 'bowling-ball',
  ].reduce((acc, icon) => {
    acc.push({
      id: id++,
      icon,
    });
    acc.push({
      id: id++,
      icon,
    });
    return acc;
  }, []);

  return shuffle(cards);
};


export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getValue = (values) => {
  const rand = getRandomInt(0, values.length - 1);

  return values[rand];
};
