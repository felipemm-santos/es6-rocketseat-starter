const users = [
  { name: 'Diego', age: 23, company: 'Rocketseat' },
  { name: 'Gabriel', age: 15, company: 'Rocketseat' },
  { name: 'Lucas', age: 30, company: 'Facebook' },
  //   { name: 'Felipe', age: 19, company: 'Google' },
];

// Create a variable that contains user ages: [23, 15 ,30]

const userAges = users.map(({ age }) => age);

console.log(userAges); //[23, 15 ,30]

// Create a variable that contains only users working on Rocketseat and with more than 18 years old: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const RocketseatEmployees = users.filter(
  ({ age, company }) => age >= 18 && company === 'Rocketseat'
);

console.log(RocketseatEmployees); // [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

// Create a variable that looks for a user working on google: undefined

const googleEmployes = users.find(({ company }) => company === 'Google');

console.log(googleEmployes); // undefined

// Multiply all user ages by two , and filter the ones who have a maximum of 50 years old:
/*[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/

const usersWithDobleAge = users.map((user) => ({...user, age: user.age * 2}) );

console.log(usersWithDobleAge.filter(({age}) => age < 50));
/*[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
] */

