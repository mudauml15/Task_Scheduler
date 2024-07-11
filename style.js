let data = [];
let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1; 
let year = today.getFullYear();
 if(day<10){
        day = '0' + day
    } 
    if(month<10){
        month = '0' + month
    } 

today = year+'-'+month+'-'+day;
document.getElementById("deadline").setAttribute("min", today);


function readAll (){
let taskList = document.getElementById('display')
let elements = "";
data.forEach((d, index) => {
    elements += `
    <div class="card" id="card">
    <div class="heading">
    <h5> Task:
    </h5>
    <p id="taskData">${d.userTask}</p>
    </div><br>
    <div class="Priorities">
    <h5>Priority:</h5>
    <p id="prior">${d.priority}</p>
    </div>
    <div class="deadline">
    <h5>Complete by:<h5>
    ${d.date}
    </div>
    <h5 class="actionHeading"> Action: </h5>
    <button class="btnDel" onclick="removeTask(this)">Delete</button>
    <h5 class="markHeading"> Mark Complete:</h5>
    <input type="checkbox" id="completed" onclick="completedTask(this)">
    </div>
    `
 })

taskList.innerHTML = elements;
document.getElementById('task').value = ""
document.getElementById('deadline').value = ""
}

function add(){
    let userTask = document.getElementById('task').value.trim();
    let priority = document.getElementById('priority').value; 
    let date = document.getElementById('deadline').value;
    let isDuplicate = data.some(task => task.userTask === userTask && task.date === date);

    
    if (userTask == "" || date == " "){
      alert('Please enter a task or date')
    } 
    else if (isDuplicate){
        alert('This task already exists. Please enter a different task or date.');
    }
    else {
       let newObject = {userTask, priority, date};
       data.push(newObject);
       localStorage.setItem('items', JSON.stringify(data));
       readAll();
    }
    
}

function removeTask(delTask) {
 delTask.parentElement.remove();
 data.splice(delTask.parentElement.id, 1);
 localStorage.removeItem('items');

}

function completedTask(checkbox) {
    let card = checkbox.parentElement;
    if (checkbox.checked) {
        card.style.backgroundColor = "rgb(26, 233, 26)";
    } else {
        card.style.backgroundColor = "";
    }
}


