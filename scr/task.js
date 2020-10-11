class Task{

  constructor (task, taskAttributes) {
    //map our attributes 
    
    this.id = task.id
    // debugger;
    this.title = taskAttributes.title
    this.deadline = taskAttributes.deadline
    this.completed = taskAttributes.completed
    this.project = taskAttributes.project 
    Task.all.push(this)
    debugger
  }
}
//we are pushing each new instance of this into the new array 
Task.all =[]