import { createHeader } from './components/Header/';
import { TaskSearch } from './components/TaskSearch';
import { TaskList } from './components/TasksList';

interface Task {
  title: string;
  priority: string;
  dueDate: Date;
  description: string;
  isDone: boolean;
}

const tasks = [
  {
    title: 'test',
    priority: 'High',
    dueDate: new Date(),
    description: 'Test task',
    isDone: false,
  },
];

const addTask = () => {
  const title = (<HTMLInputElement>document.getElementById('title')).value;
  const priority = (<HTMLInputElement>document.getElementById('priority'))
    .value;
  const dueDate = new Date(
    (<HTMLInputElement>document.getElementById('date')).value
  );
  const description = (<HTMLInputElement>document.getElementById('description'))
    .value;
  tasks.push({ title, priority, dueDate, description, isDone: false });
  console.log(title, priority, dueDate, description);
  TaskList(tasks);
};

const searchTask = (event:any) => {
    console.log('event')
}
createHeader();
const create = document.getElementById('create-task');
const search = document.getElementById('text-search');
search?.addEventListener('change', searchTask);
create?.addEventListener('click', addTask);
TaskSearch();
TaskList(tasks);

