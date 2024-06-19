const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();

  if (newTask) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    label.innerText = newTask;
    deleteButton.innerText = 'Delete';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    newTaskInput.value = '';

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    });

    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });
  }
});
