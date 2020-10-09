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




