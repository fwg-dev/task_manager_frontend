The end point that we are fetching from: 

// http://localhost:3000/api/v1/tasks

---------------
In debugger: 

// we can call Task- which will return: 

** task
   {id: "3", type: "task", attributes: {…}}

** task.id
  "3"

** task.attributes
   {title: "Group Meeting", deadline: "2020-10-21", completed: false, user_id: 3, user: {…}}

** task.attributes.title
   "Group Meeting"

** task.attributes.user.name
   "Faith"

---------------------
we use dataset to put data on HTML and grab that data 

-----------

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

--------------------

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

------------------------------
## How the App is working so far 

* onload, we are fetching the task data - we can confirm this with our local host website 
* we can create a new task- we get a post request when we 'click' submit, and we can preview the JSON data on console 

* If we have an error on our frontend we want to implement 

*  when we fetch and load the tasks with  getTasks() - we are making a GET  request 

* We manipulate the DOM with the taskMarkup with HTML code then append the innerHTMl in the 'task-container' 

* We do the same thing in the POST request 
* Instead of repeating the 'taskMarkup' in the GET and POST DOM manipulation, we can refactor and render 
* We do this by creating a render function which will take up the taskMarkup code, then we can call render(task) where taskMarkup was 

## How to refactor using ooJS







