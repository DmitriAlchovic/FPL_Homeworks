interface Task {
  title: string;
  priority: string;
  dueDate: Date;
  description: string;
  isDone: boolean;
}
export function TaskList(tasks: Task[]) {
  const oldTable = document.getElementById('task-table');
  const container = document.getElementById('container');
  if (oldTable) {
    container?.removeChild(oldTable);
  }
  const table = document.createElement('table');
  table.id = 'task-table';
  table.innerHTML = `
      <thead>
        <tr>
        <th>Done</th>
          <th>Title</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${tasks
          .map((task) => {
            return `
            <tr>
                <td><input type="checkbox" id="scales" name="scales" checked=${
                  task.isDone
                } /></td>
              <td>${task.title}</td>
              <td>${task.priority}</td>
              <td>${task.dueDate.toLocaleDateString()}</td>
              <td>${task.description}</td>
            </tr>
          `;
          })
          .join('')}
      </tbody>
    `;
  container?.appendChild(table);
}
