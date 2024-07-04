
function displayFn(){
let userTask = document.getElementById('task').value;
let priority = document.getElementById('priority').value 
let date = document.getElementById('deadline').value
   
let text = document.getElementById('display');
text.innerHTML = userTask + priority + date

}