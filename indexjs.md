const endPoint = "http://127.0.0.1:3000/api/v1/tasks";

document.addEventListener('DOMContentLoaded', () => {
//fetch and load tasks
//console.log('DOM fully loaded and parsed');

    getTasks()

    let createTaskForm = document.querySelector("#create-task-form")

    createTaskForm.addEventListener("submit", (e) => createFormHandler(e));

    //   let taskContainer = document.querySelector("#task-container")

    //   taskContainer.addEventListener("dblclick", (e) => handleTaskClick(e));

})

function getTasks() {
//making a get request
fetch(endPoint)
.then(response => response.json())
.then(tasks => {
tasks.data.forEach(task => {
// debugger

                let newTask = new Task(task.id, task.attributes.title, task.attributes.deadline, task.attributes.completed, task.attributes.project_id)
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
const project_id = parseInt(document.querySelector('#projects').value)

    postFetch(title, deadline, creator, project_id)

}

function postFetch(title, deadline, creator, project_id){
const bodyData = {
title,
deadline,
creator,
project_id
};
console.log(bodyData);

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
            console.log(task);

            const taskData = task.data
            // // render JSON response

            let newTask = new Task(taskData, taskData.attributes)

            document.querySelector('#task-container').innerHTML += newTask.renderTaskCard()

        })
            .catch(error => {
             console.log(error);
             alert("could not create task");
         })

}

// function handleTaskClick(e) {
// task.toggleTask(e)
// }

// function toggleTask(e) {
// const li = e.target
// li.contentEditable = true
// li.focus()
// li.classList.add('editable')
// }

// function deleteTask() {
// // debugger;
// let taskId = parseInt(event.target.dataset.id)
// console.log(taskId)

// fetch(`${endPoint}/tasks/${task.id}`, {
// method: "DELETE",
// .then(response => response.json());
// }
// console.log(this)
// this.location.reload()

// }

---

class Task{

constructor (id, title, deadline,completed, project_id) {
//map our attributes

    this.id = id;
    // debugger;
    this.title = title;
    this.deadline = deadline;
    this.completed = completed;
    this.project_id = project_id;
    // debugger
    // Task.all.push(this)

}

renderTaskCard(){
// double check how your data is nested in the console so you can successfully access the attributes of each individual object
// we write 'this' because we are in the context of this world
// we no longer need 'const taskMarkup = ' we just need to return the HTML
// we no loner need 'attributes' e.g. <h3>${this.attributes.title}</h3> beause we are defining the attributes 
      console.log(this);
      // debugger;
      return `
      <li data-id=${this.id}>
<span><b>Title: </b>${this.title}</span> 
      <span> <b>deadline: </b> ${this.deadline}</span>
<span><b>Creator: </b>${this.creator}</span>
      <span><b>Completed: </b>${this.completed}</span>
<span><b>Project Name: </b>${this.project.name}</span>
      <button data-id=${this.id}>Complete</button>
<button data-id=${this.id}>delete</button>

      <hr>
    </li>
      `;

}

}

//we are pushing each new instance of this into the new array
Task.all =[]

---

<button data-id=${this.id}>Complete</button>

---

sortedItems(){
return this.items().sort((a,b) => a.price - b.price )
}

---
