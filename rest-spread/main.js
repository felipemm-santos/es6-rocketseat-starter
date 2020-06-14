//REST

// OBJECTS
const user = {
  name: 'Felipe',
  age: 19,
  company: 'STUDIO EEA',
  address: {
    city: 'Barueri',
    state: 'SP',
  },
};

const { name, ...rest } = user;

console.log(name); // 'Felipe'
console.log(rest);
/*{    
    age: 19,
    company: 'STUDIO EEA',
    address: {
      city: 'Barueri',
      state: 'SP',
    },
  }; */

// ARRAYS
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a); // 1

console.log(b); // 2

console.log(c); // [3, 4]

// FUNCTIONS

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 15)); // 18

/************************************** */
// SPREAD

// ARRAYS

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// OBJECTS

const user1 = {
  name: 'Felipe',
  age: 19,
  company: 'STUDIO EEA',
};

const user2 = { ...user1, name: 'Gabriel' };

console.log(user2);
/*{
  name: 'Gabriel',
  age: 19,
  company: 'STUDIO EEA',
};
*/
