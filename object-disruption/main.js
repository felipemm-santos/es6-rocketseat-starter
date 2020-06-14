const user = {
    name: 'Felipe',
    age: 19,
    address: {
        city: 'Barueri',
        state: 'SP',
    }
}

const { name, age, address: {city}} = user

console.log(name);
console.log(age);
console.log(city);


function showName ({ name, age }) {
    console.log(name);        
    console.log(age);        
}

showName(user)