// arrays vs objects
// arrays = set of iterable, ordered elements (pieces of data)
const nums = [1, 2, 3, 4, 5];
const datum = [1, true, "string", [1,2]];
const pancakes = [
  "plain",
  "strawberry",
  "birthday cake"
];

const n1 = 1,
      n2 = 2,
      n3 = 3;

const numsArray = [1, 2, 3];

// objects = key/value maps (hashmaps), are not easily iteratable, and have NO ORDER
// rule of thumb: if you need label your data in your data set, objects might be useful.
const carStats = [4, 400, 760];
const carObj = {
  "wheelCount": 4,
  "horsepower": 400,
  "topSpeed": 760
};
carObj.topSpeed;
// vs
carStats[2];