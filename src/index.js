import './style.css';

const todos = [
  {
    description: 'Wash Cloth',
    completed: false,
    index: 0,
  },
  {
    description: 'Watch Netflix',
    completed: false,
    index: 4,
  },
  {
    description: 'Write Code',
    completed: true,
    index: 2,
  },
  {
    description: 'Read',
    completed: false,
    index: 3,
  },
  {
    description: 'Debug Code',
    completed: false,
    index: 1,
  },
];

const listContainer = document.querySelector('.lists');
todos.sort((a, b) => a.index - b.index);

todos.forEach((todo) => {
  const list = document.createElement('li');
  list.innerHTML = `
      <div>
        <input type="checkbox" name="" class="task-complete check ${todo.completed ? 'hide' : ''}">
        <i class="fa fa-check list-drag-btn check check-icon ${!todo.completed ? 'hide' : ''}"></i>
        <p ${todo.completed ? 'class="completed"' : ''}>${todo.description}</p>
      </div>
      <i class="fa fa-ellipsis-vertical list-drag-btn"></i>
    `;
  listContainer.appendChild(list);
});
