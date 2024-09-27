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

//Listing all the tasks in the array
let listAllTasks = () => {
    console.log("Listing all tasks in array:");
    //Arrow function applies the same condition to each element in the array
    tasks.forEach((item)=>{ //For each item in tasks it prints
        console.log(item);
    })
}

//Removing a task from the array
let deleteTask = (value) => {
    //Finding the index of the chosen value
    let index = tasks.indexOf(value);
    //Splicing(removing) the item from the array
    tasks.splice(index, 1);
    //Notifying the user that the task is complete
    console.log("Item in the array has successfully been deleted!");
    //Printing the new length of the array after deletion
    console.log("New Length of array is: " + tasks.length);
}

//Calling all the functions
addTask("Eoin"); // - Adds Eoin to the array
listAllTasks(); // - Lists all elements in the array
deleteTask("Eoin"); // Removes Eoin from the array