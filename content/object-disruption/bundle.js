"use strict";

var user = {
  name: 'Felipe',
  age: 19,
  address: {
    city: 'Barueri',
    state: 'SP'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;
console.log(name);
console.log(age);
console.log(city);

function showName(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name);
  console.log(age);
}

showName(user);
