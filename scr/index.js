 const endPoint = "http://127.0.0.1:3000/api/v1/tasks";
 
 document.addEventListener('DOMContentLoaded', () => {
   //fetch and load tasks
    getTasks()
    
    let createTaskForm = document.querySelector("#create-task-form")
    
    createTaskForm.addEventListener("submit", (e) => createFormHandler(e));
   })

   function getTasks(){
     //making a get request
    fetch(endPoint)
    .then(response => response.json())
    .then(tasks =>{
      //we should be getting an array of tasks
      // console.log(tasks);
       // remember our JSON data is a bit nested due to our serializer
       tasks.data.forEach(task => {
        //  debugger

        let newTask = new Task(task, task.attributes)
        document.querySelector('#task-container').innerHTML += newTask.renderTaskCard()
        //how we would instanciate a new task  
        // render(task)
    })

  })
}


 function createFormHandler(e) {
   e.preventDefault()
   //prevents page from refreshing when submit event happens
   //where I am grabbing all the values for the input 
  // debugger;
  const titleInput = document.querySelector('#input-title').value
  const deadlineInput = document.querySelector('#input-deadline').value
  const creatorInput = document.querySelector('#input-creator').value
  const completedInput = document.querySelector('#input-completed').checked
  const projectId = parseInt(document.querySelector('#projects').value)
  postFetch(titleInput, deadlineInput, creatorInput, completedInput, projectId)
 }

 function postFetch(title, deadline, creator, completed, project_id){
   const bodyData = {title, deadline, creator, completed, project_id}
   console.log(bodyData);
   //key-value pair const dara = {username: 'example'};
  //  let bodyData = {title, deadline, creator, completed, project_id}
   fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
    
  })
  .then(response => response.json())
  .then(task => {
      console.log(task);
  
    const taskData = task.data
     // render JSON response
    // 
    
    let newTask = new Task(taskData, taskData.attributes)

   document.querySelector('#task-container').innerHTML += newTask.renderTaskCard()

  })
   .catch(error => {
     console.log(error);
     alert("could not add task");
   })
  
   
 }
