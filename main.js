// import all functions in one variable
import * as fun from './functions';

// With export default and normal exports
// import add, {sub} from './functions'

// Without export default
// import { soma as add, sub} from './functions';

// With export default
// import add from './soma';

console.log(fun);
console.log(fun.mult(1, 2));
console.log(fun.soma(1, 2));
console.log(fun.sub(1, 2));

// console.log(add(1, 2));

// console.log(sub(1, 2));
