let data = [];

// function displayFn(){
// let userTask = document.getElementById('task').value;
// let priority = document.getElementById('priority').value 
// let date = document.getElementById('deadline').value
   
// let text = document.getElementById('display');
// text.innerHTML = userTask + priority + date;

// }
function readAll (){
let taskList = document.getElementById('display')
let elements = "";
data.forEach((d, index) => {
    elements += `
    <form id="form">
    <div class="card">
    <div class="heading">
    <h5> Task:
    </h5>
    <p>${d.userTask}</p>
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
    <button class="btnEdit" onclick="changeTask(this)" id="edt">Edit</button>

    </div>
    </form>`
})
taskList.innerHTML = elements;
document.getElementById('task').value = ""
document.getElementById('deadline').value = ""
}

function add(){
    let userTask = document.getElementById('task').value;
    let priority = document.getElementById('priority').value 
    let date = document.getElementById('deadline').value

    if (userTask !== " "){
      let newObject = {userTask, priority, date};
      data.push(newObject);
      readAll();

    } else {
        alert('No')
    }
}

function removeTask(delTask) {
 delTask.parentElement.remove();
 data.splice(delTask.parentElement.id, 1);
}


const element = document.getElementById('edt')
element.addEventListener("click", changeTask)

// function editTask (edit){
// let selectedTask = edit.parentElement;
// let userTask = document.getElementById('task').value;
// userTask.value = selectedTask.children[0].innerHTML;


function changeTask(edit){
document.getElementById('form').preventDefault()
userTask.value = edit.innerHTML;
// edit.parentElement.parentElement.remove();
// remove() 


}
