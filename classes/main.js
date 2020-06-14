class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor(){
    // super: Chama constructor da classe pai
    super()
    this.user = 'Felipe'
  }
  showUser(){
    console.log(this.user);    
  }
}

const MyList = new TodoList();

document.getElementById('newtodo').onclick = () => MyList.add('Novo todo');

MyList.showUser()