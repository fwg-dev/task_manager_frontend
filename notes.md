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




