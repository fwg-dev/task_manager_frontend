class Task{

  constructor (id, title, deadline, creator, completed, project) {
    //map our attributes 
    
     this.id = id;
    // debugger;
    this.title = title;
    this.deadline = deadline;
    this.creator = creator;
    this.completed = completed;
    this.project = project;
    // debugger
    Task.all.push(this)
  }

  
  static findById(id) {
    return this.all.find(task => task.id === id);
  }
  // not called on instances, but on the method itself 
  // 


  
  renderTaskCard(){
    // double check how your data is nested in the console so you can successfully access the attributes of each individual object
    // we write 'this' because we are in the context of this world 
    // we no longer need 'const taskMarkup = ' we just need to return the HTML
    // we no loner need 'attributes' e.g. <h3>${this.attributes.title}</h3> beause we are defining the attributes 
      //console.log(this);
      // debugger;
      return `
      <li data-id=${this.id}>
        <span><b>Title: </b>${this.title}</span> 
        <span> <b>deadline: </b> ${this.deadline}</span>
        <span><b>Creator: </b>${this.creator}</span>
        <span><b>Completed: </b>${this.completed}</span>
        <span><b>Project Name: </b>${this.project.name}</span>
        <i class="fas fa-trash" data-id=${this.id}>
      
        <hr>
      </li>

      `;
}

}

//we are pushing each new instance of this into the new array 
Task.all =[]