import './style.scss';

interface TaskTemplate {
  title: string;
  priority: string;
  date: Date;
  description: string;
}
const addTask = () => {
  console.log('tsk');
};

export function createHeader() {
  const taskCandidate = { title: '', priority: '', date: new Date() };
  const header = document.createElement('header');
  const inputContainer = document.createElement('div');
  const title = document.createElement('input');
  const priority = document.createElement('input');
  const date = document.createElement('input');
  const description = document.createElement('input');
  const addBtn = document.createElement('button');
  const container = document.getElementById('container');
  inputContainer.appendChild(title);
  inputContainer.innerHTML =
    ' <form><label for="title">Title:</label>' +
    '<input type="text" id="title" placeholder="Enter task title">' +
    '<br>' +
    '<label for="priority">Priority:</label>' +
    '<select id="priority">' +
    '<option value="High">High</option>' +
    '<option value="Medium">Medium</option>' +
    '<option value="Low">Low</option>' +
    '</select>' +
    '<br>' +
    '<label for="date">Due Date:</label>' +
    '<input type="date" id="date">' +
    '<br>' +
    '<label for="description">Description:</label>' +
    '<textarea id="description" placeholder="Enter task description"></textarea>' +
    '<br>' +
    '</form>';
  const button = document.createElement('button');
  button.innerHTML = 'Create Task';
  button.id = 'create-task';
  header.appendChild(inputContainer);
  container?.appendChild(inputContainer);
  container?.appendChild(button);
}

