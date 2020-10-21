const endPoint = "http://127.0.0.1:3000/api/v1/tasks";

document.addEventListener('DOMContentLoaded', () => {
    //fetch and load tasks
    //console.log('DOM fully loaded and parsed');

    getTasks()

    const createTaskForm = document.querySelector("#create-task-form")
    createTaskForm.addEventListener("submit", (e) => createFormHandler(e));


    let taskContainer = document.querySelector("#task-container")
    //taskContainer.addEventListener("dblclick", (e) => handleTaskClick(e));
    taskContainer.addEventListener("click", (e) => deleteTaskList(e));
     
    const body = document.querySelector("body")    
    body.addEventListener("blur", (e) => updateTaskForm(e), true);

    // const deleteButton = document.querySelector(".delete-btn")
    // deleteButton.addEventListener("click", (e) => deleteTaskList(e));
})

function getTasks() {
    //making a get request
    fetch(endPoint)
        .then(response => response.json())
        .then(tasks => {
            tasks.data.forEach(task => {
                //  debugger

                let newTask = new Task(task.id, task.attributes.title, task.attributes.deadline, task.attributes.creator, task.attributes.completed, task.attributes.project)
                // let newTask = new Task(task, task.attributes)
                document.querySelector('#task-container').innerHTML += newTask.renderTaskCard()
            })
        })
}


function createFormHandler(e) {
    e.preventDefault()
    //prevents page from refreshing when submit event happens
    //where I am grabbing all the values for the input 
    // debugger;
    const title = document.querySelector('#input-title').value
    const deadline = document.querySelector('#input-deadline').value
    const creator = document.querySelector('#input-creator').value
    // const completedInput = document.querySelector('#input-completed').checked
    const project = parseInt(document.querySelector('#projects').value)

    postFetch(title, deadline, creator, project)
    
}

function postFetch(title, deadline, creator, project_id) {
    const bodyData = {
        title,
        deadline,
        creator,
        project_id
    };

    // console.log(bodyData);

    fetch(endPoint, {
            // POST request
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyData)

        })
        .then(response => response.json())
        .then(task => {
            // console.log(task);

            const taskData = task.data
            // // // render JSON response
    //   debugger;
            let newTask = new Task(taskData.id, taskData.attributes.title, taskData.attributes.deadline, taskData.attributes.creator, taskData.attributes.completed, taskData.attributes.project)
            // console.log(newTask.renderTaskCard());
            document.querySelector('#task-container').innerHTML += newTask.renderTaskCard()

        })
        .catch(error => {
            console.log(error);
            alert("could not create task");
        })
}

function handleTaskClick(e) {
    //console.log(e.target)
    //the target it the li that was clicked on, 
    const li = e.target
    li.contentEditable = true
    li.focus()
    li.classList.add('editable')
      
}
// we want to make the content we recive form the new update and PATCH to the server 

function updateTaskForm(e){
    
    const title = document.querySelector('#input-title').value
    const deadline = document.querySelector('#input-deadline').value
    const creator = document.querySelector('#input-creator').value
    const completed = document.querySelector('#input-completed').value
    const project = parseInt(document.querySelector('#projects').value)

     const patchTask = {title, deadline, creator, completed, project};
    //console.log(taskData);
    //console.log(e.target);

 //this code above removes the class editable when you clickout 
    const li = e.target
    li.contentEditable = false
    li.classList.remove('editable')
    const newValue = li.innerHTML
    // const id = parseInt(e.target.dataset.id);
    const id = li.dataset.id
    // console.log(id)

  

    // patchTask(title, deadline, creator, project)
}

function patchTask(title, deadline, creator, project_id) {
    const taskData = {
        title,
        deadline,
        creator,
        project_id
    };

    // console.log(bodyData);
   
    return fetch(`${endPoint}/${taskData.id}`, {
            // POST request
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskData),

        })
        .then(response => response.json())
        // .then(task => {
        //     console.log('update successful');
        //   })
          
}

function deleteTaskList(e){
     e.preventDefault()
    //delete a single task 
    //upon deleting I want my page to refresh with the new list 
   
    //  let taskId = parseInt(e.target.dataset.id)
       //console.log(taskId)
       let taskId = e.target.parentElement.dataset.id
    //    console.log(taskId)
       //taskId.removeChild

    // debugger;
       

        fetch(`${endPoint}/${taskId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
              },
        })   
        .then(e.target.parentElement.remove())  
            
            .catch(error => {
                console.log(error);
                alert("could not delete task");
            })
            
}
