/*
 * name - name of the salad
 * ingredients - array of items found in the salad
 */
const salads = [
  { name: 'Cobb', ingredients: ['lettuce', 'tomato', 'chicken', 'bacon', 'avocado', 'egg'] },
  { name: 'Caesar', ingredients: ['lettuce', 'croutons', 'cheese', 'egg', 'lemon'] },
  { name: 'Waldorf', ingredients: ['lettuce', 'mayo', 'apple', 'walnuts', 'celery'] },
  { name: 'Greek', ingredients: ['cucumber', 'tomato', 'onion', 'olives', 'cheese'] },
  { name: 'Macaroni', ingredients: ['macaroni', 'mayo', 'onion', 'carrots'] },
  { name: 'Potato', ingredients: ['potato', 'mayo', 'egg', 'carrots', 'cucumber'] }
];

// array of unknown plates to identify
const unknowns = [
  ['cheese', 'cucumber', 'onion', 'olives', 'tomato'],
  ['mayo', 'egg', 'potato', 'carrots', 'cucumber'],
  ['lettuce', 'avocado', 'tomato', 'chicken', 'egg', 'bacon'],
  ['mayo', 'apple', 'walnuts', 'beats', 'lettuce']
];
