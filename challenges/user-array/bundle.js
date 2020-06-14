"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var users = [{
  name: 'Diego',
  age: 23,
  company: 'Rocketseat'
}, {
  name: 'Gabriel',
  age: 15,
  company: 'Rocketseat'
}, {
  name: 'Lucas',
  age: 30,
  company: 'Facebook'
} //   { name: 'Felipe', age: 19, company: 'Google' },
]; // Create a variable that contains user ages: [23, 15 ,30]

var userAges = users.map(function (_ref) {
  var age = _ref.age;
  return age;
});
console.log(userAges); //[23, 15 ,30]
// Create a variable that contains only users working on Rocketseat and with more than 18 years old: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var RocketseatEmployees = users.filter(function (_ref2) {
  var age = _ref2.age,
      company = _ref2.company;
  return age >= 18 && company === 'Rocketseat';
});
console.log(RocketseatEmployees); // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
// Create a variable that looks for a user working on google: undefined

var googleEmployes = users.find(function (_ref3) {
  var company = _ref3.company;
  return company === 'Google';
});
console.log(googleEmployes); // undefined
// Multiply all user ages by two , and filter the ones who have a maximum of 50 years old:

/*[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/

var usersWithDobleAge = users.map(function (user) {
  return _objectSpread(_objectSpread({}, user), {}, {
    age: user.age * 2
  });
});
console.log(usersWithDobleAge.filter(function (_ref4) {
  var age = _ref4.age;
  return age < 50;
}));
/*[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
] */
