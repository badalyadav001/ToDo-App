const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add Task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  // Task Text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Mark as Complete
  taskSpan.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
  });

  // Append task and delete button to the list item
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteButton);

  // Append task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
});