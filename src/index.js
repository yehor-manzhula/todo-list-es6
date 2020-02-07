import Store from './core/store/index.js'
import App from './app/components/app/index.js';

import { TodoList } from './app/models/index.js';
import app from './app/components/app/index.js';

window.addEventListener('load', main);

async function main() {
    const store = new Store();    
    const tasks = await store.getItem('tasks');

    const todos = new TodoList(tasks);
    
    todos.on('changed', () => store.setItem('tasks', todos));

    const application = new App();
    
    application.addEventListener('create-new-todo', ({ detail }) => {
        todos.push(detail);
    });

    application.todos = todos;

    document.querySelector('#app').appendChild(application);
}