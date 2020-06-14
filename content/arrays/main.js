const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map((item, index) => {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce((total, next) => {
  return total + next;
});

console.log(sum);

// filter: Retorna os elementos que passam no teste
const filter = arr.filter(function (item) {
  return item % 2 === 0;
});

console.log(filter); // [4, 8]

const find4 = arr.find(function (item) {
  return item === 4;
});

const find2 = arr.find(function (item) {
  return item === 2;
});

console.log(find4); // 4

console.log(find2); // undefined
