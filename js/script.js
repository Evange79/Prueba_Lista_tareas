
const form = document.querySelector ('.form')
form.addEventListener('submit' , (e) => {
    e.preventDefault();
 const taskInput = document.querySelector('#taskInput');
})

const title = taskInput.value.trim();

if (title.length >= 3) {
    console.log(title);
} else{
    alert("La tarea tiene que tener 3 caracter o más");
}

const error = document.querySelector(".error");
error.textContent = "La tarea tiene que tener 3 caracter o más";

setTimeout(() => {
    error.textContent = ""
},2000);

let erroresValidacion =  false;



if (!erroresValidacion) {
    console.log(title); 
    const task = {
        id : Date.now(),
    } ;  
}





