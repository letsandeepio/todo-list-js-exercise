const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
};

// prints out the provided task's details
function logTaskState(task) {
  console.log(
    `${task.title} has${task.complete ? " " : " not "}been completed`
  );
}

// marks the provided task as completed
function completeTask(task) {
  task.complete = true;
}

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
