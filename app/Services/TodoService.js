import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'miles/todos/'


class TodoService {

  constructor() {
    this.getTodos()
  }
  async getTodos() {

    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(t => new Todo(t))



    //TODO Handle this response from the server
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);

    if (todo.completed) {
      todo.completed = false
    } else {
      todo.completed = true
    }

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
    console.log(todo.completed)
    this.getTodos()
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = await api.delete(url + todoId)
    this.getTodos()

  }
}

const todoService = new TodoService();
export default todoService;