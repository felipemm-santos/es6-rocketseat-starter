class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  isAdmin() {
    return this.admin == true;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}

const User1 = new User('user1@teste.com', 'senha123');

const Adm1 = new Admin('adm1@teste.com', 'senha123');

console.log(User1); // false
console.log(Adm1); // true
