let data = [];
let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1; 
let year = today.getFullYear();
 if(day<10){
        day='0'+day
    } 
    if(month<10){
        month='0'+month
    } 

today = year+'-'+month+'-'+day;
document.getElementById("deadline").setAttribute("min", today);


function readAll (){
let taskList = document.getElementById('display')
let elements = "";
data.forEach((d, index) => {
    elements += `
    <div class="card">
    <div class="heading">
    <h5> Task:
    </h5>
    <p id="taskData">${d.userTask}</p>
    </div><br>
    <div class="Priorities">
    <h5>Priority:</h5>
    <p>${d.priority}</p>
    </div>
    <div class="deadline">
    <h5>Complete by:<h5>
    ${d.date}
    </div>
    <button class="btnDel" onclick="removeTask(this)">Delete</button>
    </div>
    `
})
taskList.innerHTML = elements;
document.getElementById('task').value = ""
document.getElementById('deadline').value = ""
}

function add(){
    let userTask = document.getElementById('task').value;
    let priority = document.getElementById('priority').value; 
    let date = document.getElementById('deadline').value;
    

    if (userTask == "" || userTask == " " || date == ""){
      alert('Please enter a task or date')
    } 
    else {
       let newObject = {userTask, priority, date};
       data.push(newObject);
       localStorage.setItem('items', JSON.stringify(newObject));
       readAll();
    }
}

function removeTask(delTask) {
 delTask.parentElement.remove();
 data.splice(delTask.parentElement.id, 1);
 localStorage.removeItem('items');

}
