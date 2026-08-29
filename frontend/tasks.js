const API_URL = 'http://localhost:5000/tasks';

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Fetch and display all tasks
async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    renderTasks(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
  }
}

// Render tasks on the page
function renderTasks(tasks) {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    taskList.innerHTML = '<p class="empty-message">No tasks yet. Add one above!</p>';
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task.title}</span>
      <button class="delete-btn" data-id="${task._id}">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Add a new task
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = taskInput.value.trim();
  if (!title) return;

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    taskInput.value = '';
    fetchTasks();
  } catch (err) {
    console.error('Error adding task:', err);
  }
});

// Delete a task (using event delegation)
taskList.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.getAttribute('data-id');
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  }
});

// Load tasks when page opens
fetchTasks();