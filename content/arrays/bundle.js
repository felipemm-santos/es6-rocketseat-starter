"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // filter: Retorna os elementos que passam no teste

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // [4, 8]

var find4 = arr.find(function (item) {
  return item === 4;
});
var find2 = arr.find(function (item) {
  return item === 2;
});
console.log(find4); // 4

console.log(find2); // undefined
