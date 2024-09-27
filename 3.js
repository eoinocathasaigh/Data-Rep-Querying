//3 - File with functions to add, remove and display items in an array

let tasks = [];

//Adding a task to the array
let addTask = (newTask)=>{
    //Pushes new task onto the array
    tasks.push(newTask); 
    //Notifying the user the task has successfully been added
    console.log("New Task: " + newTask + " - succesfully added");
    //Printing out the new length of the array after insertion
    console.log("New length of array is: " +tasks.length);
}
//Adding Eoin to the array
addTask("Eoin");

//Listing all the tasks in the array
let listAllTasks = () => {
    console.log("Listing all tasks in array:");
    //Arrow function applies the same condition to each element in the array
    tasks.forEach((item)=>{ //For each item in tasks it prints
        console.log(item);
    })
}

//Calling arrow function to list all tasks
listAllTasks();

//Removing a task from the array
let deleteTask = (task) => {
    
}
