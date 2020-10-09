 const endPoint = "http://127.0.0.1:3000/api/v1/tasks";
 
 document.addEventListener('DOMContentLoaded', () => {
    getTasks()

    const createTaskForm = document.querySelector("#create-task-form")

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
        //  debugger;
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        const taskMarkup = `
          <div data-id=${task.id}>
            <h3>${task.attributes.title}</h3>
            <h3>${task.attributes.deadline}</h3>
            <h3>${task.attributes.completed}</h3>
            <p>${task.attributes.user.name}</p>
            <button data-id=${task.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#task-container').innerHTML += taskMarkup
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
  const completedInput = document.querySelector('#input-completed').value
  postFetch(titleInput, deadlineInput, completedInput)
 }

 function postFetch(title, deadline, completed){
   console.log(title, deadline, completed)
   
 }


 