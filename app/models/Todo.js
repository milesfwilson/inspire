export default class Todo {
  constructor(data) {
    this.id = data._id
    this.description = data.description
    this.completed = data.completed
  }


  get Template() {


    if (this.completed) {

      return /*html*/`
       <div class="row">
  <div class="col-10">
       <p class="crossed" onclick = "app.todoController.toggleTodoStatus('${this.id}')" > ${this.description}</p > 
       </div>
       <div class="col-2">
           <button class="btn bg-transparent border-0 text-light" onclick="app.todoController.removeTodo('${this.id}')">x</button>
         </div>
     </div>`
    } else {

      return /*html*/`
      <div class="row">
 <div class="col-10">
      <p class="" onclick = "app.todoController.toggleTodoStatus('${this.id}')" > ${this.description}</p > 
      </div>
      <div class="col-2">
          <button class="btn bg-transparent border-0 text-light" onclick="app.todoController.removeTodo('${this.id}')">x</button>
        </div>
    </div>`
    }

  }

}