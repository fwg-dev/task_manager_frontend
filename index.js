 const endPoint = "http://127.0.0.1:3000/api/v1/tasks";
 
 document.addEventListener('DOMContentLoaded', () => {
    getTasks()
   })

   function getTasks(){
     //making a get request
    fetch(endPoint)
    .then(response => response.json())
    .then(tasks =>{
      //we should be getting an array of tasks
      console.log(tasks);

       // remember our JSON data is a bit nested due to our serializer
       tasks.data.forEach(task => {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        const TaskMarkup = `
          <div data-id=${task.id}>
            <h3>${task.attributes.title}</h3>
            <p>${task.attributes.user.name}</p>
            <button data-id=${task.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#syllabus-container').innerHTML += syllabusMarkup
      })
    })

   })
 

 }

 