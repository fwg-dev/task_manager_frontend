The end point that we are fetching from:

// http://localhost:3000/api/v1/tasks

---

In debugger:

// we can call Task- which will return:

\*\* task
{id: "3", type: "task", attributes: {…}}

\*\* task.id
"3"

\*\* task.attributes
{title: "Group Meeting", deadline: "2020-10-21", completed: false, user_id: 3, user: {…}}

\*\* task.attributes.title
"Group Meeting"

\*\* task.attributes.user.name
"Faith"

---

we use dataset to put data on HTML and grab that data

---

Use fetch() to POST JSON-encoded data.

const data = { username: 'example' };

fetch('https://example.com/profile', {
method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
console.log('Success:', data);
})
.catch((error) => {
console.error('Error:', error);
});

---

body: JSON.stringify(bodyData)

can also be written down as:

body: JSON.stringify({
title: title,
deadline: deadline,
completed: completed
user_id: user_id
})

// this sends that data to the api
//stringify that JSON data in order to save it to

---

## How the App is working so far

- onload, we are fetching the task data - we can confirm this with our local host website
- we can create a new task- we get a post request when we 'click' submit, and we can preview the JSON data on console

- If we have an error on our frontend we want to implement

- when we fetch and load the tasks with getTasks() - we are making a GET request

- We manipulate the DOM with the taskMarkup with HTML code then append the innerHTMl in the 'task-container'

- We do the same thing in the POST request
- Instead of repeating the 'taskMarkup' in the GET and POST DOM manipulation, we can refactor and render
- We do this by creating a render function which will take up the taskMarkup code, then we can call render(task) where taskMarkup was

## How to refactor using ooJS

1.  [x] IMPORTANT: Create a separate branch for your OOJS Refactor
2.  [x] Create a JS Class (ex: class Syllabus)
3.  [x] Link to the new JS file in your index.html (ex: <script type="text/javascript" src="src/syllabus.js"></script>)
4.  [x] Create a constructor that pushes all instances of this into an empty array (See part 4 notes for example)
5.  [x] Refactor render functionality by creating a render function in your JS class
6.  [] For future use, create a static method in your JS class that finds an object based on it's id. (In the PART 4 notes we see how this would be useful for 'update/PATCH' functionality)

---

function getTasks(){
//making a get request
fetch(endPoint)
.then(response => response.json())
.then(tasks =>{
//we should be getting an array of tasks
// console.log(tasks);
// remember our JSON data is a bit nested due to our serializer
tasks.data.forEach(task => {
// debugger

        let newTask = new Task(task.id, task.attributes.title, task.attributes.deadline,task.attributes.completed, task.attributes.project)
        document.querySelector('#task-container').innerHTML += newTask.renderTaskCard()
        //how we would instanciate a new task
        // render(task)
    })

})

---

<button class="delete-bttn" data-id=${this.id} onclick="deleteTask()">Delete Task</button>

---

// function toggleTask(e) {
// const li = e.target
// li.contentEditable = true
// li.focus()
// li.classList.add('editable')
// }

// function updateTask(title, deadline, creator, project_id) {
// const bodyData = {
// title,
// deadline,
// creator,
// project_id
// };

// return fetch(`${this.endPoint}/id`{
// method: 'PATCH',
// headers: {
// 'Content-Type': 'application/json',
// },
// body: JSON.stringify({ task }),
// })

// .then(res => res.json())
// }
// function deleteTask() {
// // debugger;
// // let taskId = parseInt(event.target.dataset.id)
// // console.log(taskId)

// fetch(`${endPoint}/tasks/${task.id}`, {
// method: "DELETE",
// .then(response => response.json());
// }
// console.log(this)
// this.location.reload()

// }
