// Iteration 1
// 1. Create an array of strings
var myArray = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
var addTask = function (task) {
    myArray.push(task);
    console.log("Task " + task + " inserted in the list");
    console.log(myArray.length);
    return myArray.length;
};
// 3. Create a function to list all tasks, it must show in the console de task.
var listAllTasks = function () {
    myArray.forEach(function (task) {
        console.log(task);
    });
};
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
var deleteTask = function (task) {
    myArray.splice(myArray.indexOf(task), 1);
    console.log("Task " + task + " removed from the list");
    console.log(myArray.length);
    return myArray.length;
};
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
