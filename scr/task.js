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
    // debugger
  }

  
  renderTaskCard(){
    // double check how your data is nested in the console so you can successfully access the attributes of each individual object
    // we write 'this' because we are in the context of this world 
    // we no longer need 'const taskMarkup = ' we just need to return the HTML
    // we no loner need 'attributes' e.g. <h3>${this.attributes.title}</h3> beause we are defining the attributes 
      console.log(this);
      // debugger;
      return `
      <div data-id=${this.id}>
      <h3>${this.title}</h3>
      <span>${this.deadline}</span>
      <span>${this.creator}</span>
      <span>${this.completed}</span>
      <span>${this.project.name}</span>
      <button data-id=${this.id}>edit</button>
    </div>
    <br><br>`;
}

}

//we are pushing each new instance of this into the new array 
Task.all =[]